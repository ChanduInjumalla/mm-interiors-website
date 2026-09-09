import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — IntersectionObserver-based scroll animation hook
 * Adds 'is-visible' class when element enters viewport
 * 
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.15
 * @param {string} options.rootMargin - Root margin, default '0px 0px -60px 0px'
 * @param {boolean} options.once - Only trigger once, default true
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      element.classList.add('is-visible');
      return;
    }

    const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          element.classList.add('is-visible');
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
          element.classList.remove('is-visible');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

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

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      container.querySelectorAll('.scroll-reveal-item').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const { threshold = 0.1, rootMargin = '0px 0px -40px 0px', staggerDelay = 80 } = options;

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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return containerRef;
}
