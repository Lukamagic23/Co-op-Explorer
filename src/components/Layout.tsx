import { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { SiteHeader } from './SiteHeader';
import { Footer } from './Footer';
import { HashLink } from './HashLink';

export function Layout() {
  return (
    <>
      <HashLink targetId="main" className="skip-link">
        Skip to content
      </HashLink>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<p className="container section muted">Loading…</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
