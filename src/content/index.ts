import type { Degree } from './schema';
import { validateDegree } from './validate';

/**
 * Loads every degree file in ./degrees. Adding a degree means adding one file
 * there that default-exports a `Degree`; nothing else needs to change.
 */
const modules = import.meta.glob<{ default: Degree }>('./degrees/*.ts', { eager: true });

function load(): Degree[] {
  const degrees = Object.entries(modules).map(([path, mod]) => validateDegree(mod.default, path));

  const seen = new Set<string>();
  for (const degree of degrees) {
    if (seen.has(degree.slug)) throw new Error(`Duplicate degree slug "${degree.slug}"`);
    seen.add(degree.slug);
  }
  return degrees.sort((a, b) => a.name.localeCompare(b.name));
}

export const degrees: Degree[] = load();

export const faculties: string[] = [...new Set(degrees.map((d) => d.faculty))].sort();

export function getDegree(slug: string | undefined): Degree | undefined {
  return degrees.find((d) => d.slug === slug);
}

export function degreesInFaculty(faculty: string): Degree[] {
  return degrees.filter((d) => d.faculty === faculty);
}

/**
 * Degrees most similar to the given one, by shared interests (earlier
 * interests weigh more), then same faculty.
 */
export function similarDegrees(degree: Degree, count = 3): Degree[] {
  const weight = (d: Degree) =>
    d.interests.reduce((sum, interest, i) => {
      const j = degree.interests.indexOf(interest);
      return j === -1 ? sum : sum + (3 - Math.min(i, 2)) + (3 - Math.min(j, 2));
    }, 0) + (d.faculty === degree.faculty ? 1 : 0);
  return degrees
    .filter((d) => d.slug !== degree.slug)
    .map((d) => ({ d, score: weight(d) }))
    .sort((a, b) => b.score - a.score || a.d.name.localeCompare(b.d.name))
    .slice(0, count)
    .map((s) => s.d);
}
