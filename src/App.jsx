import { useState, useEffect } from 'react';
import './styles/global.css';

import Cursor       from './components/Cursor';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import About        from './components/About';
import Skills       from './components/Skills';
import Projects     from './components/Projects';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

import { useReveal } from './hooks/useReveal';

export default function App() {
  const [light, setLight] = useState(false);

  // Apply light-mode class to <body>
  useEffect(() => {
    document.body.classList.toggle('light', light);
  }, [light]);

  // Activate scroll-reveal after mount (re-run when sections render)
  useReveal();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--navy)' }}>
      <Cursor />
      <Navbar light={light} onToggleLight={() => setLight((x) => !x)} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
