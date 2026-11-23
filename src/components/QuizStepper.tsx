import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { degrees } from '../content';
import { quizQuestions, suggestDegrees, type QuizOption } from '../content/quiz';
import { Button } from './Button';
import { DegreeCard } from './DegreeCard';
import styles from './QuizStepper.module.css';

/** Five short questions that suggest up to three degrees to look at first. */
export function QuizStepper() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(QuizOption | undefined)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const first = useRef(true);

  const total = quizQuestions.length;
  const done = step >= total;

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  const answer = (option: QuizOption | undefined) => {
    setAnswers((current) => {
      const next = [...current];
      next[step] = option;
      return next;
    });
    setStep((s) => s + 1);
  };

  const restart = () => {
    setAnswers([]);
    setStep(0);
  };

  if (done) {
    const suggestions = suggestDegrees(answers, degrees);
    return (
      <div className={styles.quiz}>
        <h2 ref={headingRef} tabIndex={-1} className={styles.question}>
          {suggestions.length > 0 ? 'You might start with' : 'No strong pattern this time'}
        </h2>
        <p className={styles.caveat}>
          This is a nudge, not a result. Five questions cannot tell you which degree is right. Use it to decide which
          degree to read about first, then explore the others too.
        </p>
        {suggestions.length > 0 ? (
          <ul className={styles.results}>
            {suggestions.map((d) => (
              <li key={d.slug}>
                <DegreeCard degree={d} />
              </li>
            ))}
          </ul>
        ) : (
          <p>
            You skipped most questions, so there is nothing to go on. <Link to="/degrees" className="text-link">Browse all degrees</Link> instead.
          </p>
        )}
        <div className={styles.actions}>
          <Button to="/compare" variant="secondary">
            Compare degrees
          </Button>
          <button type="button" className={styles.textButton} onClick={restart}>
            Start again
          </button>
        </div>
      </div>
    );
  }

  const question = quizQuestions[step];
  const selected = answers[step];

  return (
    <div className={styles.quiz}>
      <p className={styles.progress}>
        Question {step + 1} of {total}
      </p>
      <div className={styles.bar} aria-hidden="true">
        <span style={{ width: `${(step / total) * 100}%` }} />
      </div>
      <h2 ref={headingRef} tabIndex={-1} className={styles.question} id={`q-${question.id}`}>
        {question.prompt}
      </h2>
      <ul className={styles.options} aria-labelledby={`q-${question.id}`}>
        {question.options.map((option) => (
          <li key={option.label}>
            <button
              type="button"
              className={styles.option}
              aria-pressed={selected?.label === option.label}
              onClick={() => answer(option)}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.nav}>
        <button type="button" className={styles.textButton} onClick={() => setStep((s) => s - 1)} disabled={step === 0}>
          Back
        </button>
        <button type="button" className={styles.textButton} onClick={() => answer(undefined)}>
          Skip this question
        </button>
        <Link to="/degrees" className={styles.textButton}>
          Skip the check
        </Link>
      </div>
    </div>
  );
}
