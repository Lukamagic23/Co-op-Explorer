/**
 * Content schema for a degree. Every degree data file in ./degrees exports a
 * single `Degree` as its default export. The loader in ./index.ts picks up
 * every file in that folder automatically and validates it at startup.
 */

/** Interest tags drive the home page filter chips and the "Is this for me?" check. */
export const INTERESTS = [
  'numbers',
  'people',
  'building',
  'data',
  'markets',
  'risk',
  'science',
  'sustainability',
  'creativity',
] as const;
export type Interest = (typeof INTERESTS)[number];

export const INTEREST_LABELS: Record<Interest, string> = {
  numbers: 'Numbers',
  people: 'People',
  building: 'Building things',
  data: 'Data',
  markets: 'Markets',
  risk: 'Risk',
  science: 'Science',
  sustainability: 'Sustainability',
  creativity: 'Creativity',
};

export type WorkloadLevel = 'Moderate' | 'High' | 'Very high';
export type MathsLoad = 'Light' | 'Moderate' | 'Heavy' | 'Very heavy';

export interface Major {
  /** Short stable id, referenced by Course.majors. */
  id: string;
  name: string;
  description: string;
}

export interface Course {
  /** Course name only. Do not add course codes. */
  name: string;
  description: string;
  /** Major ids this course belongs to. Leave empty for core courses. */
  majors: string[];
}

export interface Year {
  /** 1-based year of study. */
  year: number;
  courses: Course[];
}

export interface Skill {
  name: string;
  /** The real task where this skill gets used. */
  inPractice: string;
}

export interface TimeBlock {
  /** 24-hour time, e.g. "09:00". */
  time: string;
  title: string;
  /** What the student actually does in this block. */
  whatYouDo: string;
  withWhom: string[];
  tools: string[];
  hardOrSurprising: string;
}

export interface DecisionOption {
  label: string;
  /** What tends to happen if you take this option. */
  outcome: string;
}

export interface DecisionMoment {
  id: string;
  /** Time of day the scenario happens, matching a TimeBlock time. */
  time: string;
  scenario: string;
  options: DecisionOption[];
  /** What an experienced colleague would do, and why. Shown after any choice. */
  colleagueView: string;
}

export interface Day {
  /** One-sentence framing of the day. */
  intro: string;
  /** 6 to 8 blocks. */
  blocks: TimeBlock[];
}

export interface PlacementDay extends Day {
  /** Setting, e.g. "Week 9 of a six-month placement at a general insurer". */
  setting: string;
  /** 1 or 2 decision moments. */
  decisions: DecisionMoment[];
}

export interface CampusDay extends Day {
  setting: string;
}

export interface CoopFacts {
  placementLength: string;
  numberOfPlacements: string;
  employerTypes: string[];
  exampleRoles: string[];
}

export interface EmployerType {
  /** Kind of employer, e.g. "Major bank". */
  type: string;
  whatYouMightDo: string;
  /** Real employer name. Required when `logo` is set; used as the logo alt text. */
  name?: string;
  /** Imported logo image URL. Only use logos you are allowed to display. */
  logo?: string;
}

export interface PhotoCredit {
  creator: string;
  title?: string;
  /** Short licence label, e.g. "CC BY 2.0". */
  license: string;
  licenseUrl?: string;
  /** Page where the photo was published. */
  sourceUrl: string;
}

export interface Photo {
  src: string;
  width: number;
  height: number;
  /** Required for openly licensed photos; listed on the About page. */
  credit?: PhotoCredit;
}

export interface TradeOff {
  title: string;
  detail: string;
}

export interface Degree {
  slug: string;
  name: string;
  faculty: string;
  duration: string;
  summary: string;
  suits: string[];
  mightNotSuit: string[];
  interests: Interest[];
  overview: string;
  /** Short phrase used on the compare page, e.g. "How businesses run on information systems". */
  studyFocus: string;
  workload: { level: WorkloadLevel; note: string };
  /** How much maths the degree involves, and what kind. */
  maths: { level: MathsLoad; note: string };
  majorsHeading: string;
  majors: Major[];
  years: Year[];
  skills: Skill[];
  placementDay: PlacementDay;
  campusDay: CampusDay;
  coop: CoopFacts;
  employers: EmployerType[];
  tradeOffs: TradeOff[];
  /** Alt text for the hero and overview images (shown on the placeholder when no photo is set). */
  imageAlt: { hero: string; campus: string };
  /** Hero photo beside the degree title. Without it, a labelled placeholder is shown. */
  heroImage?: Photo;
  /** Photo beside the overview. Without it, a labelled placeholder is shown. */
  campusImage?: Photo;
  /** Specific claims that must be checked against the UNSW Handbook before launch. */
  toVerify: string[];
}
