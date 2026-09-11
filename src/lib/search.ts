import { useState, useEffect } from 'react';

export const OPEN_SEARCH_EVENT = 'hanyu:open-search';

/**
 * Trigger global search modal from anywhere in the app
 */
export function openGlobalSearch(): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(OPEN_SEARCH_EVENT));
  }
}

/**
 * Custom hook to control global search state and listen to Ctrl+K / Cmd+K
 */
export function useGlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener(OPEN_SEARCH_EVENT, handleOpen);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener(OPEN_SEARCH_EVENT, handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => {
      setIsOpen(false);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    },
  };
}
