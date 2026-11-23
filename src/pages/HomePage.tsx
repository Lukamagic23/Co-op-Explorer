import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Button } from '../components/Button';
import { DegreeExplorer } from '../components/DegreeExplorer';
import { ShapedImage } from '../components/ShapedImage';
import { degrees } from '../content';
import heroGif from '../assets/photos/home-hero.gif';
import mentorPhoto from '../assets/photos/mentor.jpg';
import styles from './HomePage.module.css';

const STEPS = [
  { title: 'Pick a degree', body: 'Start with the one you are curious about, or filter by what you are interested in.' },
  { title: 'Switch between two days', body: 'See an hour-by-hour placement day, then a campus day, and notice how different they are.' },
  { title: 'Try a real decision', body: 'Each placement day has a moment where you choose what to do, then see what an experienced colleague would do.' },
  { title: 'Compare side by side', body: 'Put two or three degrees next to each other: study, tools, workload and trade-offs.' },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Unofficial guide to UNSW co-op degrees"
        title="See a co-op degree before you choose it"
        image={{
          src: heroGif,
          alt: 'Two students laughing together over coffee at a table on campus',
          shape: 'blob',
          width: 864,
          height: 864,
        }}
        actions={
          <>
            <Button to="/degrees">Explore the degrees</Button>
            <Link to="/is-this-for-me" className="text-link">
              Not sure? Take the five-question check
            </Link>
          </>
        }
      >
        <p>
          A co-op degree combines university study with paid industry placements. Here you can see what that actually
          looks like for {degrees.length} degrees across business, engineering and science: a day on placement, a day on campus, and what you study each year.
        </p>
      </Hero>

      <section className={styles.how} aria-labelledby="how-heading">
        <div className="container">
          <h2 id="how-heading" className={styles.howTitle}>
            How this works
          </h2>
          <ol className={styles.steps}>
            {STEPS.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="degrees-heading" id="degrees">
        <div className="container">
          <h2 id="degrees-heading" className="section-title">
            Choose a degree to explore
          </h2>
          <DegreeExplorer />
        </div>
      </section>

      <section className="section" aria-labelledby="start-heading">
        <div className={`container ${styles.split}`}>
          <div className={styles.splitText}>
            <h2 id="start-heading" className="section-title">
              Not sure where to start?
            </h2>
            <p className="lead">
              Answer five short questions about what you enjoy. You will get up to three degrees to read about first.
              It is a starting point, not a verdict, and you can skip it.
            </p>
            <div>
              <Button to="/is-this-for-me" variant="secondary">
                Start the check
              </Button>
            </div>
          </div>
          <div className={styles.splitImage}>
            <ShapedImage
              shape="pentagon"
              src={mentorPhoto}
              alt="Two students in business wear reviewing notes on a tablet together"
              width={748}
              height={708}
            />
          </div>
        </div>
      </section>
    </>
  );
}
