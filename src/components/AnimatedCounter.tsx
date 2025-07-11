'use client';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ end, duration = 2, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setInView(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div id={`counter-${end}`} className="text-4xl font-bold text-weya-green">
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </div>
  );
} 