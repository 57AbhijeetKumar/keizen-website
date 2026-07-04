"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

// Parses "500+" → { number: 500, suffix: "+" }
// Parses "Pan-India" → { number: null, suffix: "Pan-India" }
function parseValue(value: string): { number: number | null; suffix: string } {
  const match = value.match(/^(\d+)(\D*)$/);
  if (match) {
    return { number: parseInt(match[1], 10), suffix: match[2] };
  }
  return { number: null, suffix: value };
}

function useCountUp(target: number | null, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!triggered || target === null) return;

    startRef.current = null;

    const animate = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic — fast start, decelerates into the final number
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, triggered]);

  return count;
}

interface StatItemProps {
  stat: Stat;
  triggered: boolean;
  delay: number;
}

function StatItem({ stat, triggered, delay }: StatItemProps) {
  const [delayedTrigger, setDelayedTrigger] = useState(false);
  const { number, suffix } = parseValue(stat.value);
  const count = useCountUp(number, 1800, delayedTrigger);

  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setDelayedTrigger(true), delay);
    return () => clearTimeout(t);
  }, [triggered, delay]);

  const display = number !== null ? `${count}${suffix}` : stat.value;

  return (
    <div className="text-center">
      <p className="text-3xl font-heading font-bold text-accent tabular-nums">
        {display}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
    </div>
  );
}

export function StatsBar({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-b border-border bg-surface-2">
      <div className="container-page grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <StatItem
            key={stat.label}
            stat={stat}
            triggered={triggered}
            delay={i * 180}
          />
        ))}
      </div>
    </section>
  );
}
