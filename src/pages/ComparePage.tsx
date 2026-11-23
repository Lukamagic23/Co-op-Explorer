import { Link, useSearchParams } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';
import { CompareTable } from '../components/CompareTable';
import { degrees, degreesInFaculty, faculties, getDegree, similarDegrees } from '../content';
import type { Degree } from '../content/schema';
import styles from './ComparePage.module.css';

const MAX = 3;

export default function ComparePage() {
  const [params, setParams] = useSearchParams();

  const fromUrl = [...new Set((params.get('d') ?? '').split(','))]
    .map((slug) => getDegree(slug))
    .filter((d): d is Degree => d !== undefined)
    .slice(0, MAX);
  const selected = fromUrl.length > 0 ? fromUrl : degrees.slice(0, 2);
  const slugs = selected.map((d) => d.slug);

  const toggle = (slug: string) => {
    const next = slugs.includes(slug) ? slugs.filter((s) => s !== slug) : [...slugs, slug];
    if (next.length === 0 || next.length > MAX) return;
    setParams({ d: next.join(',') }, { replace: true, preventScrollReset: true });
  };

  const anchor = selected[0];
  const suggestions = similarDegrees(anchor, 4).filter((d) => !slugs.includes(d.slug));

  return (
    <>
      <PageIntro title="Compare degrees">
        <p>
          Pick two or three degrees to see them side by side: workload and maths, what you study, what a placement day
          and a campus day look like, the tools you use, who each degree suits and the trade-offs.
        </p>
      </PageIntro>
      <section className="section section-flush-top" aria-label="Comparison">
        <div className="container">
          <div className={styles.picker}>
            <p className="eyebrow" id="picker-label">
              Degrees to compare (up to {MAX})
            </p>
            <div className={styles.faculties} role="group" aria-labelledby="picker-label">
              {faculties.map((faculty) => (
                <div key={faculty} className={styles.faculty}>
                  <p className={styles.facultyName}>{faculty}</p>
                  <div className="chip-row">
                    {degreesInFaculty(faculty).map((d) => {
                      const on = slugs.includes(d.slug);
                      const disabled = (!on && slugs.length >= MAX) || (on && slugs.length === 1);
                      return (
                        <button
                          key={d.slug}
                          type="button"
                          className="chip"
                          aria-pressed={on}
                          aria-disabled={disabled}
                          onClick={() => toggle(d.slug)}
                        >
                          {d.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.hint} role="status">
              {slugs.length === 1
                ? 'Add at least one more degree to compare.'
                : slugs.length >= MAX
                  ? `Comparing ${MAX}, the maximum. Remove one to add another.`
                  : `Comparing ${slugs.length}. You can add one more.`}
            </p>
          </div>

          {suggestions.length > 0 && (
            <div className={styles.suggest}>
              <p className="eyebrow">Often compared with {anchor.name}</p>
              <ul className={styles.suggestList}>
                {suggestions.map((d) => (
                  <li key={d.slug}>
                    <Link
                      to={`/compare?d=${anchor.slug},${d.slug}`}
                      replace
                      preventScrollReset
                      className="text-link"
                    >
                      {anchor.name} vs {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <CompareTable degrees={selected} />
        </div>
      </section>
    </>
  );
}
