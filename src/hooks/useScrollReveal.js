import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — IntersectionObserver-based scroll animation hook
 * Adds 'is-visible' class when element enters viewport.
 * Includes a safety timeout to ALWAYS show content even if observer fails.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // On mobile devices (<=768px) or reduced-motion preference — show immediately
    if (
      (typeof window !== 'undefined' && window.innerWidth <= 768) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      element.classList.add('is-visible');
      return;
    }

    const { threshold = 0.05, rootMargin = '0px', once = true } = options;

    // Safety timeout — ALWAYS make content visible after 2s
    // This prevents content from being stuck at opacity:0
    const safetyTimer = setTimeout(() => {
      if (!element.classList.contains('is-visible')) {
        element.classList.add('is-visible');
        setIsVisible(true);
      }
    }, 2000);

    let observer;
    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            element.classList.add('is-visible');
            clearTimeout(safetyTimer);
            if (once) observer.unobserve(element);
          } else if (!once) {
            setIsVisible(false);
            element.classList.remove('is-visible');
          }
        },
        { threshold, rootMargin }
      );
      observer.observe(element);
    } catch {
      // If IntersectionObserver fails, show content immediately
      element.classList.add('is-visible');
      setIsVisible(true);
    }

    return () => {
      clearTimeout(safetyTimer);
      if (observer) observer.disconnect();
    };
  }, []);

  return { ref, isVisible };
}

/**
 * useScrollRevealAll — Observes multiple children within a container
 * Adds staggered reveal to child elements with '.scroll-reveal-item' class
 */
export function useScrollRevealAll(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (
      (typeof window !== 'undefined' && window.innerWidth <= 768) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      container.querySelectorAll('.scroll-reveal-item').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const { threshold = 0.05, rootMargin = '0px', staggerDelay = 80 } = options;

    // Safety timeout
    const safetyTimer = setTimeout(() => {
      container.querySelectorAll('.scroll-reveal-item:not(.is-visible)').forEach((el) => {
        el.classList.add('is-visible');
      });
    }, 2500);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = container.querySelectorAll('.scroll-reveal-item:not(.is-visible)');
            items.forEach((item, i) => {
              setTimeout(() => {
                item.classList.add('is-visible');
              }, i * staggerDelay);
            });
            clearTimeout(safetyTimer);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(container);
    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, []);

  return containerRef;
}
