import { useState, useEffect } from 'react';
import { TYPED_STRINGS, FLOAT_ICONS, PERSONAL } from '../data/portfolio';

function Particles() {
  const parts = Array.from({ length: 22 }, (_, i) => ({
    id:  i,
    left:    Math.random() * 100,
    size:    Math.random() * 4 + 2,
    dur:     Math.random() * 12 + 8,
    del:     Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.2,
  }));
  return (
    <div className="ks-particles">
      {parts.map((p) => (
        <div key={p.id} className="ks-particle" style={{
          left:              `${p.left}%`,
          bottom:            '-5%',
          width:             p.size,
          height:            p.size,
          animationDuration: `${p.dur}s`,
          animationDelay:    `${p.del}s`,
          opacity:           p.opacity,
        }} />
      ))}
    </div>
  );
}

function TypedText() {
  const [text, setText] = useState('');
  const [idx,  setIdx]  = useState(0);
  const [del,  setDel]  = useState(false);

  useEffect(() => {
    const str = TYPED_STRINGS[idx];
    const spd = del ? 38 : 68;
    const t = setTimeout(() => {
      if (!del) {
        if (text.length < str.length) setText(str.slice(0, text.length + 1));
        else setTimeout(() => setDel(true), 1400);
      } else {
        if (text.length > 0) setText(str.slice(0, text.length - 1));
        else { setDel(false); setIdx((idx + 1) % TYPED_STRINGS.length); }
      }
    }, spd);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <div className="ks-hero-typed">
      {text}<span className="ks-cursor-blink" />
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="ks-hero" id="home">
      <div className="ks-hero-bg" />
      <Particles />

      {/* Left content */}
      <div className="ks-hero-content" style={{ animation: 'slide-up 0.9s ease both' }}>
        <div className="ks-hero-eyebrow">Hello World</div>
        <h1 className="ks-hero-name">{PERSONAL.name}</h1>
        <TypedText />
        <p className="ks-hero-bio">
          A passionate <strong style={{ color: 'var(--lav2)' }}>BCA student</strong> at Sam Higginbottom University of Agriculture Technology and Sciences who
          builds elegant web experiences, automates with DevOps pipelines, and explores the frontiers
          of machine learning — one commit at a time.
        </p>
        <div className="ks-hero-btns">
          <button className="ks-btn-primary" onClick={() => scrollTo('projects')}>View My Work ✨</button>
          <button className="ks-btn-outline"  onClick={() => scrollTo('contact')}>Let's Talk 💬</button>
        </div>
      </div>

      {/* Right visual */}
      <div className="ks-hero-visual" style={{ animation: 'slide-up 0.9s 0.2s ease both', opacity: 0, animationFillMode: 'forwards' }}>
        <div className="ks-avatar-ring" />
        <div className="ks-avatar-ring-2" />
        <div className="ks-avatar-core">
          <img className="ks-avatar-image" src="/Portfolio_img.webp" alt="Kriti Singh" />
        </div>
        {FLOAT_ICONS.map((fi, i) => (
          <div key={i} className="ks-float-icon" style={{
            top:               fi.top,
            left:              fi.left,
            animationDuration: `${fi.dur}s`,
            animationDelay:    `${fi.del}s`,
          }}>
            {fi.icon}
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="ks-scroll-hint">
        <div className="ks-scroll-line" />
        <span style={{ fontSize: '0.68rem', letterSpacing: '3px', color: 'var(--muted)', textTransform: 'uppercase' }}>
          Scroll
        </span>
      </div>
    </section>
  );
}
