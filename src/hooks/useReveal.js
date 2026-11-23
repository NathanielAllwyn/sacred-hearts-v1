import { useEffect } from 'react';

export function useReveal(containerRef, dep) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const nodes = root.querySelectorAll('.rv');
    nodes.forEach((node) => io.observe(node));

    return () => io.disconnect();
  }, [containerRef, dep]);
}