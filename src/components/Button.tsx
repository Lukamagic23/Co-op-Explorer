import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import styles from './Button.module.css';

interface BaseProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  chevron?: boolean;
}

type ButtonProps =
  | (BaseProps & { to: string; onClick?: never; type?: never })
  | (BaseProps & { to?: never; onClick?: () => void; type?: 'button' | 'submit' });

/** Primary: yellow fill, black border. Secondary: outline only. Use primary for the main call to action. */
export function Button({ children, variant = 'primary', chevron = true, ...rest }: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;
  const content = (
    <>
      <span>{children}</span>
      {chevron && <ChevronRight className={styles.icon} size={18} strokeWidth={2.25} aria-hidden="true" />}
    </>
  );
  if (rest.to !== undefined) {
    return (
      <Link to={rest.to} className={className}>
        {content}
      </Link>
    );
  }
  return (
    <button type={rest.type ?? 'button'} onClick={rest.onClick} className={className}>
      {content}
    </button>
  );
}
