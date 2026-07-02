import { useEffect, useRef } from "react";

interface StatCounterProps {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  style?: React.CSSProperties;
}

export function StatCounter({ target, label, prefix = "", suffix = "", style }: StatCounterProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const duration = 1800;
          const start = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // Ease-out cubic: starts fast, slows at end
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            el.textContent = `${prefix}${current}${suffix}`;
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, prefix, suffix]);

  return (
    <div className="stat-item" style={style}>
      <span ref={numRef} className="stat-number">
        {prefix}0{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
