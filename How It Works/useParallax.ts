import { useEffect, useState, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  disabled?: boolean;
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.5, disabled = false } = options;
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (disabled || prefersReducedMotion.current) return;

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!elementRef.current) return;

        const rect = elementRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const scrollPercent = (viewportHeight / 2 - elementCenter) / viewportHeight;
        const parallaxOffset = Math.max(-30, Math.min(30, scrollPercent * speed * 100));

        setOffset(parallaxOffset);
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed, disabled]);

  return {
    ref: elementRef,
    style: {
      transform: `translateY(${offset}px)`,
      willChange: 'transform',
    },
  };
}
