import type { EmployerType } from '../content/schema';
import styles from './LogoGrid.module.css';

interface LogoGridProps {
  heading: string;
  headingId: string;
  employers: EmployerType[];
}

/** Four-column employer strip. Shows a logo where one is provided, otherwise a text placeholder. */
export function LogoGrid({ heading, headingId, employers }: LogoGridProps) {
  return (
    <div className={styles.wrap}>
      <h2 id={headingId} className={styles.heading}>
        {heading}
      </h2>
      <ul className={styles.grid}>
        {employers.map((employer) => (
          <li key={employer.name ?? employer.type} className={styles.item}>
            {employer.logo ? (
              <div className={styles.logoBox}>
                <img src={employer.logo} alt={employer.name} loading="lazy" className={styles.logo} />
              </div>
            ) : (
              <div className={styles.mark}>
                <span className={styles.wordmark}>{employer.type}</span>
                <span className={styles.tag}>Logo placeholder</span>
              </div>
            )}
            {employer.name && <p className={styles.type}>{employer.type}</p>}
            <p className={styles.note}>{employer.whatYouMightDo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
