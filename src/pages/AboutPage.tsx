import { PageIntro } from '../components/PageIntro';
import { ShapedImage } from '../components/ShapedImage';
import { Button } from '../components/Button';
import { degrees } from '../content';
import type { Photo } from '../content/schema';
import eventPhoto from '../assets/photos/scholars-event.jpg';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <>
      <PageIntro title="About this project">
        <p>
          Co-op Explorer is an unofficial, student-built mock project. It helps high school and early university
          students see what a UNSW co-op degree involves before they commit to one.
        </p>
      </PageIntro>

      <section className="section section-flush-top" aria-label="About">
        <div className={`container ${styles.split}`}>
          <div className={styles.text}>
            <h2 className={styles.heading}>What a co-op degree is</h2>
            <p>
              A co-op degree combines university study with industry placements arranged through a program sponsored by
              employers. Students alternate between terms on campus and periods working in industry, and are usually
              supported by a scholarship. Entry is competitive and typically involves an application and interview
              alongside academic results.
            </p>
            <h2 className={styles.heading}>Why this site exists</h2>
            <p>
              Degree pages tell you what you will study. They rarely tell you what an ordinary Tuesday looks like, on
              placement or on campus. This site tries to fill that gap with specific, plain descriptions, including the
              parts that are hard.
            </p>
            <h2 className={styles.heading}>How the content was written</h2>
            <p>
              Each degree follows the same structure, and each includes trade-offs. Program names, course names, majors,
              placement rules and scholarship details are illustrative. They have not been checked against official
              sources and must be verified against the UNSW Handbook and the UNSW Co-op Program before anyone relies on
              them.
            </p>
            <h2 className={styles.heading}>What is not here</h2>
            <p>
              No accounts, no tracking and no sign-in. The site remembers which degrees you have opened in your own
              browser only, so it can show how many you have explored.
            </p>
            <div>
              <Button to="/degrees">Explore the degrees</Button>
            </div>
          </div>
          <div className={styles.image}>
            <ShapedImage
              shape="diagonal"
              src={eventPhoto}
              alt="Three co-op scholars in business wear talking outside a campus building"
              width={1014}
              height={608}
            />
          </div>
        </div>
      </section>

      <section id="photo-credits" className="section" aria-labelledby="credits-heading">
        <div className="container">
          <h2 id="credits-heading" className={styles.heading}>
            Photo credits
          </h2>
          <p className={styles.creditsIntro}>
            Degree page photos are openly licensed images found through Openverse, used under the licences listed. The
            home page images, the Business Information Systems top photo, the UNSW logo and the employer logos were
            supplied by the project owner for this mock.
          </p>
          <ul className={styles.credits}>
            {degrees.flatMap((degree) =>
              (
                [
                  ['Top photo', degree.heroImage],
                  ['Overview photo', degree.campusImage],
                ] as [string, Photo | undefined][]
              )
                .filter(([, photo]) => photo?.credit)
                .map(([label, photo]) => {
                  const credit = photo!.credit!;
                  return (
                    <li key={`${degree.slug}-${label}`}>
                      <span className={styles.creditWhere}>
                        {degree.name}, {label.toLowerCase()}
                      </span>
                      <span>
                        <a href={credit.sourceUrl} className="text-link" target="_blank" rel="noreferrer">
                          {credit.title ?? 'Photo'}
                        </a>{' '}
                        by {credit.creator},{' '}
                        {credit.licenseUrl ? (
                          <a href={credit.licenseUrl} target="_blank" rel="noreferrer">
                            {credit.license}
                          </a>
                        ) : (
                          credit.license
                        )}
                      </span>
                    </li>
                  );
                }),
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
