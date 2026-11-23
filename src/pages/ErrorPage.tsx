import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';
import NotFoundPage from './NotFoundPage';

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) return <NotFoundPage />;

  const detail = error instanceof Error ? error.message : isRouteErrorResponse(error) ? error.statusText : null;

  return (
    <>
      <PageIntro title="Something went wrong">
        <p>This page could not be shown. Reloading usually fixes it. If it keeps happening, the content may be broken.</p>
      </PageIntro>
      <section className="section section-flush-top" aria-label="Error details">
        <div className="container">
          {detail && <pre className="verify-note">{detail}</pre>}
          <p className="after-block">
            <a href="/" className="text-link">
              Go to the home page
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
