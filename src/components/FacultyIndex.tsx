import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { degrees, degreesInFaculty, faculties } from '../content';
import { useProgress } from '../hooks/useProgress';
import styles from './FacultyIndex.module.css';

/** Every degree listed by faculty, as a compact index. */
export function FacultyIndex() {
  const { explored } = useProgress();
  return (
    <section className={styles.index} aria-labelledby="faculty-index-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <h2 id="faculty-index-heading" className={styles.heading}>
            Browse by faculty
          </h2>
          <p>
            {degrees.length} co-op degrees across {faculties.length} faculties. Each one has the same sections, so you
            can move between them and compare like with like.
          </p>
        </div>
        <div className={styles.columns}>
          {faculties.map((faculty) => (
            <div key={faculty}>
              <h3 className={styles.faculty}>{faculty.replace(/^UNSW /, '')}</h3>
              <ul className={styles.list}>
                {degreesInFaculty(faculty).map((d) => (
                  <li key={d.slug}>
                    <Link to={`/degrees/${d.slug}`} className={styles.link}>
                      <span>{d.name}</span>
                      {explored.includes(d.slug) ? (
                        <span className={styles.seen}>Explored</span>
                      ) : (
                        <ChevronRight size={16} aria-hidden="true" className={styles.chevron} />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
