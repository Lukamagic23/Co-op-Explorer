import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/unsw-logo.png';
import { useProgress } from '../hooks/useProgress';
import styles from './SiteHeader.module.css';

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/degrees', label: 'Degrees', end: false },
  { to: '/compare', label: 'Compare', end: false },
  { to: '/about', label: 'About', end: false },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { explored, total } = useProgress();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandRow}>
          <Link to="/" className={styles.brand}>
            <img src={logo} alt="UNSW Sydney" width={307} height={320} className={styles.logo} />
            <span className={styles.divider} aria-hidden="true" />
            <span className={styles.title}>Co-op Explorer</span>
          </Link>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            <span>{open ? 'Close' : 'Menu'}</span>
          </button>
        </div>
        <div className={styles.navRow} data-open={open}>
          <nav id="site-nav" aria-label="Main">
            <ul className={styles.navList}>
              {NAV.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.end} className={styles.navLink}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {explored.length > 0 && (
            <p className={styles.progress}>
              {explored.length} of {total} explored
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
