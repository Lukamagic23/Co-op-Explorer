import type { TimeBlock } from '../content/schema';
import { HashLink } from './HashLink';
import styles from './DetailPanel.module.css';

interface DetailPanelProps {
  block: TimeBlock;
  decisionId?: string;
  showHeading?: boolean;
}

export function DetailPanel({ block, decisionId, showHeading = true }: DetailPanelProps) {
  return (
    <div className={styles.panel}>
      {showHeading && (
        <div className={styles.head}>
          <p className={styles.time}>{block.time}</p>
          <h3 className={styles.title}>{block.title}</h3>
        </div>
      )}
      <p>{block.whatYouDo}</p>
      <dl className={styles.facts}>
        <div>
          <dt className="eyebrow">Who you work with</dt>
          <dd>{block.withWhom.join(', ')}</dd>
        </div>
        <div>
          <dt className="eyebrow">Tools</dt>
          <dd>
            <ul className="chip-row">
              {block.tools.map((tool) => (
                <li key={tool} className="chip">
                  {tool}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
      <div className={styles.hard}>
        <p className="eyebrow">What is hard or surprising</p>
        <p>{block.hardOrSurprising}</p>
      </div>
      {decisionId && (
        <HashLink targetId={decisionId} className="text-link">
          A decision comes up here. Try it below.
        </HashLink>
      )}
    </div>
  );
}
