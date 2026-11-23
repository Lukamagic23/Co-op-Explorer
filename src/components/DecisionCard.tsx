import { useState } from 'react';
import type { DecisionMoment } from '../content/schema';
import styles from './DecisionCard.module.css';

interface DecisionCardProps {
  decision: DecisionMoment;
}

/** A short scenario. Any choice reveals what an experienced colleague would do. No scores. */
export function DecisionCard({ decision }: DecisionCardProps) {
  const [choice, setChoice] = useState<number | null>(null);
  const headingId = `${decision.id}-heading`;
  const chosen = choice === null ? null : decision.options[choice];

  return (
    <article id={decision.id} className={styles.card} aria-labelledby={headingId}>
      <p className="eyebrow">Decision moment · {decision.time}</p>
      <h3 id={headingId} className={styles.scenario}>
        {decision.scenario}
      </h3>
      <div className={styles.options} role="group" aria-label="What would you do?">
        <p className={styles.prompt}>What would you do?</p>
        {decision.options.map((option, index) => (
          <button
            key={option.label}
            type="button"
            className={styles.option}
            aria-pressed={choice === index}
            onClick={() => setChoice(index)}
          >
            <span className={styles.letter} aria-hidden="true">
              {String.fromCharCode(65 + index)}
            </span>
            {option.label}
          </button>
        ))}
      </div>
      <div aria-live="polite">
        {chosen && (
          <div className={styles.reveal}>
            <div>
              <p className="eyebrow">What tends to happen</p>
              <p>{chosen.outcome}</p>
            </div>
            <div className={styles.colleague}>
              <p className="eyebrow">What an experienced colleague would do</p>
              <p>{decision.colleagueView}</p>
            </div>
            <p className={styles.hint}>You can pick another option to compare.</p>
          </div>
        )}
      </div>
    </article>
  );
}
