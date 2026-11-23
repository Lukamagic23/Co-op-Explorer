import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import type { DecisionMoment, TimeBlock } from '../content/schema';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { DetailPanel } from './DetailPanel';
import styles from './DayTimeline.module.css';

interface DayTimelineProps {
  label: string;
  blocks: TimeBlock[];
  decisions?: DecisionMoment[];
}

/**
 * Vertical timeline of time blocks. On wide screens it behaves as a vertical
 * tab list with a detail panel beside it; on narrow screens each block is an
 * accordion that opens inline. Arrow keys, Home and End move between blocks.
 */
export function DayTimeline({ label, blocks, decisions = [] }: DayTimelineProps) {
  const wide = useMediaQuery('(min-width: 60rem)');
  const [selected, setSelected] = useState<number>(0);
  const [openOnMobile, setOpenOnMobile] = useState<number | null>(null);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const decisionAt = (time: string) => decisions.find((d) => d.time === time)?.id;

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = blocks.length - 1;
    const next =
      event.key === 'ArrowDown' ? Math.min(index + 1, last)
      : event.key === 'ArrowUp' ? Math.max(index - 1, 0)
      : event.key === 'Home' ? 0
      : event.key === 'End' ? last
      : null;
    if (next === null) return;
    event.preventDefault();
    refs.current[next]?.focus();
    if (wide) setSelected(next);
  };

  if (!wide) {
    return (
      <ol className={styles.list} aria-label={label}>
        {blocks.map((block, index) => {
          const open = openOnMobile === index;
          const panelId = `${baseId}-panel-${index}`;
          return (
            <li key={block.time} className={styles.item} data-active={open}>
              <h3 className={styles.itemHeading}>
                <button
                  ref={(el) => {
                    refs.current[index] = el;
                  }}
                  type="button"
                  className={styles.trigger}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenOnMobile(open ? null : index)}
                  onKeyDown={(e) => onKeyDown(e, index)}
                >
                  <span className={styles.dot} aria-hidden="true" />
                  <span className={styles.time}>{block.time}</span>
                  <span className={styles.title}>{block.title}</span>
                  {decisionAt(block.time) && <span className={styles.flag}>Decision</span>}
                  <ChevronDown className={styles.chevron} size={20} aria-hidden="true" />
                </button>
              </h3>
              <div id={panelId} hidden={!open} className={styles.inlinePanel}>
                <DetailPanel block={block} decisionId={decisionAt(block.time)} showHeading={false} />
              </div>
            </li>
          );
        })}
      </ol>
    );
  }

  const current = blocks[selected];
  return (
    <div className={styles.wide}>
      <div role="tablist" aria-label={label} aria-orientation="vertical" className={styles.list}>
        {blocks.map((block, index) => {
          const isSelected = index === selected;
          return (
            <div key={block.time} className={styles.item} data-active={isSelected}>
              <button
                ref={(el) => {
                  refs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${index}`}
                aria-selected={isSelected}
                aria-controls={`${baseId}-tabpanel`}
                tabIndex={isSelected ? 0 : -1}
                className={styles.trigger}
                onClick={() => setSelected(index)}
                onKeyDown={(e) => onKeyDown(e, index)}
              >
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.time}>{block.time}</span>
                <span className={styles.title}>{block.title}</span>
                {decisionAt(block.time) && <span className={styles.flag}>Decision</span>}
              </button>
            </div>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-tabpanel`}
        aria-labelledby={`${baseId}-tab-${selected}`}
        tabIndex={0}
        className={styles.sidePanel}
      >
        <DetailPanel key={current.time} block={current} decisionId={decisionAt(current.time)} />
      </div>
    </div>
  );
}
