import type { ReactNode } from 'react';
import styles from './PageIntro.module.css';

interface PageIntroProps {
  title: string;
  children?: ReactNode;
}

/** Page title and intro for pages without a hero image. */
export function PageIntro({ title, children }: PageIntroProps) {
  return (
    <section className={styles.intro} aria-labelledby="page-title">
      <div className={styles.shape} aria-hidden="true" />
      <div className="container">
        <h1 id="page-title" className={styles.title}>
          {title}
        </h1>
        {children && <div className={`lead ${styles.body}`}>{children}</div>}
      </div>
    </section>
  );
}
