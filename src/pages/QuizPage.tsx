import { PageIntro } from '../components/PageIntro';
import { QuizStepper } from '../components/QuizStepper';

export default function QuizPage() {
  return (
    <>
      <PageIntro title="Is this for me?">
        <p>
          Five quick questions about what you enjoy. At the end you get up to three degrees to look at first. It is a
          nudge, not a result, and you can skip any question or the whole check.
        </p>
      </PageIntro>
      <section className="section section-flush-top" aria-label="Questions">
        <div className="container">
          <QuizStepper />
        </div>
      </section>
    </>
  );
}
