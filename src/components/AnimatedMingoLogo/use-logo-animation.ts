import { useRef, useEffect, useState } from "react";

export const useLogoAnimation = (animationKey: number) => {
  const [animate, setAnimate] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    setAnimate(false);
    const el = svgRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setAnimate(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animationKey]);

  return { svgRef, animate };
};
