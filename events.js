// ─── Event Data ───────────────────────────
const EVENTS_DATA = [
  // ── ECLIPSES ──
  {
    id: 'e1',
    type: 'eclipse',
    name: 'Total Solar Eclipse',
    month: 4, day: 8, year: 2026,
    location: 'Rajasthan Desert, India',
    coords: '26.9°N, 70.9°E',
    duration: '4m 28s totality',
    bortle: 2,
    sqm: 21.8,
    description: 'Experience darkness at noon as the Moon perfectly covers the Sun. Our prime location lies precisely on the center line of totality for the maximum duration. One of nature\'s most awe-inspiring spectacles, a total solar eclipse transforms day into night within seconds.',
    highlights: ['4m 28s of totality', 'Baily\'s Beads visible', 'Solar corona photography', 'Diamond ring effect'],
    price: 14999,
    priceNote: 'Peak-event pricing',
    capacity: 120,
    spotsLeft: 34,
    guidedTours: true,
    telescope: '100mm White Light Filter Scope',
    weather: 'Excellent — 87% clear probability'
  },
  {
    id: 'e2',
    type: 'eclipse',
    name: 'Annular Solar Eclipse',
    month: 10, day: 2, year: 2026,
    location: 'Odisha Coast, India',
    coords: '19.8°N, 85.8°E',
    duration: '7m 25s annularity',
    bortle: 3,
    sqm: 21.2,
    description: 'The "Ring of Fire" — a brilliant annular eclipse where the Moon is slightly farther from Earth, leaving a bright ring of sunlight visible.',
    highlights: ['7m 25s annular phase', 'Ring of Fire effect', 'Coastal dark-sky site', 'Pre-dawn Saturn visible'],
    price: 9999,
    priceNote: 'Peak-event pricing',
    capacity: 80,
    spotsLeft: 62,
    guidedTours: true,
    telescope: '80mm APO Refractor',
    weather: 'Good — 74% clear probability'
  },
  {
    id: 'e3',
    type: 'eclipse',
    name: 'Penumbral Lunar Eclipse',
    month: 3, day: 14, year: 2026,
    location: 'Coorg, Karnataka',
    coords: '12.3°N, 75.7°E',
    duration: '3h 42m duration',
    bortle: 3,
    sqm: 21.0,
    description: 'A subtle but beautiful dimming of the full moon as it passes through Earth\'s outer shadow.',
    highlights: ['Subtle moon dimming', 'Perfect for beginners', 'Coffee estate setting'],
    price: 3999,
    priceNote: 'Standard pricing',
    capacity: 60,
    spotsLeft: 28,
    guidedTours: true,
    telescope: '70mm Refractor',
    weather: 'Fair — 68% clear probability'
  },

  // ── METEOR SHOWERS ──
  {
    id: 'e4',
    type: 'meteor',
    name: 'Perseid Meteor Shower — Peak Night',
    month: 8, day: 11, year: 2026,
    location: 'Spiti Valley, Himachal Pradesh',
    coords: '32.2°N, 78.1°E',
    duration: '2-night camp',
    bortle: 1,
    sqm: 22.1,
    description: 'Over 100 meteors per hour streak across the sky in one of summer\'s greatest celestial fireworks. Cold mountain air ensures crystal-clear transparency. Camp under the cosmos with experienced guides narrating the mythology of Perseus.',
    highlights: ['~120 meteors per hour', 'All-night vigil', 'Milky Way core rising', 'Green &amp; yellow fireballs', 'Andromeda Galaxy visible'],
    price: 8499,
    priceNote: '2-night camp package',
    capacity: 40,
    spotsLeft: 12,
    guidedTours: true,
    telescope: '10" Dobsonian',
    weather: 'Excellent — 91% clear probability'
  },
  {
    id: 'e5',
    type: 'meteor',
    name: 'Geminid Meteor Shower Peak',
    month: 12, day: 13, year: 2026,
    location: 'Hanle Dark Sky Reserve, Ladakh',
    coords: '32.7°N, 78.9°E',
    duration: '2-night camp',
    bortle: 1,
    sqm: 22.4,
    description: 'The Geminids produce 120–150 multicoloured meteors per hour — the richest meteor shower of the year. Winter Hanle offers exceptional transparency and the Milky Way arching overhead.',
    highlights: ['150+ meteors per hour', 'Multicoloured meteors', 'Best shower of the year', 'Bortle Class 1 sky', 'Winter Milky Way'],
    price: 12999,
    priceNote: 'Peak winter pricing',
    capacity: 30,
    spotsLeft: 9,
    guidedTours: true,
    telescope: '12" Dobsonian',
    weather: 'Excellent — 94% clear probability'
  },
  {
    id: 'e6',
    type: 'meteor',
    name: 'Eta Aquariid Meteor Shower',
    month: 5, day: 5, year: 2026,
    location: 'Rann of Kutch, Gujarat',
    coords: '23.7°N, 70.8°E',
    duration: 'Single night',
    bortle: 2,
    sqm: 21.8,
    description: 'Debris from Halley\'s Comet creates this annual shower. Best viewed from southern India with up to 60 meteors/hour in a new-moon sky.',
    highlights: ['Halley\'s Comet debris', '60 meteors/hour', 'New moon timing', 'Scorpius &amp; Sagittarius rich field'],
    price: 6499,
    priceNote: 'Single night tour',
    capacity: 50,
    spotsLeft: 33,
    guidedTours: true,
    telescope: '130mm Reflector',
    weather: 'Good — 78% clear probability'
  },
  {
    id: 'e7',
    type: 'meteor',
    name: 'Leonid Meteor Storm Outburst',
    month: 11, day: 17, year: 2026,
    location: 'Jaisalmer, Rajasthan',
    coords: '26.9°N, 70.9°E',
    duration: 'Single night',
    bortle: 2,
    sqm: 21.6,
    description: 'Predictions suggest a brief storm outburst of 1,500+ meteors/hour for approximately 2 hours around 3 AM IST. A once-in-a-decade event.',
    highlights: ['Storm outburst predicted', '1,500+ meteors/hour peak', 'Sand dune viewing', 'Camel safari included'],
    price: 11999,
    priceNote: 'Storm prediction premium',
    capacity: 60,
    spotsLeft: 17,
    guidedTours: true,
    telescope: 'Naked eye focus',
    weather: 'Good — 80% clear probability'
  },

  // ── LUNAR EVENTS ──
  {
    id: 'e8',
    type: 'lunar',
    name: 'Strawberry Supermoon — Perigee Full Moon',
    month: 6, day: 22, year: 2026,
    location: 'Hampi, Karnataka',
    coords: '15.3°N, 76.4°E',
    duration: 'Evening tour',
    bortle: 3,
    sqm: 21.0,
    description: 'The Moon at its closest approach to Earth appears 14% larger and 30% brighter. Photograph the dramatic moonrise over ancient boulder landscapes of Hampi with our astrophotography guides.',
    highlights: ['14% larger than average', '30% brighter', 'UNESCO site backdrop', 'Astrophotography workshop', 'Golden hour moonrise'],
    price: 6299,
    priceNote: 'Evening tour',
    capacity: 45,
    spotsLeft: 22,
    guidedTours: true,
    telescope: '102mm APO Refractor',
    weather: 'Fair — 65% clear probability'
  },
  {
    id: 'e9',
    type: 'lunar',
    name: 'Blue Moon Total Lunar Eclipse',
    month: 1, day: 31, year: 2026,
    location: 'Nainital, Uttarakhand',
    coords: '29.3°N, 79.4°E',
    duration: '3h 23m (65m totality)',
    bortle: 3,
    sqm: 21.1,
    description: 'A rare blue moon — the second full moon in January — turns blood red during a total lunar eclipse visible across all of India.',
    highlights: ['Blood Moon appearance', 'Blue Moon coincidence', 'Himalayan backdrop', '65 minutes of totality'],
    price: 7499,
    priceNote: 'Rare event premium',
    capacity: 50,
    spotsLeft: 31,
    guidedTours: true,
    telescope: '100mm Refractor',
    weather: 'Good — 72% clear probability'
  },

  // ── PLANETARY ──
  {
    id: 'e10',
    type: 'planet',
    name: 'Jupiter–Saturn Great Conjunction',
    month: 3, day: 20, year: 2026,
    location: 'Pench National Park, Maharashtra',
    coords: '21.7°N, 79.3°E',
    duration: 'Evening tour',
    bortle: 3,
    sqm: 20.9,
    description: 'Jupiter and Saturn appear just 0.15° apart — close enough to fit both giant planets in a single high-power eyepiece view. A generational conjunction.',
    highlights: ['0.15° separation', 'Both planets in one view', 'Jupiter\'s Galilean moons', 'Saturn\'s ring system', 'Wildlife night sounds'],
    price: 5999,
    priceNote: 'Generational event',
    capacity: 35,
    spotsLeft: 19,
    guidedTours: true,
    telescope: 'CPC 1100 SCT',
    weather: 'Excellent — 85% clear probability'
  },
  {
    id: 'e11',
    type: 'planet',
    name: 'Mars at Opposition — Closest Approach',
    month: 9, day: 27, year: 2026,
    location: 'Mahabaleshwar, Maharashtra',
    coords: '17.9°N, 73.6°E',
    duration: 'All-night session',
    bortle: 3,
    sqm: 20.8,
    description: 'Mars at its closest point to Earth in 15 years. Polar ice caps, Valles Marineris and Olympus Mons cloud streaks potentially visible through our 12" telescope.',
    highlights: ['Mars 24.4" arc diameter', 'Polar caps visible', 'Valles Marineris feature', 'Surface detail session'],
    price: 4999,
    priceNote: 'Opposition pricing',
    capacity: 40,
    spotsLeft: 26,
    guidedTours: true,
    telescope: 'CPC 1100 + Barlow',
    weather: 'Good — 76% clear probability'
  },
  {
    id: 'e12',
    type: 'planet',
    name: 'Venus–Jupiter Conjunction Spectacle',
    month: 7, day: 1, year: 2026,
    location: 'Lonar Crater, Maharashtra',
    coords: '19.9°N, 76.5°E',
    duration: 'Evening tour',
    bortle: 2,
    sqm: 21.5,
    description: 'The two brightest planets converge to within 0.3° at dusk above the ancient meteorite crater lake — a stunning photo opportunity.',
    highlights: ['Venus crescent phase', 'Jupiter\'s cloud bands', 'Crater lake reflection', 'Bright naked-eye event'],
    price: 4499,
    priceNote: 'Standard pricing',
    capacity: 55,
    spotsLeft: 42,
    guidedTours: false,
    telescope: '80mm APO Refractor',
    weather: 'Fair — 61% clear probability'
  },

  // ── COMETS & SPECIAL ──
  {
    id: 'e13',
    type: 'comet',
    name: 'Comet C/2025 K1 Perihelion Pass',
    month: 4, day: 15, year: 2026,
    location: 'Hanle Dark Sky Reserve, Ladakh',
    coords: '32.7°N, 78.9°E',
    duration: '3-night expedition',
    bortle: 1,
    sqm: 22.4,
    description: 'A newly discovered long-period comet passes its closest point to the Sun, brightening to magnitude 5 — visible to the naked eye with a prominent gas &amp; dust tail.',
    highlights: ['Magnitude 5 — naked eye!', '15° tail length', 'Gas &amp; dust tail distinct', 'Once-in-a-century visitor', 'Astrophotography prime'],
    price: 19999,
    priceNote: 'Expedition pricing (3 nights)',
    capacity: 20,
    spotsLeft: 6,
    guidedTours: true,
    telescope: '16" Observatory Ritchey-Chrétien',
    weather: 'Excellent — 89% clear probability'
  },
  {
    id: 'e14',
    type: 'comet',
    name: 'Halley\'s Comet Return Preview',
    month: 2, day: 18, year: 2026,
    location: 'Spiti Valley, Himachal Pradesh',
    coords: '32.2°N, 78.1°E',
    duration: 'Single night',
    bortle: 1,
    sqm: 22.1,
    description: 'Although Halley\'s Comet returns in 2061, we observe its orbital region, debris field, and discuss its rich astronomical history under the darkest skies in India.',
    highlights: ['Debris field observation', 'Eta Aquariid parent', 'Historical lecture', 'Deep winter Milky Way'],
    price: 7999,
    priceNote: 'Special lecture tour',
    capacity: 30,
    spotsLeft: 24,
    guidedTours: true,
    telescope: '10" Dobsonian',
    weather: 'Good — 82% clear probability'
  },
  {
    id: 'e15',
    type: 'planet',
    name: 'Saturn\'s Rings — Maximum Tilt',
    month: 5, day: 15, year: 2026,
    location: 'Rann of Kutch, Gujarat',
    coords: '23.7°N, 70.8°E',
    duration: 'Evening session',
    bortle: 2,
    sqm: 21.8,
    description: 'Saturn\'s rings reach their maximum southward tilt (28°) for this decade — the most spectacular ring presentation until 2032.',
    highlights: ['28° ring tilt', 'Cassini Division visible', 'Titan &amp; 4 moons', 'Best ring view this decade'],
    price: 5499,
    priceNote: 'Standard pricing',
    capacity: 60,
    spotsLeft: 48,
    guidedTours: true,
    telescope: 'CPC 1100 SCT',
    weather: 'Excellent — 88% clear probability'
  },
];


// ─── State ────────────────────────────────
let activeFilter = 'all';
let activeMonthFilter = 'all';

const BADGE_MAP = {
  eclipse: 'badge-eclipse',
  meteor: 'badge-meteor',
  lunar: 'badge-lunar',
  planet: 'badge-planet',
  comet: 'badge-comet'
};

const ICON_MAP = {
  eclipse: '◉',
  meteor: '✦',
  lunar: '●',
  planet: '♄',
  comet: '✶'
};

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


// ─── Filter Logic ─────────────────────────
function filterEvents(type, btn) {
  activeFilter = type;

  // Update button states
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  renderEvents();
}

function filterByMonth() {
  activeMonthFilter = document.getElementById('monthFilter').value;
  renderEvents();
}

function getFilteredEvents() {
  return EVENTS_DATA.filter(ev => {
    const typeMatch = activeFilter === 'all' || ev.type === activeFilter;
    const monthMatch = activeMonthFilter === 'all' || ev.month === parseInt(activeMonthFilter);
    return typeMatch && monthMatch;
  });
}


// ─── Render Events ────────────────────────
function renderEvents() {
  const container = document.getElementById('eventsContainer');
  const noResults = document.getElementById('noResults');
  const countEl = document.getElementById('eventCount');
  if (!container) return;

  const filtered = getFilteredEvents();

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${EVENTS_DATA.length} events`;
  }

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    return;
  }
  if (noResults) noResults.style.display = 'none';

  // Sort by date
  const sorted = [...filtered].sort((a, b) => {
    const da = new Date(a.year, a.month - 1, a.day);
    const db = new Date(b.year, b.month - 1, b.day);
    return da - db;
  });

  container.innerHTML = sorted.map((ev, i) => renderEventCard(ev, i)).join('');

  // Re-observe reveals
  document.querySelectorAll('.event-card:not(.visible)').forEach(el => {
    el.classList.add('reveal');
    el.style.transitionDelay = (parseInt(el.dataset.index || 0) % 4) * 0.08 + 's';
    setTimeout(() => el.classList.add('visible'), 50);
  });
}


function renderEventCard(ev, index) {
  const badgeClass = BADGE_MAP[ev.type] || 'badge-planet';
  const icon = ICON_MAP[ev.type] || '★';
  const spotsWidth = ((ev.capacity - ev.spotsLeft) / ev.capacity * 100).toFixed(0);
  const urgency = ev.spotsLeft < 15 ? `<span style="color:var(--aurora-pink);font-size:0.72rem;font-weight:700;margin-left:8px;">◆ Only ${ev.spotsLeft} left!</span>` : '';

  return `
    <div class="event-card reveal" data-type="${ev.type}" data-month="${ev.month}" data-index="${index}" onclick="openEventModal('${ev.id}')">
      <div class="event-card-header">
        <span class="event-type-badge ${badgeClass}">${icon} ${capitalize(ev.type)}</span>
        <div class="event-date-box">
          <div class="event-date-day">${String(ev.day).padStart(2, '0')}</div>
          <div class="event-date-month">${MONTH_NAMES[ev.month - 1]} ${ev.year}</div>
        </div>
      </div>
      <div class="event-card-body">
        <h3 class="event-name">${ev.name}</h3>
        <p class="event-desc">${ev.description.length > 160 ? ev.description.slice(0, 157) + '…' : ev.description}</p>
        <div class="event-meta">
          <span class="event-meta-item">▸ ${ev.location}</span>
          <span class="event-meta-item">◷ ${ev.duration}</span>
          <span class="event-meta-item">◎ Bortle Class ${ev.bortle}</span>
          <span class="event-meta-item">★ SQM ${ev.sqm}</span>
        </div>
        <!-- Capacity bar -->
        <div style="margin-top:8px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;">
            <span style="font-size:0.72rem;color:var(--star-faint);">Filling up fast</span>
            <span style="font-size:0.72rem;color:var(--star-faint);">${ev.capacity - ev.spotsLeft}/${ev.capacity} booked${urgency}</span>
          </div>
          <div style="height:4px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden;">
            <div style="height:100%;width:${spotsWidth}%;background:${parseInt(spotsWidth) > 80 ? 'var(--aurora-pink)' : 'var(--aurora-teal)'};border-radius:2px;transition:width 1s ease;"></div>
          </div>
        </div>
      </div>
      <div class="event-card-footer">
        <div class="event-price">
          <span class="event-price-amount">₹${ev.price.toLocaleString('en-IN')}</span>
          <span class="event-price-note">${ev.priceNote}</span>
        </div>
        <button class="btn btn-sm btn-primary" onclick="event.stopPropagation(); bookEvent('${ev.id}')" id="book-btn-${ev.id}">Book Now</button>
      </div>
    </div>
  `;
}


// ─── Event Modal ──────────────────────────
function openEventModal(id) {
  const ev = EVENTS_DATA.find(e => e.id === id);
  if (!ev) return;

  const icon = ICON_MAP[ev.type] || '★';
  const badgeClass = BADGE_MAP[ev.type] || 'badge-planet';

  document.getElementById('modalTitle').textContent = ev.name;
  document.getElementById('modalContent').innerHTML = `
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px;">
      <span class="event-type-badge ${badgeClass}">${icon} ${capitalize(ev.type)}</span>
      <span class="event-type-badge badge-planet">◎ Bortle ${ev.bortle}</span>
      <span class="event-type-badge badge-comet">★ SQM ${ev.sqm}</span>
    </div>
    <p style="font-size:0.9rem;color:var(--star-dim);line-height:1.8;margin-bottom:20px;">${ev.description}</p>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;">
      <div style="background:rgba(255,255,255,0.03);border-radius:10px;padding:12px;">
        <div style="font-size:0.7rem;color:var(--star-faint);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">Date</div>
        <div style="font-weight:700;color:var(--star-white);">${MONTH_NAMES[ev.month - 1]} ${ev.day}, ${ev.year}</div>
      </div>
      <div style="background:rgba(255,255,255,0.03);border-radius:10px;padding:12px;">
        <div style="font-size:0.7rem;color:var(--star-faint);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">Location</div>
        <div style="font-weight:700;color:var(--star-white);">${ev.location}</div>
      </div>
      <div style="background:rgba(255,255,255,0.03);border-radius:10px;padding:12px;">
        <div style="font-size:0.7rem;color:var(--star-faint);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">Telescope</div>
        <div style="font-weight:700;color:var(--aurora-blue);">${ev.telescope}</div>
      </div>
      <div style="background:rgba(255,255,255,0.03);border-radius:10px;padding:12px;">
        <div style="font-size:0.7rem;color:var(--star-faint);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">Forecast</div>
        <div style="font-weight:700;color:var(--aurora-teal);">${ev.weather}</div>
      </div>
    </div>

    <div style="margin-bottom:20px;">
      <h4 style="font-size:0.8rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--star-dim);margin-bottom:10px;">Highlights</h4>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        ${ev.highlights.map(h => `<span style="background:rgba(74,108,247,0.1);border:1px solid rgba(74,108,247,0.2);border-radius:6px;padding:5px 12px;font-size:0.78rem;color:var(--aurora-blue);">✦ ${h}</span>`).join('')}
      </div>
    </div>

    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;padding-top:16px;border-top:var(--border-subtle);">
      <div>
        <div style="font-family:var(--font-display);font-size:2rem;font-weight:800;color:var(--aurora-gold);">₹${ev.price.toLocaleString('en-IN')}</div>
        <div style="font-size:0.78rem;color:var(--star-faint);">${ev.priceNote} · ${ev.spotsLeft} spots left</div>
      </div>
      <div style="display:flex;gap:10px;">
        <a href="forecast.html" class="btn btn-sm btn-secondary">◑ Forecast</a>
        <button class="btn btn-sm btn-primary" onclick="openBookEvent('${ev.id}'); closeEventModal()">Book Now →</button>
      </div>
    </div>
  `;

  document.getElementById('eventModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeEventModal() {
  document.getElementById('eventModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('eventModal')?.addEventListener('click', function (e) {
  if (e.target === this) closeEventModal();
});

function bookEvent(id) {
  const ev = EVENTS_DATA.find(e => e.id === id);
  if (!ev) return;
  // Build date string YYYY-MM-DD
  const month = String(ev.month).padStart(2, '0');
  const day = String(ev.day).padStart(2, '0');
  const dateStr = `${ev.year}-${month}-${day}`;

  // Map price to nearest package
  let pkg = 'stargazer';
  if (ev.price >= 15000) pkg = 'observatory';
  else if (ev.price >= 7000) pkg = 'explorer';
  else if (ev.price >= 4000) pkg = 'stargazer';

  const url = `booking.html?event=${encodeURIComponent(ev.name)}&pkg=${pkg}&date=${dateStr}&people=2`;
  window.location.href = url;
}

function openBookEvent(id) {
  bookEvent(id);
}


// ─── Utility ──────────────────────────────
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


// ─── Init ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderEvents();

  // Live Moon Phase on events page
  const mp = getMoonPhase(new Date());
  const widget = document.getElementById('moonPhaseWidget');
  if (widget) {
    widget.innerHTML = `${mp.emoji} ${mp.phase} · ${mp.illumination}% lit`;
  }
});
