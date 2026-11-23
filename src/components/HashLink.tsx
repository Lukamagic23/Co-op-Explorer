import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { scrollToSection } from '../lib/scrollToSection';

interface HashLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  targetId: string;
}

/** An in-page anchor that scrolls reliably inside the router. */
export function HashLink({ targetId, onClick, ...rest }: HashLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    scrollToSection(targetId);
  };
  return <a href={`#${targetId}`} onClick={handleClick} {...rest} />;
}
