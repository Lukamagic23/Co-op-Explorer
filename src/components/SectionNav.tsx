import { useActiveSection } from '../hooks/useActiveSection';
import { HashLink } from './HashLink';
import styles from './SectionNav.module.css';

interface SectionNavProps {
  sections: { id: string; label: string }[];
}

/** Sticky in-page anchors that highlight the section currently in view. */
export function SectionNav({ sections }: SectionNavProps) {
  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <nav className={styles.nav} aria-label="On this page">
      <div className="container">
        <ul className={styles.list}>
          {sections.map((section) => (
            <li key={section.id}>
              <HashLink
                targetId={section.id}
                className={styles.link}
                aria-current={active === section.id ? 'location' : undefined}
              >
                {section.label}
              </HashLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
