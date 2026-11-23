import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Course, Major } from '../content/schema';
import styles from './CourseAccordion.module.css';

interface CourseAccordionProps {
  courses: Course[];
  majors: Major[];
  highlight: string | null;
}

export function CourseAccordion({ courses, majors, highlight }: CourseAccordionProps) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const baseId = useId();
  const majorName = (id: string) => majors.find((m) => m.id === id)?.name ?? id;

  const toggle = (index: number) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  const allOpen = open.size === courses.length;

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.expandAll}
        onClick={() => setOpen(allOpen ? new Set() : new Set(courses.map((_, i) => i)))}
      >
        {allOpen ? 'Collapse all' : 'Expand all'}
      </button>
      <ul className={styles.list}>
        {courses.map((course, index) => {
          const isOpen = open.has(index);
          const inMajor = highlight !== null && course.majors.includes(highlight);
          const panelId = `${baseId}-${index}`;
          return (
            <li key={course.name} className={styles.item} data-highlight={inMajor}>
              <h3 className={styles.heading}>
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                >
                  <span className={styles.text}>
                    <span className={styles.name}>{course.name}</span>
                    {inMajor && <span className={styles.badge}>In {majorName(highlight)}</span>}
                  </span>
                  <ChevronDown className={styles.chevron} size={20} aria-hidden="true" />
                </button>
              </h3>
              <div id={panelId} hidden={!isOpen} className={styles.panel}>
                <p>{course.description}</p>
                <p className={styles.meta}>
                  {course.majors.length === 0
                    ? 'Core course'
                    : `Part of: ${course.majors.map(majorName).join(', ')}`}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
