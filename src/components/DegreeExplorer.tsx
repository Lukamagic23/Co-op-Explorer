import { useMemo, useState } from 'react';
import { degrees, faculties } from '../content';
import { INTERESTS, INTEREST_LABELS, type Interest } from '../content/schema';
import { useProgress } from '../hooks/useProgress';
import { DegreeCard } from './DegreeCard';
import styles from './DegreeExplorer.module.css';

/** Degree grid with instant client-side filtering by faculty and interest. */
export function DegreeExplorer() {
  const [faculty, setFaculty] = useState<string | null>(null);
  const [interests, setInterests] = useState<Interest[]>([]);
  const { explored } = useProgress();

  const available = useMemo(() => INTERESTS.filter((i) => degrees.some((d) => d.interests.includes(i))), []);

  const results = degrees.filter(
    (d) =>
      (faculty === null || d.faculty === faculty) &&
      (interests.length === 0 || interests.some((i) => d.interests.includes(i))),
  );

  const toggleInterest = (interest: Interest) =>
    setInterests((current) => (current.includes(interest) ? current.filter((i) => i !== interest) : [...current, interest]));

  const clear = () => {
    setFaculty(null);
    setInterests([]);
  };

  return (
    <div className={styles.explorer}>
      <div className={styles.filters}>
        <fieldset className={styles.group}>
          <legend className="eyebrow">Faculty</legend>
          <div className="chip-row">
            <button type="button" className="chip" aria-pressed={faculty === null} onClick={() => setFaculty(null)}>
              All faculties
            </button>
            {faculties.map((f) => (
              <button key={f} type="button" className="chip" aria-pressed={faculty === f} onClick={() => setFaculty(f)}>
                {f}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className={styles.group}>
          <legend className="eyebrow">I am interested in</legend>
          <div className="chip-row">
            {available.map((interest) => (
              <button
                key={interest}
                type="button"
                className="chip"
                aria-pressed={interests.includes(interest)}
                onClick={() => toggleInterest(interest)}
              >
                {INTEREST_LABELS[interest]}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <p className={styles.count} role="status">
        Showing {results.length} of {degrees.length} degrees
        {explored.length > 0 && ` · ${explored.length} of ${degrees.length} explored`}
      </p>

      {results.length > 0 ? (
        <ul className={styles.grid}>
          {results.map((degree) => (
            <li key={degree.slug}>
              <DegreeCard degree={degree} explored={explored.includes(degree.slug)} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.empty}>
          <p>No degrees match these filters. Try removing an interest.</p>
          <button type="button" className="chip" onClick={clear}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
