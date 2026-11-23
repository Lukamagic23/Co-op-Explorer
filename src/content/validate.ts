import { INTERESTS, type Degree } from './schema';

/**
 * Structural validation for degree data. Throws with a full list of problems
 * so a broken or incomplete data file fails loudly at startup.
 */
export function validateDegree(input: unknown, source: string): Degree {
  const errors: string[] = [];
  const d = (input ?? {}) as Record<string, unknown>;

  const str = (value: unknown, path: string) => {
    if (typeof value !== 'string' || value.trim() === '') errors.push(`${path} must be a non-empty string`);
  };
  const arr = (value: unknown, path: string, min = 1, max = Infinity): unknown[] => {
    if (!Array.isArray(value)) {
      errors.push(`${path} must be an array`);
      return [];
    }
    if (value.length < min || value.length > max) {
      const range = max === Infinity ? `at least ${min}` : `${min} to ${max}`;
      errors.push(`${path} must have ${range} items (has ${value.length})`);
    }
    return value;
  };
  const strArr = (value: unknown, path: string, min = 1) =>
    arr(value, path, min).forEach((v, i) => str(v, `${path}[${i}]`));
  const obj = (value: unknown, path: string): Record<string, unknown> => {
    if (typeof value !== 'object' || value === null) {
      errors.push(`${path} must be an object`);
      return {};
    }
    return value as Record<string, unknown>;
  };

  for (const key of ['slug', 'name', 'faculty', 'duration', 'summary', 'overview', 'studyFocus', 'majorsHeading']) {
    str(d[key], key);
  }
  if (typeof d.slug === 'string' && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(d.slug)) {
    errors.push('slug must be lowercase words separated by hyphens');
  }
  strArr(d.suits, 'suits');
  strArr(d.mightNotSuit, 'mightNotSuit');

  arr(d.interests, 'interests', 1).forEach((v, i) => {
    if (!INTERESTS.includes(v as (typeof INTERESTS)[number])) errors.push(`interests[${i}] "${String(v)}" is not a known interest`);
  });

  const workload = obj(d.workload, 'workload');
  if (!['Moderate', 'High', 'Very high'].includes(workload.level as string)) errors.push('workload.level is invalid');
  str(workload.note, 'workload.note');

  const maths = obj(d.maths, 'maths');
  if (!['Light', 'Moderate', 'Heavy', 'Very heavy'].includes(maths.level as string)) errors.push('maths.level is invalid');
  str(maths.note, 'maths.note');

  const majorIds = new Set<string>();
  arr(d.majors, 'majors').forEach((m, i) => {
    const major = obj(m, `majors[${i}]`);
    str(major.id, `majors[${i}].id`);
    str(major.name, `majors[${i}].name`);
    str(major.description, `majors[${i}].description`);
    if (typeof major.id === 'string') majorIds.add(major.id);
  });

  arr(d.years, 'years', 3, 5).forEach((y, i) => {
    const year = obj(y, `years[${i}]`);
    if (year.year !== i + 1) errors.push(`years[${i}].year must be ${i + 1}`);
    arr(year.courses, `years[${i}].courses`).forEach((c, j) => {
      const path = `years[${i}].courses[${j}]`;
      const course = obj(c, path);
      str(course.name, `${path}.name`);
      str(course.description, `${path}.description`);
      if (typeof course.name === 'string' && /\b[A-Z]{4}\d{4}\b/.test(course.name)) {
        errors.push(`${path}.name must not contain a course code`);
      }
      arr(course.majors, `${path}.majors`, 0).forEach((id) => {
        if (!majorIds.has(id as string)) errors.push(`${path}.majors references unknown major "${String(id)}"`);
      });
    });
  });

  arr(d.skills, 'skills', 3).forEach((s, i) => {
    const skill = obj(s, `skills[${i}]`);
    str(skill.name, `skills[${i}].name`);
    str(skill.inPractice, `skills[${i}].inPractice`);
  });

  const validateDay = (value: unknown, path: string) => {
    const day = obj(value, path);
    str(day.setting, `${path}.setting`);
    str(day.intro, `${path}.intro`);
    const times: string[] = [];
    arr(day.blocks, `${path}.blocks`, 6, 8).forEach((b, i) => {
      const bp = `${path}.blocks[${i}]`;
      const block = obj(b, bp);
      if (typeof block.time !== 'string' || !/^\d{2}:\d{2}$/.test(block.time)) errors.push(`${bp}.time must be HH:MM`);
      else times.push(block.time);
      str(block.title, `${bp}.title`);
      str(block.whatYouDo, `${bp}.whatYouDo`);
      strArr(block.withWhom, `${bp}.withWhom`);
      strArr(block.tools, `${bp}.tools`);
      str(block.hardOrSurprising, `${bp}.hardOrSurprising`);
    });
    if (times.some((t, i) => i > 0 && t <= times[i - 1])) errors.push(`${path}.blocks must be in time order`);
    return { day, times };
  };

  const placement = validateDay(d.placementDay, 'placementDay');
  arr(placement.day.decisions, 'placementDay.decisions', 1, 2).forEach((m, i) => {
    const p = `placementDay.decisions[${i}]`;
    const decision = obj(m, p);
    str(decision.id, `${p}.id`);
    str(decision.scenario, `${p}.scenario`);
    str(decision.colleagueView, `${p}.colleagueView`);
    if (!placement.times.includes(decision.time as string)) errors.push(`${p}.time must match a placement block time`);
    arr(decision.options, `${p}.options`, 2, 3).forEach((o, j) => {
      const option = obj(o, `${p}.options[${j}]`);
      str(option.label, `${p}.options[${j}].label`);
      str(option.outcome, `${p}.options[${j}].outcome`);
    });
  });
  validateDay(d.campusDay, 'campusDay');

  const coop = obj(d.coop, 'coop');
  str(coop.placementLength, 'coop.placementLength');
  str(coop.numberOfPlacements, 'coop.numberOfPlacements');
  strArr(coop.employerTypes, 'coop.employerTypes');
  strArr(coop.exampleRoles, 'coop.exampleRoles');

  arr(d.employers, 'employers', 4, 8).forEach((e, i) => {
    const employer = obj(e, `employers[${i}]`);
    str(employer.type, `employers[${i}].type`);
    str(employer.whatYouMightDo, `employers[${i}].whatYouMightDo`);
    if (employer.name !== undefined) str(employer.name, `employers[${i}].name`);
    if (employer.logo !== undefined) {
      str(employer.logo, `employers[${i}].logo`);
      if (employer.name === undefined) errors.push(`employers[${i}].name is required when a logo is set`);
    }
  });

  arr(d.tradeOffs, 'tradeOffs', 2, 4).forEach((t, i) => {
    const tradeOff = obj(t, `tradeOffs[${i}]`);
    str(tradeOff.title, `tradeOffs[${i}].title`);
    str(tradeOff.detail, `tradeOffs[${i}].detail`);
  });

  const imageAlt = obj(d.imageAlt, 'imageAlt');
  str(imageAlt.hero, 'imageAlt.hero');
  str(imageAlt.campus, 'imageAlt.campus');
  for (const key of ['heroImage', 'campusImage'] as const) {
    if (d[key] === undefined) continue;
    const photo = obj(d[key], key);
    str(photo.src, `${key}.src`);
    if (typeof photo.width !== 'number' || typeof photo.height !== 'number') errors.push(`${key}.width and ${key}.height must be numbers`);
    if (photo.credit !== undefined) {
      const credit = obj(photo.credit, `${key}.credit`);
      str(credit.creator, `${key}.credit.creator`);
      str(credit.license, `${key}.credit.license`);
      str(credit.sourceUrl, `${key}.credit.sourceUrl`);
    }
  }
  strArr(d.toVerify, 'toVerify');

  if (errors.length > 0) {
    throw new Error(`Invalid degree data in ${source}:\n  - ${errors.join('\n  - ')}`);
  }
  return input as Degree;
}
