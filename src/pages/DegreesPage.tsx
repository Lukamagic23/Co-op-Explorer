import { Link } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';
import { DegreeExplorer } from '../components/DegreeExplorer';
import { FacultyIndex } from '../components/FacultyIndex';

export default function DegreesPage() {
  return (
    <>
      <PageIntro title="Degrees">
        <p>
          Every degree here follows the same structure: what you study, a day on placement, a day on campus, the co-op
          details and the honest trade-offs. Filter by faculty or by what you are interested in.
        </p>
      </PageIntro>
      <FacultyIndex />
      <section className="section" aria-labelledby="filter-heading">
        <div className="container">
          <h2 id="filter-heading" className="section-title">
            Filter by interest
          </h2>
          <DegreeExplorer />
          <p className="muted after-block">
            Unsure which to open first? <Link to="/is-this-for-me" className="text-link">Try the five-question check</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
