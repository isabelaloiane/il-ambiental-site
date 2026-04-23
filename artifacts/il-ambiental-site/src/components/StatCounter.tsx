import { useEffect, useRef, useState } from "react";

function parseStat(stat: string): { prefix: string; target: number; suffix: string } {
  const match = stat.match(/^([+]?)(\d+)([%h]?)$/);
  if (!match) return { prefix: "", target: 0, suffix: stat };
  return { prefix: match[1], target: parseInt(match[2]), suffix: match[3] };
}

interface StatCounterProps {
  stat: string;
  style?: React.CSSProperties;
}

export function StatCounter({ stat, style }: StatCounterProps) {
  const { prefix, target, suffix } = parseStat(stat);
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
      { threshold: 0.5 }
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
    <div ref={ref} style={style}>
      {prefix}{count}{suffix}
    </div>
  );
}
