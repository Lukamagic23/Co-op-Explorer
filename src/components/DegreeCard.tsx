import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { INTEREST_LABELS, type Degree } from '../content/schema';
import styles from './DegreeCard.module.css';

interface DegreeCardProps {
  degree: Degree;
  explored?: boolean;
  headingLevel?: 'h2' | 'h3';
}

export function DegreeCard({ degree, explored = false, headingLevel: Heading = 'h3' }: DegreeCardProps) {
  return (
    <Link to={`/degrees/${degree.slug}`} className={styles.card}>
      <div className={styles.top}>
        <p className="eyebrow">{degree.faculty}</p>
        {explored && (
          <span className={styles.explored}>
            <Check size={14} aria-hidden="true" /> Explored
          </span>
        )}
      </div>
      <Heading className={styles.name}>{degree.name}</Heading>
      <p className={styles.summary}>{degree.summary}</p>
      <p className={styles.duration}>{degree.duration}</p>
      <ul className="chip-row" aria-label="Interests">
        {degree.interests.slice(0, 3).map((interest) => (
          <li key={interest} className="chip">
            {INTEREST_LABELS[interest]}
          </li>
        ))}
      </ul>
      <span className={styles.cta} aria-hidden="true">
        Explore <ArrowRight size={18} />
      </span>
    </Link>
  );
}
