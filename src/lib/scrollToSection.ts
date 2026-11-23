/**
 * Scrolls to an in-page section and moves focus there. Used instead of plain
 * hash links, because the router resets scroll position on hash navigation.
 */
export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  window.history.replaceState(window.history.state, '', `#${id}`);

  const focusTarget = target.hasAttribute('tabindex')
    ? target
    : (target.querySelector<HTMLElement>('h2, h3') ?? target);
  if (!focusTarget.hasAttribute('tabindex')) focusTarget.setAttribute('tabindex', '-1');
  focusTarget.focus({ preventScroll: true });
}
