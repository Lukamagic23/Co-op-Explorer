import type { ReactNode } from 'react';
import { ShapedImage, type Shape } from './ShapedImage';
import styles from './Hero.module.css';

interface HeroProps {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  image: { alt: string; src?: string; shape?: Shape; width?: number; height?: number };
  actions?: ReactNode;
}

export function Hero({ eyebrow, title, children, image, actions }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="page-title">
      <div className={styles.shape} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 id="page-title" className={styles.title}>
            {title}
          </h1>
          <div className={styles.body}>{children}</div>
          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
        <div className={styles.image}>
          <ShapedImage
            shape={image.shape ?? 'blob'}
            alt={image.alt}
            src={image.src}
            width={image.width ?? 620}
            height={image.height ?? 700}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
