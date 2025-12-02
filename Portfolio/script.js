function updateViewport() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  document.getElementById('viewport').textContent = `My computer's viewport: ${w}px × ${h}px`;

  // Check breakpoints
  let bp = "";
  if (window.matchMedia("(max-width: 599px)").matches) {
    bp = "Mobile (<600px)";
  } else if (window.matchMedia("(min-width: 600px) and (max-width: 1024px)").matches) {
    bp = "Tablet (600–1024px)";
  } else if (window.matchMedia("(min-width: 1025px)").matches) {
    bp = "Desktop (1025px+)";
  }
  document.getElementById('breakpoint').textContent = `Active breakpoint: ${bp}`;
}

// Run once and update on resize
updateViewport();
window.addEventListener('resize', updateViewport);
