function updateViewport() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  document.getElementById('viewport').textContent = `My computer's viewport: ${w}px × ${h}px`;

  // Check breakpoints
  let bp = "";
  if (window.matchMedia("(max-width: 400px)").matches) {
    bp = "Extra Small Mobile (<400px)";
  } else if (window.matchMedia("(min-width: 400px) and (max-width: 600px)").matches) {
    bp = "Mobile (400–600px)";
  } else if (window.matchMedia("(min-width: 600px) and (max-width: 1000px)").matches) {
    bp = "Tablet / Mobile (600-1000px)";
  } else if (window.matchMedia("(min-width: 1000px) and (max-width: 1199px)").matches) {
    bp = "Tablet (1000-1199px)";
    } else if (window.matchMedia("(min-width: 1200px) and (max-width: 1440px)").matches) 
    bp = "Desktop (1200-1440px)";
  document.getElementById('breakpoint').textContent = `Active breakpoint: ${bp}`;
}

// Run once and update on resize
updateViewport();
window.addEventListener('resize', updateViewport);
