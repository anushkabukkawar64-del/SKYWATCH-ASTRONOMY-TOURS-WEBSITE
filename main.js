// ─── Starfield Canvas ─────────────────────
(function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height, stars = [], shootingStars = [], animId;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    generateStars();
  }

  function generateStars() {
    stars = [];
    const count = Math.floor((width * height) / 2200);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.2,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.004 + 0.001,
        phase: Math.random() * Math.PI * 2,
        color: pickStarColor()
      });
    }
  }

  function pickStarColor() {
    const colors = [
      'rgba(255,255,255,',
      'rgba(180,200,255,',
      'rgba(255,220,180,',
      'rgba(200,220,255,',
      'rgba(255,200,200,'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function launchShootingStar() {
    if (shootingStars.length >= 3) return;
    const startX = Math.random() * width * 0.7 + width * 0.1;
    const startY = Math.random() * height * 0.4;
    const angle = (Math.random() * 30 + 15) * (Math.PI / 180);
    shootingStars.push({
      x: startX, y: startY,
      vx: Math.cos(angle) * (8 + Math.random() * 6),
      vy: Math.sin(angle) * (8 + Math.random() * 6),
      len: 80 + Math.random() * 120,
      alpha: 1,
      trail: []
    });
  }

  function draw(t) {
    ctx.clearRect(0, 0, width, height);

    // Draw nebula-like gradient overlay
    const grad = ctx.createRadialGradient(width * 0.55, height * 0.2, 0, width * 0.55, height * 0.2, width * 0.45);
    grad.addColorStop(0, 'rgba(44,62,140,0.08)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    const grad2 = ctx.createRadialGradient(width * 0.2, height * 0.8, 0, width * 0.2, height * 0.8, width * 0.35);
    grad2.addColorStop(0, 'rgba(123,94,167,0.07)');
    grad2.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad2;
    ctx.fillRect(0, 0, width, height);

    // Stars
    for (let s of stars) {
      const twinkle = Math.sin(t * s.speed * 1000 + s.phase);
      const a = s.alpha * (0.75 + 0.25 * twinkle);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color + a + ')';
      ctx.fill();

      // Occasional star glow
      if (s.r > 1.2 && a > 0.8) {
        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 6);
        glow.addColorStop(0, s.color + (a * 0.15) + ')');
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 6, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }
    }

    // Shooting stars
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const ss = shootingStars[i];
      ss.x += ss.vx;
      ss.y += ss.vy;
      ss.alpha -= 0.018;

      if (ss.alpha <= 0 || ss.x > width + 50 || ss.y > height + 50) {
        shootingStars.splice(i, 1);
        continue;
      }

      const headX = ss.x;
      const headY = ss.y;
      const tailX = headX - ss.vx * 12;
      const tailY = headY - ss.vy * 12;

      const grad = ctx.createLinearGradient(tailX, tailY, headX, headY);
      grad.addColorStop(0, 'rgba(255,255,255,0)');
      grad.addColorStop(1, `rgba(200,220,255,${ss.alpha})`);

      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(headX, headY);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Head glow
      const hglow = ctx.createRadialGradient(headX, headY, 0, headX, headY, 8);
      hglow.addColorStop(0, `rgba(200,220,255,${ss.alpha * 0.8})`);
      hglow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(headX, headY, 8, 0, Math.PI * 2);
      ctx.fillStyle = hglow;
      ctx.fill();
    }

    animId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { cancelAnimationFrame(animId); resize(); draw(0); });
  resize();
  requestAnimationFrame(draw);

  // Launch shooting stars periodically
  setInterval(launchShootingStar, 4000 + Math.random() * 8000);
  setTimeout(launchShootingStar, 2000);
})();


// ─── Navbar Scroll Effect ──────────────────
(function initNavbar() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
})();


// ─── Mobile Menu ──────────────────────────
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const ham = document.getElementById('hamburger');
  if (!links) return;
  links.classList.toggle('open');
  ham.classList.toggle('active');
}


// ─── Scroll Reveal ────────────────────────
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();


// ─── Toast Notifications ──────────────────
function showToast(icon, message, duration = 4000) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-msg">${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(60px)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, duration);
}


// ─── Moon Phase Calculator ─────────────────
/**
 * Returns moon phase data for a given Date.
 * Uses the synodic period formula.
 */
function getMoonPhase(date) {
  const SYNODIC = 29.53058867; // days
  // Known new moon reference: Jan 6, 2000 18:14 UTC
  const refNewMoon = new Date('2000-01-06T18:14:00Z');
  const elapsed = (date - refNewMoon) / (1000 * 60 * 60 * 24);
  const cycleAge = ((elapsed % SYNODIC) + SYNODIC) % SYNODIC;
  const illumination = Math.round((1 - Math.cos(2 * Math.PI * cycleAge / SYNODIC)) / 2 * 100);

  let phase, emoji;
  if (cycleAge < 1.85) { phase = 'New Moon'; emoji = '●'; }
  else if (cycleAge < 7.38) { phase = 'Waxing Crescent'; emoji = '◐'; }
  else if (cycleAge < 9.22) { phase = 'First Quarter'; emoji = '◑'; }
  else if (cycleAge < 14.77) { phase = 'Waxing Gibbous'; emoji = '◕'; }
  else if (cycleAge < 16.61) { phase = 'Full Moon'; emoji = '○'; }
  else if (cycleAge < 22.15) { phase = 'Waning Gibbous'; emoji = '◔'; }
  else if (cycleAge < 23.99) { phase = 'Last Quarter'; emoji = '◑'; }
  else if (cycleAge < 27.69) { phase = 'Waning Crescent'; emoji = '◓'; }
  else { phase = 'New Moon'; emoji = '●'; }

  // Days to next new moon
  const daysToNew = cycleAge < SYNODIC ? Math.ceil(SYNODIC - cycleAge) : 1;

  // Viewing quality: lower illumination & younger/older phase = better
  let quality, qualityClass;
  if (illumination < 20) { quality = 'Excellent ★'; qualityClass = 'badge-comet'; }
  else if (illumination < 45) { quality = 'Good ✓'; qualityClass = 'badge-planet'; }
  else if (illumination < 70) { quality = 'Fair ∼'; qualityClass = 'badge-meteor'; }
  else { quality = 'Poor ×'; qualityClass = 'badge-eclipse'; }

  return { phase, emoji, illumination, cycleAge, daysToNew, quality, qualityClass };
}


// ─── Sun Rise/Set Approximation ───────────
function getSunriseSunset(lat, lon, date) {
  // Simplified calculation (good to ~±10 min)
  const J2000 = 2451545.0;
  const JD = date.getTime() / 86400000 + 2440587.5;
  const n = JD - J2000;
  const L = (280.460 + 0.9856474 * n) % 360;
  const g = ((357.528 + 0.9856003 * n) % 360) * Math.PI / 180;
  const lambda = (L + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g)) * Math.PI / 180;
  const epsilon = 23.439 * Math.PI / 180;
  const sinDec = Math.sin(epsilon) * Math.sin(lambda);
  const dec = Math.asin(sinDec);
  const cosH = (Math.cos(96 * Math.PI / 180) - sinDec * Math.sin(lat * Math.PI / 180)) / (Math.cos(dec) * Math.cos(lat * Math.PI / 180));

  if (cosH < -1) return { sunrise: 'Polar Day', sunset: 'Polar Day' };
  if (cosH > 1) return { sunrise: 'Polar Night', sunset: 'Polar Night' };

  const H = Math.acos(cosH) * 180 / Math.PI;
  const JDnoon = J2000 + Math.floor(n) + 0.5 - lon / 360;
  const sunriseJD = JDnoon - H / 360;
  const sunsetJD = JDnoon + H / 360;

  function jdToTime(jd) {
    const ms = (jd - 2440587.5) * 86400000;
    const d = new Date(ms);
    return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' });
  }

  return { sunrise: jdToTime(sunriseJD), sunset: jdToTime(sunsetJD) };
}


// ─── Live DateTime Widget (events.html) ───
(function initDateTimeWidget() {
  const el = document.getElementById('liveDateTime');
  const moon = document.getElementById('moonPhaseWidget');
  if (!el) return;

  function update() {
    const now = new Date();
    const opts = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Asia/Kolkata' };
    el.textContent = now.toLocaleString('en-IN', opts) + ' IST';

    if (moon) {
      const mp = getMoonPhase(now);
      moon.innerHTML = `${mp.emoji} ${mp.phase} · ${mp.illumination}% lit`;
    }
  }
  update();
  setInterval(update, 1000);
})();


// ─── Event View Toggle ────────────────────
let currentView = 'grid';

function setView(v) {
  currentView = v;
  const container = document.getElementById('eventsContainer');
  if (!container) return;

  const gridBtn = document.getElementById('viewGrid');
  const listBtn = document.getElementById('viewList');

  if (v === 'grid') {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = '';
    if (gridBtn) { gridBtn.style.background = 'rgba(74,108,247,0.15)'; gridBtn.style.borderColor = 'rgba(74,108,247,0.35)'; gridBtn.style.color = 'var(--aurora-blue)'; }
    if (listBtn) { listBtn.style.background = ''; listBtn.style.borderColor = ''; listBtn.style.color = ''; }
  } else {
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    if (listBtn) { listBtn.style.background = 'rgba(74,108,247,0.15)'; listBtn.style.borderColor = 'rgba(74,108,247,0.35)'; listBtn.style.color = 'var(--aurora-blue)'; }
    if (gridBtn) { gridBtn.style.background = ''; gridBtn.style.borderColor = ''; gridBtn.style.color = ''; }
  }
}


// ─── Responsive nav adjustment for CSS ────
document.addEventListener('DOMContentLoaded', () => {
  // Apply stagger to any existing reveals
  document.querySelectorAll('.reveal').forEach((el, i) => {
    if (!el.classList.contains('reveal-delay-1') &&
      !el.classList.contains('reveal-delay-2') &&
      !el.classList.contains('reveal-delay-3') &&
      !el.classList.contains('reveal-delay-4')) {
      el.style.transitionDelay = (i % 5) * 0.08 + 's';
    }
  });
});
