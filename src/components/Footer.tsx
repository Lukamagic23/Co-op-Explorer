import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <nav aria-label="Footer">
          <ul className={styles.links}>
            <li><Link to="/degrees">Degrees</Link></li>
            <li><Link to="/compare">Compare</Link></li>
            <li><Link to="/is-this-for-me">Is this for me?</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about#photo-credits">Photo credits</Link></li>
          </ul>
        </nav>
        <p className={styles.note}>
          Unofficial, student-built mock project. Not affiliated with or endorsed by UNSW Sydney. Degree content is
          illustrative and must be checked against the official UNSW Handbook.
        </p>
      </div>
    </footer>
  );
}
