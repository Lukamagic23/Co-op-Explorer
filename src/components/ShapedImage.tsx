import { useId } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import styles from './ShapedImage.module.css';

export type Shape = 'blob' | 'pentagon' | 'diagonal';

interface ShapedImageProps {
  shape: Shape;
  /** Alt text for a real image, or the description shown on the placeholder. */
  alt: string;
  /** Omit to render a labelled placeholder until licensed photography is added. */
  src?: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
  className?: string;
}

const BLOB_PATH =
  'M0.54,0.02 C0.77,-0.02 0.97,0.13 0.99,0.38 C1.01,0.62 0.87,0.8 0.66,0.93 C0.45,1.04 0.17,0.99 0.05,0.82 C-0.03,0.69 0.06,0.56 0.04,0.41 C0.02,0.2 0.3,0.06 0.54,0.02 Z';

/** An image (or placeholder) cropped to one of the site's mask shapes. */
export function ShapedImage({ shape, alt, src, width = 600, height = 600, loading = 'lazy', className }: ShapedImageProps) {
  const clipId = useId().replace(/:/g, '');
  const style = shape === 'blob' ? { clipPath: `url(#${clipId})` } : undefined;

  return (
    <div
      className={`${styles.frame} ${styles[shape]} ${className ?? ''}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {shape === 'blob' && (
        <svg width="0" height="0" aria-hidden="true" focusable="false" className={styles.defs}>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={BLOB_PATH} />
          </clipPath>
        </svg>
      )}
      {src ? (
        <img src={src} alt={alt} width={width} height={height} loading={loading} className={styles.media} style={style} />
      ) : (
        <div role="img" aria-label={alt} className={`${styles.media} ${styles.placeholder}`} style={style}>
          <ImageIcon size={28} strokeWidth={1.5} aria-hidden="true" />
          <span className={styles.label} aria-hidden="true">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}
