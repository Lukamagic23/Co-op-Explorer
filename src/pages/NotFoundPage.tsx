import { Link } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';
import { Button } from '../components/Button';

export default function NotFoundPage() {
  return (
    <>
      <PageIntro title="Page not found">
        <p>That page does not exist. The link may be out of date, or the degree may have been renamed.</p>
      </PageIntro>
      <section className="section section-flush-top" aria-label="Where to go next">
        <div className="container">
          <Button to="/degrees">See all degrees</Button>
          <p className="after-block">
            Or go back to the <Link to="/" className="text-link">home page</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
