import { useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Button } from '../components/Button';
import { SectionNav } from '../components/SectionNav';
import { CourseExplorer } from '../components/CourseExplorer';
import { SegmentedToggle } from '../components/SegmentedToggle';
import { DayTimeline } from '../components/DayTimeline';
import { DecisionCard } from '../components/DecisionCard';
import { LogoGrid } from '../components/LogoGrid';
import { ShapedImage } from '../components/ShapedImage';
import { getDegree, similarDegrees } from '../content';
import type { Day } from '../content/schema';
import { dayGlance } from '../content/derive';
import { useProgress } from '../hooks/useProgress';
import NotFoundPage from './NotFoundPage';
import styles from './DegreePage.module.css';

type DayView = 'placement' | 'campus';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'majors', label: 'Majors' },
  { id: 'courses', label: 'Courses' },
  { id: 'day-in-the-life', label: 'Day in the life' },
  { id: 'coop-facts', label: 'Co-op facts' },
  { id: 'employers', label: 'Employers' },
  { id: 'trade-offs', label: 'Trade-offs' },
  { id: 'similar', label: 'Similar degrees' },
];

function glance(day: Day) {
  const g = dayGlance(day);
  return [
    { label: 'Day runs', value: `${g.start} to ${g.end}` },
    { label: 'Groups of people you deal with', value: String(g.peopleGroups) },
    { label: 'Blocks working alone', value: `${g.soloBlocks} of ${g.totalBlocks}` },
  ];
}

export default function DegreePage() {
  const { slug } = useParams();
  const degree = getDegree(slug);
  const [params, setParams] = useSearchParams();
  const { markExplored } = useProgress();

  useEffect(() => {
    if (degree) markExplored(degree.slug);
  }, [degree, markExplored]);

  useEffect(() => {
    if (degree) document.title = `${degree.name} · Co-op Explorer`;
    return () => {
      document.title = 'Co-op Explorer';
    };
  }, [degree]);

  if (!degree) return <NotFoundPage />;

  const view: DayView = params.get('day') === 'campus' ? 'campus' : 'placement';
  const setView = (next: DayView) =>
    setParams(
      (current) => {
        const updated = new URLSearchParams(current);
        updated.set('day', next);
        return updated;
      },
      { replace: true, preventScrollReset: true },
    );

  const day = view === 'placement' ? degree.placementDay : degree.campusDay;
  const similar = similarDegrees(degree, 3);

  return (
    <>
      <Hero
        eyebrow={degree.faculty}
        title={degree.name}
        image={{ alt: degree.imageAlt.hero, shape: 'blob', src: degree.heroImage?.src }}
        actions={<Button to={`/compare?d=${[degree.slug, ...similar.slice(0, 1).map((d) => d.slug)].join(',')}`}>Compare with a similar degree</Button>}
      >
        <p>{degree.summary}</p>
        <p className={styles.duration}>{degree.duration}</p>
      </Hero>

      <SectionNav sections={SECTIONS} />

      <section id="overview" className="section" aria-labelledby="overview-heading">
        <div className={`container ${styles.split}`}>
          <div className={styles.stack}>
            <h2 id="overview-heading" className="section-title">
              Overview
            </h2>
            <p className="lead">{degree.overview}</p>
            <div className={styles.fit}>
              <div>
                <h3 className={styles.subhead}>Suits you if</h3>
                <ul className={styles.bullets}>
                  {degree.suits.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={styles.subhead}>Might not suit you if</h3>
                <ul className={styles.bullets}>
                  {degree.mightNotSuit.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.sideImage}>
            <ShapedImage
              shape="pentagon"
              alt={degree.imageAlt.campus}
              src={degree.campusImage?.src}
              width={520}
              height={560}
            />
          </div>
        </div>
        <div className="container">
          <h3 className={`${styles.subhead} ${styles.skillsHeading}`}>Skills you build</h3>
          <ul className={styles.skills}>
            {degree.skills.map((skill) => (
              <li key={skill.name} className={styles.skill}>
                <p className={styles.skillName}>{skill.name}</p>
                <p className="muted">{skill.inPractice}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="majors" className={`section ${styles.tinted}`} aria-labelledby="majors-heading">
        <div className="container">
          <h2 id="majors-heading" className="section-title">
            {degree.majorsHeading}
          </h2>
          <ul className={styles.majors}>
            {degree.majors.map((major) => (
              <li key={major.id} className={styles.major}>
                <h3 className={styles.majorName}>{major.name}</h3>
                <p>{major.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="courses" className="section" aria-labelledby="courses-heading">
        <div className="container">
          <h2 id="courses-heading" className="section-title">
            Courses by year
          </h2>
          <p className={`lead ${styles.sectionLead}`}>
            A selection of core and example courses for each year, in plain English. Open a course to see what it
            involves.
          </p>
          <CourseExplorer years={degree.years} majors={degree.majors} majorsHeading={degree.majorsHeading} />
          <p className="verify-note after-block">
            Course names are examples. Check the current structure in the official UNSW Handbook before planning
            your enrolment.
          </p>
        </div>
      </section>

      <section id="day-in-the-life" className={`section ${styles.tinted}`} aria-labelledby="day-heading">
        <div className="container">
          <div className={styles.dayHead}>
            <h2 id="day-heading" className="section-title">
              A day in the life
            </h2>
            <SegmentedToggle<DayView>
              legend="Which day to show"
              value={view}
              onChange={setView}
              options={[
                { value: 'placement', label: 'On placement' },
                { value: 'campus', label: 'On campus' },
              ]}
            />
          </div>

          <div className={styles.dayIntro}>
            <div className={styles.stack}>
              <p className="eyebrow">{day.setting}</p>
              <p className="lead">{day.intro}</p>
            </div>
            <dl className={styles.glance} aria-label="At a glance">
              {glance(day).map((item) => (
                <div key={item.label}>
                  <dt className="eyebrow">{item.label}</dt>
                  <dd className={styles.glanceValue}>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.timeline}>
            <DayTimeline
              key={view}
              label={view === 'placement' ? 'Placement day timeline' : 'Campus day timeline'}
              blocks={day.blocks}
              decisions={view === 'placement' ? degree.placementDay.decisions : []}
            />
          </div>

          {view === 'placement' && (
            <div className={styles.decisions}>
              <h3 className={styles.subhead}>Decision moments</h3>
              {degree.placementDay.decisions.map((decision) => (
                <DecisionCard key={decision.id} decision={decision} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="coop-facts" className="section" aria-labelledby="coop-heading">
        <div className="container">
          <h2 id="coop-heading" className="section-title">
            Co-op facts
          </h2>
          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt className="eyebrow">Placement length</dt>
              <dd>{degree.coop.placementLength}</dd>
            </div>
            <div className={styles.fact}>
              <dt className="eyebrow">Number of placements</dt>
              <dd>{degree.coop.numberOfPlacements}</dd>
            </div>
            <div className={styles.fact}>
              <dt className="eyebrow">Typical employer types</dt>
              <dd>
                <ul className="chip-row">
                  {degree.coop.employerTypes.map((e) => (
                    <li key={e} className="chip">
                      {e}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className={styles.fact}>
              <dt className="eyebrow">Example role titles</dt>
              <dd>
                <ul className={styles.bullets}>
                  {degree.coop.exampleRoles.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
          <p className="verify-note after-block">
            Placement numbers, lengths and timing vary by program and change over time. Confirm them with the UNSW
            Co-op Program before relying on them.
          </p>
        </div>
      </section>

      <section id="employers" className="section" aria-labelledby="employers-heading">
        <div className="container">
          <LogoGrid heading="Employers you could work with" headingId="employers-heading" employers={degree.employers} />
        </div>
      </section>

      <section id="trade-offs" className={`section ${styles.tinted}`} aria-labelledby="tradeoffs-heading">
        <div className="container">
          <h2 id="tradeoffs-heading" className="section-title">
            Honest trade-offs
          </h2>
          <ol className={styles.tradeoffs}>
            {degree.tradeOffs.map((t, index) => (
              <li key={t.title} className={styles.tradeoff}>
                <span className={styles.tradeoffNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className={styles.stack}>
                  <h3 className={styles.tradeoffTitle}>{t.title}</h3>
                  <p>{t.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.verify}>
            <h3 className={styles.subhead}>Check before you rely on this page</h3>
            <ul className={styles.bullets}>
              {degree.toVerify.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="similar" className="section" aria-labelledby="next-heading">
        <div className="container">
          <h2 id="next-heading" className="section-title">
            Similar degrees
          </h2>
          <p className={`lead ${styles.sectionLead}`}>
            Degrees that share the most interests with {degree.name}. Open one, or compare it side by side.
          </p>
          <ul className={styles.similar}>
            {similar.map((d) => (
              <li key={d.slug} className={styles.similarItem}>
                <p className="eyebrow">{d.faculty}</p>
                <Link to={`/degrees/${d.slug}`} className={styles.similarName}>
                  {d.name}
                </Link>
                <p className="muted">{d.summary}</p>
                <Link to={`/compare?d=${degree.slug},${d.slug}`} className="text-link">
                  Compare with {degree.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="after-block">
            <Link to={`/compare?d=${[degree.slug, ...similar.map((d) => d.slug)].slice(0, 3).join(',')}`} className="text-link">
              Compare {degree.name} with the top two side by side
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
