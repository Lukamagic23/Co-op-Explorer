import { useCallback, useSyncExternalStore } from 'react';
import { degrees } from '../content';

const KEY = 'coop-explorer:explored';
const EVENT = 'coop-explorer:progress';
const validSlugs = new Set(degrees.map((d) => d.slug));

function read(): string {
  try {
    return window.localStorage.getItem(KEY) ?? '[]';
  } catch {
    return '[]';
  }
}

function parse(raw: string): string[] {
  try {
    const value: unknown = JSON.parse(raw);
    return Array.isArray(value) ? value.filter((s): s is string => typeof s === 'string' && validSlugs.has(s)) : [];
  } catch {
    return [];
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

/** Remembers which degrees this browser has opened. No accounts, local only. */
export function useProgress() {
  const raw = useSyncExternalStore(subscribe, read, () => '[]');
  const explored = parse(raw);

  const markExplored = useCallback((slug: string) => {
    const current = parse(read());
    if (current.includes(slug)) return;
    try {
      window.localStorage.setItem(KEY, JSON.stringify([...current, slug]));
      window.dispatchEvent(new Event(EVENT));
    } catch {
      // Storage can be unavailable (private mode, quota). Progress is optional.
    }
  }, []);

  return { explored, total: degrees.length, markExplored };
}
