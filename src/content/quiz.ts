import type { Degree, Interest } from './schema';

export interface QuizOption {
  label: string;
  interests: Interest[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: QuizOption[];
}

/**
 * Questions score interests, not degrees, so new degrees are picked up
 * automatically through their `interests` field.
 */
export const quizQuestions: QuizQuestion[] = [
  {
    id: 'school-subject',
    prompt: 'Which kind of school work did you get most absorbed in?',
    options: [
      { label: 'Hard maths problems', interests: ['numbers', 'risk'] },
      { label: 'Science experiments and working out why things happen', interests: ['science'] },
      { label: 'Building, coding or designing something that works', interests: ['building'] },
      { label: 'Group projects and presentations', interests: ['people', 'creativity'] },
      { label: 'Working out what a set of results means', interests: ['data'] },
    ],
  },
  {
    id: 'news',
    prompt: 'Which headline would you click first?',
    options: [
      { label: 'Interest rates rise again', interests: ['markets', 'numbers'] },
      { label: 'Insurers count the cost of this year\'s floods', interests: ['risk', 'data'] },
      { label: 'New app hits a million users in a week', interests: ['building', 'creativity'] },
      { label: 'Record year for rooftop solar and grid batteries', interests: ['sustainability', 'science'] },
      { label: 'Why shoppers switched brands this year', interests: ['people', 'markets'] },
    ],
  },
  {
    id: 'work-style',
    prompt: 'How would you rather spend most of a work day?',
    options: [
      { label: 'Focused, on my own, on one hard problem', interests: ['numbers', 'science'] },
      { label: 'Moving between meetings and conversations', interests: ['people'] },
      { label: 'A mix of analysis and explaining it to others', interests: ['data', 'people'] },
      { label: 'On site, seeing physical work happen', interests: ['building', 'sustainability'] },
      { label: 'Coming up with ideas and testing them', interests: ['creativity', 'markets'] },
    ],
  },
  {
    id: 'satisfaction',
    prompt: 'Which result would feel best at the end of a week?',
    options: [
      { label: 'Something I designed is built and working', interests: ['building'] },
      { label: 'My numbers held up when a senior checked them', interests: ['numbers', 'markets'] },
      { label: 'A messy process now runs smoothly for people', interests: ['people', 'data'] },
      { label: 'I predicted something and it turned out right', interests: ['risk', 'data'] },
      { label: 'A project measurably cut waste or emissions', interests: ['sustainability'] },
    ],
  },
  {
    id: 'uncertainty',
    prompt: 'When you face an uncertain decision, what do you reach for?',
    options: [
      { label: 'A model of the likely outcomes', interests: ['risk', 'numbers'] },
      { label: 'Data on what happened last time', interests: ['data'] },
      { label: 'The people affected, to hear their view', interests: ['people'] },
      { label: 'A quick prototype or experiment to test it', interests: ['building', 'science'] },
      { label: 'A fresh angle nobody has tried', interests: ['creativity'] },
    ],
  },
];

/** Returns up to `count` degrees with the strongest match to the chosen interests. */
export function suggestDegrees(answers: (QuizOption | undefined)[], all: Degree[], count = 3): Degree[] {
  const tally = new Map<Interest, number>();
  for (const answer of answers) {
    answer?.interests.forEach((i) => tally.set(i, (tally.get(i) ?? 0) + 1));
  }
  const scored = all
    .map((degree) => ({
      degree,
      score: degree.interests.reduce((sum, i, rank) => sum + (tally.get(i) ?? 0) * (rank === 0 ? 1.5 : 1), 0),
    }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.degree);
}
