(() => {
  'use strict';

  /* ============ ICONS ============ */
  const ICONS = {
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.7h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.14C15.9 4.06 15 4 13.94 4 11.7 4 10.2 5.32 10.2 7.9v2.4H7.6v3h2.6V21h3.3z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 6.5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.4 8.75h3.1V21H3.4V8.75zM9.35 8.75h2.97v1.68h.04c.41-.78 1.43-1.6 2.94-1.6 3.14 0 3.72 2.07 3.72 4.76V21h-3.1v-5.72c0-1.36-.02-3.12-1.9-3.12-1.9 0-2.19 1.49-2.19 3.02V21h-3.1V8.75z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.4-.44-5a2.9 2.9 0 00-2-2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.56.5a2.9 2.9 0 00-2 2C1 8.6 1 12 1 12s0 3.4.44 5a2.9 2.9 0 002 2c1.66.5 8.56.5 8.56.5s6.9 0 8.56-.5a2.9 2.9 0 002-2C23 15.4 23 12 23 12zM9.75 15.5v-7l6 3.5-6 3.5z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    pinterest: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-3.64 19.3c-.05-.8-.09-2 .02-2.9.1-.8.66-5.1.66-5.1s-.17-.34-.17-.83c0-.78.45-1.36 1.02-1.36.48 0 .71.36.71.8 0 .48-.31 1.2-.47 1.88-.13.56.28 1.02.83 1.02 1 0 1.77-1.05 1.77-2.58 0-1.35-.97-2.29-2.36-2.29-1.6 0-2.55 1.2-2.55 2.45 0 .48.19.99.42 1.27a.17.17 0 01.04.16c-.05.2-.16.63-.18.72-.03.12-.1.14-.23.09-.85-.4-1.38-1.63-1.38-2.63 0-2.14 1.56-4.11 4.48-4.11 2.35 0 4.18 1.68 4.18 3.92 0 2.34-1.47 4.22-3.52 4.22-.69 0-1.33-.36-1.55-.78l-.42 1.6c-.15.58-.56 1.31-.83 1.75A10 10 0 1012 2z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.06-1.33A10 10 0 1012 2zm5.6 14.3c-.24.66-1.4 1.28-1.93 1.33-.5.06-1.1.09-1.78-.11-.4-.13-.93-.3-1.6-.6-2.8-1.2-4.63-4.02-4.77-4.2-.14-.19-1.15-1.53-1.15-2.92 0-1.4.73-2.07.99-2.36.26-.28.56-.35.75-.35h.53c.17 0 .4-.06.62.48.24.55.8 1.94.87 2.08.07.14.12.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.28.28-.12.56.16.27.72 1.2 1.55 1.94 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.2.7-.82.89-1.1.19-.28.37-.23.62-.14.26.1 1.63.77 1.9.91.28.14.46.21.53.32.07.12.07.68-.17 1.32z"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17" cy="8.5" r="2.6"/><path d="M15.2 14.3c2.7.3 4.8 2.4 4.8 5.7"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 4h10v4a5 5 0 01-10 0V4z"/><path d="M5 6H3v1a4 4 0 004 4M19 6h2v1a4 4 0 01-4 4"/><path d="M9 20h6M12 15v5"/></svg>',
    rupee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 4h12M6 8h12M6 4c4 0 7 1.6 7 4s-3 4-7 4h-.5L15 20"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6" width="14" height="12" rx="2.5"/><path d="M16 10l6-3v10l-6-3"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5.5A2.5 2.5 0 016.5 3H20v16H6.5A2.5 2.5 0 004 16.5v-11z"/><path d="M4 16.5A2.5 2.5 0 016.5 19H20"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10M11 20V4M18 20v-7"/></svg>',
    cert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="5"/><path d="M8.5 12.5L7 21l5-2.5 5 2.5-1.5-8.5"/></svg>',
    lifestyle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12l2-7h14l2 7M5 12v7h14v-7M9 19v-4h6v4"/></svg>',
    achievement: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 4h10v4a5 5 0 01-10 0V4z"/><path d="M9 20h6M12 15v5"/></svg>',
    earnings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19V5M4 19h16M8 15l3-3 3 2 4-5"/></svg>',
    legal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v18M5 8l-3 6a3 3 0 006 0l-3-6zM19 8l-3 6a3 3 0 006 0l-3-6zM5 8h14M9 3h6"/></svg>',
  };

  document.querySelectorAll('.icon[data-icon]').forEach(el => {
    el.innerHTML = ICONS[el.dataset.icon] || '';
  });

  /* ============ THEME TOGGLE ============ */
  const root = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);

  function currentIsDark() {
    const attr = root.getAttribute('data-theme');
    if (attr) return attr === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  themeBtn.setAttribute('aria-pressed', String(!currentIsDark()));

  themeBtn.addEventListener('click', () => {
    const next = currentIsDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeBtn.setAttribute('aria-pressed', String(next === 'light'));
  });

  /* ============ MOBILE DRAWER ============ */
  const drawer = document.getElementById('drawer');
  const navToggle = document.getElementById('nav-toggle');
  const drawerClose = document.getElementById('drawer-close');
  const drawerOverlay = document.getElementById('drawer-overlay');

  function openDrawer() {
    drawer.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
  navToggle.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

  /* ============ LANGUAGE TABS (video) ============ */
  const langTabs = document.querySelectorAll('.lang-tab');
  const langLabel = document.getElementById('lang-label');
  langTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      langTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      langLabel.textContent = tab.dataset.lang;
    });
  });

  /* ============ GALLERY DATA + TABS ============ */
  const GALLERY_DATA = {
    lifestyle: [
      { icon: 'lifestyle', caption: 'Weekend getaway', g1: '#fcbf40', g2: '#f97316' },
      { icon: 'lifestyle', caption: 'City living', g1: '#38bdf8', g2: '#6366f1' },
      { icon: 'lifestyle', caption: 'Team offsite', g1: '#34d399', g2: '#0ea5e9' },
      { icon: 'lifestyle', caption: 'Everyday moments', g1: '#f472b6', g2: '#a855f7' },
    ],
    achievements: [
      { icon: 'achievement', caption: 'Milestone #1', g1: '#fcbf40', g2: '#eab308' },
      { icon: 'achievement', caption: 'Award recognition', g1: '#f97316', g2: '#dc2626' },
      { icon: 'achievement', caption: 'Community milestone', g1: '#22d3ee', g2: '#3b82f6' },
      { icon: 'achievement', caption: 'Growth milestone', g1: '#a3e635', g2: '#16a34a' },
    ],
    earnings: [
      { icon: 'earnings', caption: 'Monthly growth', g1: '#34d399', g2: '#059669' },
      { icon: 'earnings', caption: 'Revenue snapshot', g1: '#fcbf40', g2: '#f59e0b' },
      { icon: 'earnings', caption: 'Payout summary', g1: '#60a5fa', g2: '#4338ca' },
      { icon: 'earnings', caption: 'Growth trend', g1: '#f472b6', g2: '#db2777' },
    ],
    legal: [
      { icon: 'legal', caption: 'Business registration', g1: '#94a3b8', g2: '#334155' },
      { icon: 'legal', caption: 'Tax compliance', g1: '#fcbf40', g2: '#b45309' },
      { icon: 'legal', caption: 'GST certificate', g1: '#38bdf8', g2: '#1d4ed8' },
      { icon: 'legal', caption: 'Verified credentials', g1: '#c084fc', g2: '#7e22ce' },
    ],
  };
  const GALLERY_LABELS = {
    lifestyle: 'View My Lifestyle',
    achievements: 'View My Achievements',
    earnings: 'View My Earnings',
    legal: 'View Legal Certificates',
  };

  const galleryTrack = document.getElementById('gallery-track');
  const galleryLink = document.getElementById('gallery-view-link');
  const galleryTabs = document.querySelectorAll('.gallery-tab');

  function renderGallery(key) {
    galleryTrack.innerHTML = GALLERY_DATA[key].map(item => `
      <div class="gallery-card" style="--g1:${item.g1};--g2:${item.g2}">
        <span class="icon">${ICONS[item.icon]}</span>
        <span class="gallery-caption">${item.caption}</span>
      </div>
    `).join('');
    galleryLink.textContent = `${GALLERY_LABELS[key]} →`;
  }
  renderGallery('lifestyle');

  galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      galleryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderGallery(tab.dataset.gallery);
    });
  });

  /* ============ TESTIMONIALS ============ */
  const TESTIMONIALS = [
    { name: 'Jane Doe', role: 'Student, Batch 12', quote: 'I never imagined online income could be this achievable. The step-by-step guidance made all the difference.' },
    { name: 'John Smith', role: 'Student, Batch 9', quote: 'I was skeptical about online earning systems, but the structured approach here proved me wrong in the best way.' },
    { name: 'Alex Johnson', role: 'Student, Batch 14', quote: 'Think less and take action — that mindset shift alone changed how I approach my work every day.' },
    { name: 'Sam Wilson', role: 'Student, Batch 7', quote: 'The community support kept me accountable. Three months in, I finally see consistent results.' },
    { name: 'Taylor Brown', role: 'Student, Batch 15', quote: 'Clear roadmap, real strategies, no fluff. Exactly what a beginner like me needed to get started.' },
    { name: 'Jordan Kim', role: 'Student, Batch 5', quote: 'From zero technical background to running my own online projects — the mentorship made it possible.' },
    { name: 'Morgan Davis', role: 'Student, Batch 11', quote: 'The live sessions and Q&A gave me confidence to ask questions and actually apply what I learned.' },
    { name: 'Casey Lee', role: 'Student, Batch 3', quote: 'I started part-time alongside my job. The systems taught here scaled with my available time.' },
  ];

  const testimonialTrack = document.getElementById('testimonial-track');
  const AVATAR_COLORS = ['#fcbf40', '#38bdf8', '#f472b6', '#34d399', '#a78bfa', '#fb923c'];

  testimonialTrack.innerHTML = TESTIMONIALS.map((t, i) => `
    <div class="testimonial-card">
      <div class="testimonial-stars">★★★★★</div>
      <p class="quote">&ldquo;${t.quote}&rdquo;</p>
      <div class="testimonial-name">
        <div class="avatar" style="background:${AVATAR_COLORS[i % AVATAR_COLORS.length]}">${t.name.charAt(0)}</div>
        <div>
          <strong>${t.name}</strong>
          <span>${t.role}</span>
        </div>
      </div>
    </div>
  `).join('');

  /* ============ CAROUSEL PREV/NEXT ============ */
  document.querySelectorAll('.carousel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const track = document.getElementById(btn.dataset.target);
      const card = track.querySelector('.gallery-card, .testimonial-card');
      const step = card ? card.offsetWidth + 20 : 300;
      track.scrollBy({ left: btn.classList.contains('next') ? step : -step, behavior: 'smooth' });
    });
  });

  /* ============ FAQ ACCORDION ============ */
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      accordionItems.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ============ SCROLL TOP + ACTIVE NAV ============ */
  const scrollTopBtn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('show', window.scrollY > 500);
  });
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

})();
