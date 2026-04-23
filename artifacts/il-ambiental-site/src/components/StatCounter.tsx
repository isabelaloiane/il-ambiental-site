import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  style?: React.CSSProperties;
}

export function StatCounter({ target, label, prefix = "", suffix = "", style }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || triggered) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;
    const duration = 1800;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [triggered, target]);

  return (
    <div ref={ref} className="stat-item" style={style}>
      <span className="stat-number" data-target={target}>
        {prefix}{count}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
