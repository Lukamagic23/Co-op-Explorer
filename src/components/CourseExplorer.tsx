import { useId, useRef, useState, type KeyboardEvent } from 'react';
import type { Major, Year } from '../content/schema';
import { CourseAccordion } from './CourseAccordion';
import styles from './CourseExplorer.module.css';

interface CourseExplorerProps {
  years: Year[];
  majors: Major[];
  majorsHeading: string;
}

/** Year tabs with course accordions. Major chips highlight the courses in each major. */
export function CourseExplorer({ years, majors, majorsHeading }: CourseExplorerProps) {
  const [activeYear, setActiveYear] = useState(0);
  const [major, setMajor] = useState<string | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const majorName = majors.find((m) => m.id === major)?.name;

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = years.length - 1;
    const next =
      event.key === 'ArrowRight' ? (activeYear + 1) % years.length
      : event.key === 'ArrowLeft' ? (activeYear - 1 + years.length) % years.length
      : event.key === 'Home' ? 0
      : event.key === 'End' ? last
      : null;
    if (next === null) return;
    event.preventDefault();
    setActiveYear(next);
    tabs.current[next]?.focus();
  };

  const year = years[activeYear];

  return (
    <div className={styles.explorer}>
      <div className={styles.majors}>
        <p className="eyebrow" id={`${baseId}-majors`}>
          Highlight courses by {majorsHeading.toLowerCase()}
        </p>
        <div className="chip-row" role="group" aria-labelledby={`${baseId}-majors`}>
          {majors.map((m) => (
            <button
              key={m.id}
              type="button"
              className="chip"
              aria-pressed={major === m.id}
              onClick={() => setMajor(major === m.id ? null : m.id)}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>

      <div role="tablist" aria-label="Year of study" className={styles.tabs}>
        {years.map((y, index) => {
          const matches = major ? y.courses.filter((c) => c.majors.includes(major)).length : 0;
          return (
            <button
              key={y.year}
              ref={(el) => {
                tabs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${index}`}
              aria-selected={index === activeYear}
              aria-controls={`${baseId}-panel`}
              tabIndex={index === activeYear ? 0 : -1}
              className={styles.tab}
              onClick={() => setActiveYear(index)}
              onKeyDown={onKeyDown}
            >
              Year {y.year}
              {major && (
                <span className={styles.count} data-zero={matches === 0}>
                  {matches}
                  <span className="visually-hidden"> {majorName} courses</span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${activeYear}`}
        className={styles.panel}
      >
        <CourseAccordion key={year.year} courses={year.courses} majors={majors} highlight={major} />
      </div>
    </div>
  );
}
