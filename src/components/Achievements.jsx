import { useEffect, useRef, useState } from 'react';
import { COUNTERS } from '../data/portfolio';

function Counter({ value, label }) {
  return (
    <div className="ks-counter-card reveal">
      <div className="ks-counter-num">{value}</div>
      <div className="ks-counter-label">{label}</div>
    </div>
  );
}

export default function Achievements() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        ref.current.classList.add('is-visible');
      }
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="ks-section"
      style={{ background: 'linear-gradient(180deg,var(--navy),var(--navy2),var(--navy))' }}
    >
      <div className="ks-section-label">Impact</div>
      <h2 className="ks-section-title reveal">Growth Highlights</h2>

      <div className="ks-counters" ref={ref}>
        {COUNTERS.map((c, i) => (
          <Counter key={i} {...c} />
        ))}
      </div>
    </section>
  );
}
