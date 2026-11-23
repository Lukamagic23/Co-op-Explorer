import type { Day } from './schema';

const SOLO = /alone/i;
const NOBODY = /alone|^none$/i;

/** Facts derived from a day timeline, used to contrast days and degrees. */
export function dayGlance(day: Day) {
  const people = new Set(day.blocks.flatMap((b) => b.withWhom).filter((p) => !NOBODY.test(p)));
  return {
    start: day.blocks[0].time,
    end: day.blocks[day.blocks.length - 1].time,
    peopleGroups: people.size,
    soloBlocks: day.blocks.filter((b) => b.withWhom.some((p) => SOLO.test(p))).length,
    totalBlocks: day.blocks.length,
  };
}
