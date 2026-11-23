import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { INTEREST_LABELS, type Day, type Degree } from '../content/schema';
import { dayGlance } from '../content/derive';
import { useMediaQuery } from '../hooks/useMediaQuery';
import styles from './CompareTable.module.css';

interface Row {
  label: string;
  render: (degree: Degree) => ReactNode;
}

interface RowGroup {
  heading: string;
  rows: Row[];
}

const list = (items: string[]) => (
  <ul className={styles.bullets}>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const chips = (items: string[]) => (
  <ul className="chip-row">
    {items.map((item) => (
      <li key={item} className="chip">
        {item}
      </li>
    ))}
  </ul>
);

const rated = (level: string, note: string) => (
  <>
    <strong>{level}.</strong> {note}
  </>
);

const dayShape = (day: Day) => {
  const g = dayGlance(day);
  return `${g.start} to ${g.end}. ${g.peopleGroups} groups of people, ${g.soloBlocks} of ${g.totalBlocks} blocks working alone.`;
};

const placementTools = (degree: Degree) =>
  [...new Set(degree.placementDay.blocks.flatMap((b) => b.tools))].filter((t) => t !== 'None');

const GROUPS: RowGroup[] = [
  {
    heading: 'At a glance',
    rows: [
      { label: 'Faculty and length', render: (d) => `${d.faculty}. ${d.duration}.` },
      { label: 'Interests', render: (d) => chips(d.interests.map((i) => INTEREST_LABELS[i])) },
      { label: 'Workload', render: (d) => rated(d.workload.level, d.workload.note) },
      { label: 'Maths', render: (d) => rated(d.maths.level, d.maths.note) },
    ],
  },
  {
    heading: 'What you study',
    rows: [
      { label: 'Focus', render: (d) => d.studyFocus },
      { label: 'Majors or streams', render: (d) => list(d.majors.map((m) => m.name)) },
      { label: 'Skills you build', render: (d) => list(d.skills.map((s) => s.name)) },
    ],
  },
  {
    heading: 'Placement and campus',
    rows: [
      { label: 'Typical placement tasks', render: (d) => list(d.placementDay.blocks.filter((b) => b.title !== 'Lunch').map((b) => b.title)) },
      { label: 'Tools on placement', render: (d) => chips(placementTools(d)) },
      { label: 'Shape of a placement day', render: (d) => dayShape(d.placementDay) },
      { label: 'Shape of a campus day', render: (d) => dayShape(d.campusDay) },
      { label: 'Placement style', render: (d) => `${d.coop.numberOfPlacements}. ${d.coop.placementLength}.` },
      { label: 'Employer types', render: (d) => chips(d.coop.employerTypes) },
      { label: 'Typical roles', render: (d) => list(d.coop.exampleRoles) },
    ],
  },
  {
    heading: 'Fit',
    rows: [
      { label: 'Suits you if', render: (d) => list(d.suits) },
      { label: 'Might not suit you if', render: (d) => list(d.mightNotSuit) },
      { label: 'Trade-offs', render: (d) => list(d.tradeOffs.map((t) => t.title)) },
    ],
  },
];

interface CompareTableProps {
  degrees: Degree[];
}

/** Side-by-side table on wide screens; one degree at a time with a select control on phones. */
export function CompareTable({ degrees }: CompareTableProps) {
  const wide = useMediaQuery('(min-width: 48rem)');
  const [mobileSlug, setMobileSlug] = useState<string | null>(null);

  if (!wide) {
    const shown = degrees.find((d) => d.slug === mobileSlug) ?? degrees[0];
    return (
      <div className={styles.stack}>
        <label className={styles.selectLabel}>
          <span className="eyebrow">Showing</span>
          <select className={styles.select} value={shown.slug} onChange={(e) => setMobileSlug(e.target.value)}>
            {degrees.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name}
              </option>
            ))}
          </select>
        </label>
        <h2 className={styles.stackTitle}>
          <Link to={`/degrees/${shown.slug}`}>{shown.name}</Link>
        </h2>
        {GROUPS.map((group) => (
          <section key={group.heading} className={styles.stackGroup}>
            <h3 className={styles.groupHeading}>{group.heading}</h3>
            <dl className={styles.stackList}>
              {group.rows.map((row) => (
                <div key={row.label} className={styles.stackRow}>
                  <dt className="eyebrow">{row.label}</dt>
                  <dd>{row.render(shown)}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.scroller} tabIndex={0} role="region" aria-label="Degree comparison">
      <table className={styles.table}>
        <thead>
          <tr>
            <td className={styles.corner} />
            {degrees.map((d) => (
              <th key={d.slug} scope="col" className={styles.colHead}>
                <Link to={`/degrees/${d.slug}`}>{d.name}</Link>
              </th>
            ))}
          </tr>
        </thead>
        {GROUPS.map((group) => (
          <tbody key={group.heading}>
            <tr>
              <th scope="colgroup" colSpan={degrees.length + 1} className={styles.groupRow}>
                <span className={styles.groupLabel}>{group.heading}</span>
              </th>
            </tr>
            {group.rows.map((row) => (
              <tr key={row.label}>
                <th scope="row" className={styles.rowHead}>
                  {row.label}
                </th>
                {degrees.map((d) => (
                  <td key={d.slug} className={styles.cell}>
                    {row.render(d)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}
