const COLORS = ['#A78BFA','#C9A87C','#F9A8D4','#6B21A8','#34d399','#60a5fa'];

export function spawnConfetti() {
  Array.from({ length: 45 }).forEach((_, i) => {
    const el = document.createElement('div');
    el.className = 'ks-confetti-piece';
    const size = Math.random() * 10 + 5;
    el.style.cssText = `
      left: ${Math.random() * 100}vw;
      top: -20px;
      background: ${COLORS[Math.floor(Math.random() * COLORS.length)]};
      animation-duration: ${Math.random() * 2 + 1.5}s;
      animation-delay: ${Math.random() * 0.6}s;
      width: ${size}px;
      height: ${size}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  });
}
