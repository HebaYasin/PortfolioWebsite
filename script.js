//TODO: find a way to make my website not copied by genAI
//TODO: make next, prev buttons have more height

(async () => {
'use strict';
const CONFIG = {name: 'Heba Yasin',role: 'AI Engineer',email: 'heba.yasin.hdaib@gmail.com',tagline: 'Welcome to my Portfolio Website',cvUrl: 'assets/documents/HebaYasinCV.pdf',linkedinUrl: 'https://www.linkedin.com/in/hebah-yasin/',githubUrl: 'https://github.com/HebaYasin',contactEndpoint: 'https://formspree.io/f/xwlpgynl' };

const $ = (s, r = document) => r.querySelector(s);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

const loader = $('#loader'), loadStart = performance.now();
const pageLoaded = new Promise(r => document.readyState === 'complete' ? r() : addEventListener('load', r, { once: true }));
Promise.race([pageLoaded, new Promise(r => setTimeout(r, 1500))]).then(() => {
  const wait = Math.max(0, 700 - (performance.now() - loadStart));
  setTimeout(() => { loader.classList.add('done'); setTimeout(() => loader.remove(), 700); }, wait);
});

function setPageMarkup(element, markup) {
  const template = document.createElement('template');
  template.innerHTML = markup;
  template.content.querySelectorAll('img[src]').forEach(img => {
    if (img.getAttribute('src') === 'assets/images/personal-images/grad.webp') {
      img.fetchPriority = 'high';
      img.loading = 'eager';
      img.decoding = 'async';
      return;
    }
    img.dataset.src = img.getAttribute('src');
    img.removeAttribute('src');
    img.loading = 'lazy';
    img.decoding = 'async';
  });
  element.append(template.content);
}

const loadImagesIn = element => element.querySelectorAll('img[data-src]').forEach(img => {
  if (!img.hasAttribute('src')) img.setAttribute('src', img.dataset.src);
});
const releaseImagesIn = element => element.querySelectorAll('img[src][data-src]').forEach(img => img.removeAttribute('src'));

root.style.setProperty('--wood-grain', 'url("assets/images/bg/wood.webp")');
root.style.setProperty('--noise', 'url("assets/images/bg/noise.webp")');

const FIRST = CONFIG.name.split(' ')[0];
const HOME = `<button class="home" type="button" data-action="home" aria-label="Close the notebook and go back to the cover"><svg viewBox="0 0 66 42" fill="none" stroke="#2b2018" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22L33 4l27 18"/><path d="M14 19v19h38V19"/><path d="M29 38V27h8v11"/></svg></button>`;
const page = (side, no, inner) => `<div class="pg ${side}">${inner}<span class="pgno">${no}</span>` +
  (side === 'right'
    ? '<button class="turn next" type="button" data-action="next" aria-label="Turn to the next page"></button>'
    : '<button class="turn prev" type="button" data-action="prev" aria-label="Turn back a page"></button>') + '</div>';

const SPREADS = window.PORTFOLIO_CONTENT({ CONFIG, FIRST, HOME, page });
const SECTIONS = {
  welcome: { label: 'Welcome', ready: true },
  education: { label: 'Education', ready: true },
  experience: { label: 'Experience', ready: true },
  projects: { label: 'Projects', ready: true },
  skills: { label: 'Skills', ready: true },
  contact: { label: 'Contact', ready: true }
};
const rangeOf = id => { const idx = SPREADS.map((s, i) => s.section === id ? i : -1).filter(i => i >= 0); return [idx[0], idx[idx.length - 1]]; };

/* ===== Build the leaves ===== */
const book = $('#book'), stage = $('#stage'), scaler = $('#scaler'), band = $('#band');
const N = SPREADS.length + 1;
const coverFront = `<div class="sticker"><h1 aria-label="${CONFIG.name} Portfolio"><span class="nm">${CONFIG.name.split(' ')[0]}</span><span class="nm">${CONFIG.name.split(' ').slice(1).join(' ')}</span><span class="pf">Portfolio</span></h1>
  <svg viewBox="0 0 170 20" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"><path d="M4 12c14-12 26 10 40 0s26 10 40 0 26 10 40 0 26 8 40 0"/></svg></div>
  <p class="tagline">${CONFIG.tagline}</p>`;


const TABS = [
  { id: 'education', leaf: rangeOf('education')[0], top: -380, cls: '' },
  { id: 'experience', leaf: rangeOf('experience')[0], top: -180, cls: 'd1' },
  { id: 'projects', leaf: rangeOf('projects')[0], top: 20, cls: 'd2' },
  { id: 'skills', leaf: rangeOf('skills')[0], top: 220, cls: 'd3' }
];


let mode = window.innerWidth <= 760 ? 'phone' : 'desk';
let pagesIn = null;
let dk = 0;
const leaves = new Array(N);
const cardtab = $('.cardtab');            // desktop contact card: lives on the last page so pages flip over it
const pageNodes = new Map();
const getPageNode = (spread, side) => {
  const key = `${spread}:${side}`;
  let node = pageNodes.get(key);
  if (!node) {
    const container = document.createElement('div');
    setPageMarkup(container, SPREADS[spread][side]);
    node = container.firstElementChild;
    pageNodes.set(key, node);
  }
  return node;
};
const isFlipped = (j, s) => j <= s;
const buildLeafShell = j => {
  if (leaves[j]) return leaves[j];
  const el = document.createElement('div');
  el.className = 'leaf' + (j === 0 ? ' cover' : '');
  el.innerHTML = '<div class="face front"></div><div class="face back"></div>';
  const front = el.querySelector('.face.front'), back = el.querySelector('.face.back');
  if (j === 0) setPageMarkup(front, coverFront);
  front.appendChild(document.createElement('div')).className = 'shade';
  back.appendChild(document.createElement('div')).className = 'shade';
  if (j === 0) {
    back.dataset.action = 'home';
    back.setAttribute('aria-label', 'Click to close the notebook');
    const coverOpen = document.createElement('button');
    coverOpen.className = 'cover-open-trigger';
    coverOpen.type = 'button';
    coverOpen.dataset.action = 'section:welcome';
    coverOpen.setAttribute('aria-label', 'Open the notebook');
    coverOpen.title = 'Open to About';
    front.appendChild(coverOpen);
  }
  TABS.filter(t => t.leaf === j).forEach(t => {
    const wrap = document.createElement('div');
    wrap.className = 'tabwrap';
    wrap.style.cssText = `left:${(j === 0 ? 488 : 476) / 16}rem;top:${(t.top - (j === 0 ? -404 : -396)) / 16}rem;width:${(j === 0 ? 52 : 62) / 16}rem`;
    wrap.innerHTML = ['front', 'back'].map(f => `<button class="tab ${f} ${t.cls}" type="button" data-action="section:${t.id}">${SECTIONS[t.id].label}</button>`).join('');
    el.appendChild(wrap);
  });
  el.style.zIndex = N + 2 - j;
  el.classList.toggle('flipped', isFlipped(j, state.s));
  book.appendChild(el);
  if (j === N - 1) front.appendChild(cardtab);
  const leaf = { j, el, pagesReady: false };
  leaves[j] = leaf;
  return leaf;
};
const buildLeaf = j => {
  const leaf = buildLeafShell(j);
  if (leaf.pagesReady) return;
  const { el } = leaf;
  const front = el.querySelector('.face.front'), back = el.querySelector('.face.back');
  const addPage = (face, node) => {
    face.insertBefore(node, face.querySelector('.shade'));
    initializePage(node);
    bindContactForm();
  };
  if (j > 0) addPage(front, getPageNode(j - 1, 'right'));
  if (j < SPREADS.length) addPage(back, getPageNode(j, 'left'));
  leaf.pagesReady = true;
};

/* ===== Phone notebook: top-bound, pages flip vertically ===== */
const dscaler = document.createElement('div'); dscaler.id = 'dscaler';
const deckEl = document.createElement('div'); deckEl.id = 'deck';
dscaler.appendChild(deckEl); $('#app').appendChild(dscaler);
const DPAGE_KEYS = SPREADS.flatMap((sp, spread) => sp.section === 'contact'
  ? [[spread, 'right'], [spread, 'left']]
  : [[spread, 'left'], [spread, 'right']]);
const dsheets = new Array(DPAGE_KEYS.length + 1);
const contactCardPage = DPAGE_KEYS.findIndex(([spread, side]) =>
  SPREADS[spread].section === 'contact' && side === 'right');
const pcard = document.createElement('button');
pcard.className = 'pcard'; pcard.type = 'button'; pcard.dataset.action = 'section:contact'; pcard.setAttribute('aria-label', 'Contact');
pcard.innerHTML = '<span class="ct-label"><svg viewBox="0 0 34 26" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="30" height="20" rx="2"/><path d="M3 5l14 11L31 5"/></svg>Contact</span><span class="ct-info"><span class="card-name"></span><span class="card-role"></span><span class="card-rule"></span><span class="card-mail"></span></span>';
pcard.querySelector('.card-name').textContent = CONFIG.name;
pcard.querySelector('.card-role').textContent = CONFIG.role;
pcard.querySelector('.card-mail').textContent = CONFIG.email;
function buildSheet(i, withPage = true) {
  let el = dsheets[i];
  if (!el) {
    el = document.createElement('div');
    el.className = 'psheet' + (i === 0 ? ' pcover' : '');
    el.innerHTML = '<div class="face front"></div><div class="face back"></div>';
    dsheets[i] = el;
    el.classList.toggle('flipped', i < dk);
    el.style.zIndex = i < dk ? i + 2 : dsheets.length + 2 - i;
    deckEl.appendChild(el);
    const front = el.querySelector('.face.front'), back = el.querySelector('.face.back');
    if (i === 0) setPageMarkup(front, coverFront);
    front.appendChild(document.createElement('div')).className = 'shade';
    back.appendChild(document.createElement('div')).className = 'shade';
    if (i === contactCardPage + 1) front.appendChild(pcard);
  }
  if (withPage && i > 0) {
    const [spread, side] = DPAGE_KEYS[i - 1];
    const front = el.querySelector('.face.front');
    const node = getPageNode(spread, side);
    if (node.parentElement !== front) front.insertBefore(node, front.querySelector('.shade'));
    initializePage(node);
    bindContactForm();
  }
  return el;
}
const bind = document.createElement('div'); bind.className = 'pbind';
const ppad = document.createElement('a');
ppad.className = 'ppad'; ppad.dataset.link = 'cvUrl'; ppad.href = '#';
ppad.setAttribute('aria-label', 'Open my CV (PDF) in a new tab'); ppad.innerHTML = '<span>CV</span>';
dscaler.insertBefore(ppad, deckEl);

const ci = SPREADS.findIndex(sp => sp.section === 'contact');
function placeContactHeader(phone) {
  const cLeft = pageNodes.get(`${ci}:left`), cRight = pageNodes.get(`${ci}:right`);
  if (!cLeft || !cRight) return;
  const cHead = cLeft.querySelector('header.ph') || cRight.querySelector('header.ph');
  if (!cHead) return;
  const cNoL = cLeft.querySelector('.pgno'), cNoR = cRight.querySelector('.pgno');
  const noL = cNoL.dataset.desktopNumber ?? cNoL.textContent;
  const noR = cNoR.dataset.desktopNumber ?? cNoR.textContent;
  cNoL.dataset.desktopNumber = noL;
  cNoR.dataset.desktopNumber = noR;
  (phone ? cRight : cLeft).prepend(cHead);
  cNoL.textContent = phone ? noR : noL;
  cNoR.textContent = phone ? noL : noR;
}
function ensureSectionMarkup(id, fromSpread = rangeOf(id)[0], toSpread = rangeOf(id)[0], padding = 1) {
  const first = Math.max(0, Math.min(fromSpread, toSpread) - padding);
  const last = Math.min(SPREADS.length - 1, Math.max(fromSpread, toSpread) + padding);
  if (mode === 'phone') {
    buildSheet(0, false);
    buildSheet(contactCardPage + 1, false);
    for (let spread = first; spread <= last; spread++) {
      DPAGE_KEYS.forEach(([pageSpread], index) => {
        if (pageSpread === spread) buildSheet(index + 1);
      });
    }
    if (ci >= first && ci <= last) placeContactHeader(true);
    if (!deckEl.contains(bind)) deckEl.appendChild(bind);
  } else {
    for (let j = 0; j < N; j++) buildLeafShell(j);
    for (let j = Math.max(0, first); j <= Math.min(N - 1, last + 1); j++) buildLeaf(j);
    if (ci >= first && ci <= last) placeContactHeader(false);
  }
}
function ensureMarkup(id, firstSpread, lastSpread) {
  ensureSectionMarkup(id, firstSpread, lastSpread);
}
function updateZIndex(items, getElement, getValue) {
  items.forEach((item, index) => {
    const element = getElement(item, index);
    if (element) element.style.zIndex = getValue(item, index);
  });
}
const deckSection = () => dk === 0 ? null : SPREADS[Math.floor((dk - 1) / 2)].section;

const seatCard = () => deckEl.classList.toggle('seated', dk > contactCardPage);

const WINDOW = 1;
const inWindow = i => i === 0 || i === contactCardPage + 1 ||
  (i > 0 && Math.abs(DPAGE_KEYS[i - 1][0] - (dk === 0 ? 0 : Math.floor((dk - 1) / 2))) <= WINDOW);
let cullT;
function updateSheetWindow(instant = false, settleDelay = 1700) {
  dsheets.forEach((el, i) => {
    if (el && inWindow(i)) {
      el.style.visibility = '';
      loadImagesIn(el);
    }
  });
  clearTimeout(cullT);
  cullT = setTimeout(() => dsheets.forEach((el, i) => {
    if (!el || inWindow(i)) return;
    releaseImagesIn(el);
    el.remove();
    dsheets[i] = undefined;
  }), instant ? 0 : settleDelay);
}


function prepareDeckChange(t, opts) {
  const from = dk;
  if (t === from) return null;
  const fromSpread = from === 0 ? 0 : Math.floor((from - 1) / 2);
  const targetSpread = t === 0 ? 0 : Math.floor((t - 1) / 2);
  const firstSpread = opts.fromHash ? targetSpread : Math.min(fromSpread, targetSpread);
  const lastSpread = opts.fromHash ? targetSpread : Math.max(fromSpread, targetSpread);
  return { t, opts, from, firstSpread, lastSpread };
}
function ensureDeckMarkup(change) {
  ensureMarkup(deckSectionIdFor(change.t), change.firstSpread, change.lastSpread);
}
function updateDeckState(change) {
  const { t, opts, from } = change;
  dk = t;
  const instant = !!opts.instant || reduced, total = dsheets.length;
  const changing = dsheets.map((el, i) => el && (i < t) !== (i < from) ? i : -1)
    .filter(i => i >= 0).sort((a, b) => t > from ? a - b : b - a);
  const closingBook = t === 0 && from > 0;
  const keep = new Set(closingBook || changing.length <= 5
    ? changing
    : [...changing.slice(0, 4), changing[changing.length - 1]]);
  const duration = closingBook ? 500 : opts.unit ? 1000 : 800;
  const gap = instant || opts.unit ? 0 : closingBook ? 65 : Math.min(90, 700 / Math.max(1, keep.size));
  return { ...change, instant, total, changing, keep, duration, gap };
}
function flipSheets(transition) {
  let k = 0;
  transition.changing.forEach(i => {
    const anim = transition.keep.has(i);
    const d = anim ? k++ * transition.gap : 0, dur = transition.instant ? 0 : transition.duration;

    dsheets[i].style.setProperty('--vd', (anim ? d + dur / 2 : 0) + 'ms');
    dsheets[i].style.transition = anim
      ? `transform ${dur}ms var(--ease) ${d}ms, z-index 0s linear ${d + dur / 2}ms`
      : 'none';
    dsheets[i].classList.toggle('flipped', i < transition.t);
  });

  transition.keep.forEach(i => { dsheets[i].style.visibility = ''; });
}

function scheduleDeckCull(transition) {
  const settleDelay = transition.changing.length
    ? (transition.keep.size - 1) * transition.gap + (transition.instant ? 0 : transition.duration) + 100
    : 1700;
  updateSheetWindow(transition.instant, Math.max(1700, settleDelay));
}

function deckApply(t, opts = {}) {
  const change = prepareDeckChange(t, opts);
  if (!change) return;
  ensureDeckMarkup(change);
  const transition = updateDeckState(change);
  updateZIndex(dsheets, sheet => sheet, (_, i) => i < t ? i + 2 : transition.total + 2 - i);
  seatCard();
  flipSheets(transition);
  scheduleDeckCull(transition);
  syncHistory(opts);
  updateUI();
}
function rehome() {
  const previousMode = pagesIn;
  clearTimeout(cullT);
  if (previousMode === 'phone') {
    state.s = dk === 0 ? -1 : Math.floor((dk - 1) / 2);
    state.side = dk > 0 && dk % 2 === 0 ? 'R' : 'L';
    deckEl.replaceChildren();
    dsheets.fill(undefined);
  } else if (previousMode === 'desk') {
    book.appendChild(cardtab);                 // rescue the card before its leaf is removed
    book.querySelectorAll('.leaf').forEach(el => el.remove());
    leaves.fill(undefined);
  }

  if (mode === 'phone') {
    if (previousMode !== 'phone') dk = state.s < 0 ? 0 : 2 * state.s + 1 + (state.side === 'R' ? 1 : 0);
    const hashId = location.hash.slice(1);
    const target = state.s >= 0 ? state.s : SECTIONS[hashId] ? rangeOf(hashId)[0] : 0;
    if (previousMode === null && SECTIONS[hashId]) dk = 2 * target + 1;
    ensureSectionMarkup(SPREADS[target].section, target, target, previousMode === null ? 0 : 1);
    dsheets.forEach((el, i) => {
      if (!el) return;
      el.style.transition = 'none';
      el.classList.toggle('flipped', i < dk);
      el.style.zIndex = i < dk ? i + 2 : dsheets.length + 2 - i;
    });
    seatCard();
    updateSheetWindow(true);
  } else {
    if (previousMode === 'phone') {
      state.s = dk === 0 ? -1 : Math.floor((dk - 1) / 2);
      state.side = dk > 0 && dk % 2 === 0 ? 'R' : 'L';
    }
    const hashId = location.hash.slice(1);
    const target = state.s >= 0 ? state.s : SECTIONS[hashId] ? rangeOf(hashId)[0] : 0;
    ensureSectionMarkup(SPREADS[target].section, target, target, previousMode === null ? 0 : 1);
    leaves.forEach(l => {
      if (!l) return;
      l.el.classList.toggle('flipped', isFlipped(l.j, state.s));
      l.el.style.zIndex = isFlipped(l.j, state.s) ? l.j + 2 : N + 2 - l.j;
    });
    book.classList.toggle('open', state.s >= 0);
    stage.style.transform = `translateX(${shiftFor(state.s, state.side)}rem)`;
    placeContactHeader(false);
    updateDesktopImages(state.s);
  }
  pagesIn = mode;
  updateUI();
}
deckEl.addEventListener('click', e => {
  if ($('#tabbar').classList.contains('open')) {
    setMenuOpen(false);
    return;
  }
  if (e.target.closest('a,button,input,textarea,label,.cardstack,[data-action]')) return;
  if (dk > 0 && e.clientY / innerHeight < .18) prev(); else next();
});
const tabbar = $('#tabbar');
const menuButton = $('#menu-btn');
function setMenuOpen(open, returnFocus = false) {
  tabbar.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});
document.addEventListener('click', e => {
  if (!tabbar.classList.contains('open')) return;
  if (menuButton.contains(e.target)) return;
  setMenuOpen(false);
});
function updatePhoneUI() {
  const sec = deckSection();
  document.querySelectorAll('#tabbar [data-sec]').forEach(b => b.setAttribute('aria-current', b.dataset.sec === sec ? 'true' : 'false'));
  const isClosed = dk === 0;
  $('#controls').dataset.state = isClosed ? 'closed' : 'open';
  $('#hint').textContent = isClosed
    ? 'Tap the cover to open my portfolio'
    : 'Tab the bottom edge to turn pages, or tap the top edge to go back';
  if (dk === 0) return;
}

/* ===== State ===== */
const FLIP = reduced ? 1 : 950, STAG = reduced ? 0 : 120, BAND = reduced ? 0 : 480;
const state = { s: -1, side: 'L' };
const sectionOf = s => s < 0 ? null : SPREADS[s].section;
let desktopImageCull;
const deckSectionIdFor = index => index === 0 ? 'welcome' : SPREADS[Math.floor((index - 1) / 2)]?.section || 'welcome';
function pruneDesktopLeaves(spread) {
  const first = Math.max(0, spread - 1), last = Math.min(SPREADS.length - 1, spread + 1);
  pageNodes.forEach((node, key) => {
    const pageSpread = Number(key.slice(0, key.indexOf(':')));
    if (pageSpread >= first && pageSpread <= last) return;
    const owner = node.closest('.leaf');
    const leaf = leaves.find(item => item && item.el === owner);
    if (leaf) leaf.pagesReady = false;
    releaseImagesIn(node);
    node.remove();
  });
}

function updateDesktopImages(spread, delay = 0) {
  const faces = spread < 0
    ? [leaves[0]?.el.querySelector('.face.front')]
    : [leaves[spread]?.el.querySelector('.face.back'), leaves[spread + 1]?.el.querySelector('.face.front')];
  const activeFaces = faces.filter(Boolean);
  activeFaces.forEach(loadImagesIn);
  clearTimeout(desktopImageCull);
  desktopImageCull = setTimeout(() => {
    book.querySelectorAll('img[src][data-src]').forEach(img => {
      if (!activeFaces.some(face => face.contains(img))) img.removeAttribute('src');
    });
  }, delay);
}

function layout() {
  const vw = window.innerWidth, vh = window.innerHeight;
  const nextMode = vw <= 760 ? 'phone' : 'desk';
  if (nextMode !== 'phone' && tabbar.classList.contains('open')) setMenuOpen(false);
  let S, cy;
  if (nextMode === 'desk') {
    const availH = vh - 70;
    S = Math.min(vw / 1120, availH / 960, 1.25);
    cy = availH / 2 + 26 * S;
  } else {
    const availH = vh - 128;
    S = Math.min((vw - 40) / 500, (availH - 60) / 830);
    cy = availH / 2 + 30;
  }

  mode = nextMode;
  root.dataset.mode = mode;
  if (mode !== pagesIn) rehome();
  scaler.style.transform = dscaler.style.transform = `translate(0rem,${cy / 16}rem) scale(${S})`;
}
const shiftFor = (s, side) => s < 0 ? -244 / 16 : mode === 'phone' ? (side === 'L' ? 238 / 16 : -238 / 16) : 0;

function prepareDesktopChange(t, opts) {
  const from = { s: state.s, side: state.side };
  if (t.s === from.s && t.side === from.side) return null;
  const firstSpread = opts.fromHash ? t.s : Math.max(0, from.s < 0 ? 0 : Math.min(from.s, t.s));
  const lastSpread = opts.fromHash ? t.s : Math.max(from.s, t.s);
  return { t, opts, from, firstSpread, lastSpread };
}
function ensureDesktopMarkup(change) {
  ensureMarkup(SPREADS[change.t.s < 0 ? 0 : change.t.s].section, change.firstSpread, change.lastSpread);
}
function updateDesktopState(change) {
  const { t } = change;
  state.s = t.s; state.side = t.side;
  const coverOpen = $('.cover-open-trigger');
  if (coverOpen) coverOpen.style.pointerEvents = t.s < 0 ? 'auto' : 'none';
}
function prepareLeafTransition(change) {
  const { t, opts, from } = change;
  const instant = !!opts.instant;
  const forward = t.s > from.s;
  const opening = from.s < 0 && t.s >= 0, closing = from.s >= 0 && t.s < 0;
  const changing = leaves.filter(l => l && isFlipped(l.j, t.s) !== isFlipped(l.j, from.s)).sort((a, b) => forward ? a.j - b.j : b.j - a.j);
  const lead = instant ? 0 : opening ? BAND : 0;
  const dur = instant ? 0 : opts.unit ? 1000 : FLIP;
  return { t, opts, instant, opening, closing, changing, lead, dur, lastDelay: lead, coverDelay: 0 };
}
function flipLeaves(transition) {
  const { t, opts, instant, changing, lead, dur } = transition;
  changing.forEach((l, i) => {
    const d = instant ? 0 : lead + (opts.unit ? 0 : i * STAG);
    transition.lastDelay = Math.max(transition.lastDelay, d);
    if (l.j === 0) transition.coverDelay = d;
    l.el.style.setProperty('--vd', (d + dur / 2) + 'ms');     // when this leaf's hidden face switches off (halfway through its turn)
    l.el.style.transition = `transform ${dur}ms var(--ease) ${d}ms, z-index 0s linear ${d + dur / 2}ms`;
    l.el.classList.toggle('flipped', isFlipped(l.j, t.s));
    if (!instant && !reduced) l.el.querySelectorAll('.shade').forEach(sh =>
      sh.animate([{ opacity: 0 }, { opacity: .3, offset: .5 }, { opacity: 0 }], { duration: dur, delay: d, easing: 'linear' }));
  });
}
function updateDesktopMotion(change, transition) {
  const { t, opts } = change;
  const { instant, opening, closing, coverDelay, dur, lastDelay } = transition;
  const sd = (opening || closing) ? coverDelay : 0;
  stage.style.transition = `transform ${dur}ms var(--ease) ${sd}ms`;
  stage.style.transform = `translateX(${shiftFor(t.s, t.side)}rem)`;
  book.style.setProperty('--cdelay', sd + 'ms');
  const bd = instant ? 0 : closing ? Math.max(0, lastDelay + FLIP - 250) : 0;
  const bt = instant ? 0 : 560;
  band.style.transition = `transform ${bt}ms var(--ease) ${bd}ms, z-index 0s linear ${opening ? bd + bt : bd}ms`;
  book.classList.toggle('open', t.s >= 0);
}
function scheduleDesktopCull(change, transition) {
  const { t, opts } = change;
  const { instant, lead, changing, dur, lastDelay } = transition;
  const imageDelay = instant ? 0 : lead + Math.max(0, changing.length - 1) * (opts.unit ? 0 : STAG) + dur;
  updateDesktopImages(t.s, imageDelay);
  setTimeout(() => pruneDesktopLeaves(state.s), Math.max(1700, lastDelay + dur + 100));
}
function setState(t, opts = {}) {
  const change = prepareDesktopChange(t, opts);
  if (!change) return;
  ensureDesktopMarkup(change);
  updateDesktopState(change);
  const transition = prepareLeafTransition(change);
  updateZIndex(leaves, leaf => leaf?.el, leaf => isFlipped(leaf.j, change.t.s) ? leaf.j + 2 : N + 2 - leaf.j);
  flipLeaves(transition);
  updateDesktopMotion(change, transition);
  scheduleDesktopCull(change, transition);
  updateUI();
  syncHistory(opts);
}

function updateUI() {
  if (mode === 'phone') return updatePhoneUI();
  const sec = sectionOf(state.s);
  book.classList.toggle('at-contact', sec === 'contact');
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('current', t.dataset.action === 'section:' + sec));

  document.querySelectorAll('#tabbar [data-sec]').forEach(b => b.setAttribute('aria-current', b.dataset.sec === sec ? 'true' : 'false'));
  const ctl = $('#controls');
  ctl.dataset.state = state.s < 0 ? 'closed' : 'open';
  $('#hint').textContent = state.s < 0
    ? 'Click the cover to open my portfolio'
    : 'Click the page corners to turn pages, or use the arrow keys';
  document.querySelectorAll('.turn').forEach(button => { button.style.pointerEvents = 'none'; });
  if (state.s < 0) { book.classList.remove('can-next', 'can-prev'); return; }
  const phone = mode === 'phone';
  const lastSpread = SPREADS.length - 1;
  const cp = phone ? (state.side === 'R' || state.s > 0) : state.s > 0;
  const cn = phone ? (state.side === 'L' || state.s < lastSpread) : true;
  book.classList.toggle('can-next', cn); book.classList.toggle('can-prev', cp);
  if (!phone) {
    const previousCorner = leaves[state.s]?.el.querySelector('.face.back .turn.prev');
    const nextCorner = leaves[state.s + 1]?.el.querySelector('.face.front .turn.next');
    if (cp && previousCorner) previousCorner.style.pointerEvents = 'auto';
    if (cn && nextCorner) nextCorner.style.pointerEvents = 'auto';
  }
}

/* ===== Navigation ===== */
let lastHash = null;
function syncHash() {
  const id = (mode === 'phone' ? deckSection() : sectionOf(state.s)) || 'cover';
  lastHash = id;
    try {
    const open = id !== 'cover', st = history.state || {};
    if (!open && st.open) {
      if (st.pushed) { history.back(); return; }                                   // we added this entry, so step back over it
      history.replaceState({ open: false }, '', '#cover'); return;                 // page was loaded on a section: don't leave the site
    }
    if (open && !st.open) history.pushState({ open: true, pushed: true }, '', '#' + id);   // opening adds ONE history entry
    else if (location.hash.slice(1) !== id) history.replaceState({ open, pushed: st.pushed }, '', '#' + id);   // page turns just rewrite it
  } catch (e) {}


}
function syncHistory(opts) {
  if (!opts.fromHash) syncHash();
}
function goSection(id, opts) {
  const sec = SECTIONS[id];
  if (!sec) return;
  if (!sec.ready) { toast(sec.label + ' is coming in the next milestone.'); return; }
  if (mode === 'phone') { deckApply(2 * rangeOf(id)[0] + 1, opts); return; }
  setState({ s: rangeOf(id)[0], side: 'L' }, opts);
}
const goHome = opts => mode === 'phone' ? deckApply(0, opts) : setState({ s: -1, side: 'L' }, opts);

function next() {
  if (mode === 'phone') {
    if (dk >= dsheets.length - 1) { goHome(); return; }          // last page: close the book
    deckApply(dk + 1); return;
  }
  if (state.s < 0) return;
  if (state.s < SPREADS.length - 1) setState({ s: state.s + 1, side: 'L' });
  else goHome();
}


function prev() {
  if (mode === 'phone') { deckApply(Math.max(dk - 1, 0)); return; }

  if (state.s < 0) return;
  if (mode === 'phone' && state.side === 'R') setState({ s: state.s, side: 'L' });
  else if (state.s > 0) setState({ s: state.s - 1, side: mode === 'phone' ? 'R' : 'L' });
}
function fromHash(instant) {
  let h = ''; try { h = location.hash.slice(1); } catch (e) {}
  if (h === lastHash) return;
  lastHash = h;
  if (SECTIONS[h] && SECTIONS[h].ready) goSection(h, { instant, fromHash: true });
  else if (  (mode === 'phone' ? dk > 0 : state.s >= 0) && (h === '' || h === 'cover')) goHome({ instant, fromHash: true });

}

/* ===== Toast, links, copy ===== */
let toastT;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2800);
}
const initializedLinks = new WeakSet();
function initializeLink(a) {
  if (initializedLinks.has(a)) return;
  initializedLinks.add(a);
  const url = CONFIG[a.dataset.link];
  if (!url) return;
  a.href = url;
  if (a.dataset.link === 'cvUrl') {
    a.download = url.split('/').pop();
    a.removeAttribute('target');
    return;
  }
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
}
document.querySelectorAll('[data-link]').forEach(initializeLink);
document.addEventListener('click', e => {
  const lk = e.target.closest('[data-link]');
  if (lk && !CONFIG[lk.dataset.link]) { e.preventDefault(); toast('Add this link in CONFIG at the top of the script.'); return; }
  const a = e.target.closest('[data-action]');
  if (!a) return;
  const act = a.dataset.action;
  if (act === 'home') goHome();
  else if (act === 'next') next();
  else if (act === 'prev') prev();
  else if (act === 'another') resetEnvelope();
  else if (act === 'copy-email') copyEmail();
  else if (act.startsWith('section:')) goSection(act.slice(8));
});
function copyEmail() {
  const sel = () => { const r = document.createRange(); r.selectNodeContents($('#card-mail')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
  try {
    navigator.clipboard.writeText(CONFIG.email).then(() => toast('Email copied'), () => { sel(); toast('Press Ctrl/Cmd+C to copy the email'); });
  } catch (e) { sel(); toast('Press Ctrl/Cmd+C to copy the email'); }
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && tabbar.classList.contains('open')) {
    setMenuOpen(false, true);
    return;
  }
  if (e.target.closest('input,textarea')) return;
  if (e.key === 'ArrowRight') next();
  else if (e.key === 'ArrowLeft') prev();
  else if (e.key === 'Escape' && state.s >= 0) goHome();
});
let sx = 0, sy = 0;
document.addEventListener('pointerdown', e => { sx = e.clientX; sy = e.clientY; });
document.addEventListener('pointerup', e => {
  if (mode !== 'phone' || e.target.closest('input,textarea,#tabbar,#navbar,#controls')) return;
  const dx = e.clientX - sx, dy = e.clientY - sy;
  if (Math.abs(dx) > 50 && Math.abs(dy) < Math.abs(dx) * .7) dx < 0 ? next() : prev();
});

/* ===== Envelope ===== */
let form, zone, env, flap;
let sending = false, anims = [];
const D = n => reduced ? 1 : n;
const run = (el, kf, o) => { const a = el.animate(kf, { fill: 'forwards', ...o }); anims.push(a); return a.finished.catch(() => {}); };
function bindContactForm() {
  if (form) return;
  form = $('#contact-form');
  if (!form) return;
  zone = $('#envzone'); env = $('#env'); flap = $('#flap');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (sending) return;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    sending = true;
    if (CONFIG.contactEndpoint) fetch(CONFIG.contactEndpoint, { method: 'POST', body: new FormData(form), mode: 'no-cors' }).catch(() => {});
    $('#demo').textContent = CONFIG.contactEndpoint ? '' : 'Demo mode: no form endpoint is set, so nothing was actually sent.';
    await run(form, [{ transform: 'translateY(0)', opacity: 1 }, { transform: 'translateY(21.875rem)', opacity: 1, offset: .85 }, { transform: 'translateY(23.75rem)', opacity: 1 }], { duration: D(1200), easing: 'cubic-bezier(.6,0,.3,1)' });
    setTimeout(() => { flap.style.zIndex = 5; }, D(400));
    await run(flap, [{ transform: 'rotateX(0)' }, { transform: 'rotateX(180deg)' }], { duration: D(800), easing: 'ease-in-out' });
    env.classList.add('fly');
    await new Promise(r => setTimeout(r, D(500)));
    zone.classList.add('sent');
    env.classList.remove('fly');
  });
}
function resetEnvelope() {
  if (!form) return;
  env.classList.remove('fly');
  anims.forEach(a => a.cancel()); anims = [];
  flap.style.zIndex = ''; form.reset(); zone.classList.remove('sent'); sending = false;
  zone.classList.add('returning');
env.animate([{ transform: 'translateY(47.5rem)' }, { transform: 'translateY(0)' }], { duration: D(900), easing: 'cubic-bezier(.2,.8,.3,1)' });
setTimeout(() => zone.classList.remove('returning'), D(900));}


/* ===== Task cards (click the top card to send it to the back) ===== */
const ROT = ['rotate(2deg)', 'rotate(-1deg)', 'rotate(1.5deg)', 'rotate(3deg)', 'rotate(-2deg)'];
const initializedPages = new WeakSet();
function initializePage(pageNode) {
  if (initializedPages.has(pageNode)) return;
  initializedPages.add(pageNode);
  pageNode.querySelectorAll('[data-link]').forEach(initializeLink);
  pageNode.querySelectorAll('.cardstack').forEach(st => {
    st.append(...[...st.children].reverse());
    [...st.children].forEach((c, i) => c.style.setProperty('--rotation', ROT[i % ROT.length]));
  });
}
document.addEventListener('click', e => {
  const st = e.target.closest('.cardstack');
  if (!st || st.dataset.busy || st.children.length < 2) return;
  const top = st.lastElementChild;
  if (reduced) { st.prepend(top); return; }
  st.dataset.busy = '1';
  top.classList.add('flip');
  top.addEventListener('animationend', () => { top.classList.remove('flip'); st.prepend(top); delete st.dataset.busy; }, { once: true });
});


/* ===== Boot ===== */
$('#ct-name').textContent = CONFIG.name; $('#ct-role').textContent = CONFIG.role; $('#ct-mail').textContent = CONFIG.email;

layout();
stage.style.transform = `translateX(${shiftFor(-1, 'L')}rem)`;
updateUI();
addEventListener('resize', () => {
  layout();
  scaler.classList.add('no-anim');
  stage.style.transform = `translateX(${shiftFor(state.s, state.side)}rem)`;
  updateUI();
  requestAnimationFrame(() => scaler.classList.remove('no-anim'));
});

addEventListener('popstate', () => fromHash(false));            // Back / Forward move the notebook
addEventListener('hashchange', () => fromHash(false));          // typed #section in the address bar
try { history.replaceState({ open: location.hash.slice(1) in SECTIONS, pushed: history.state && history.state.pushed }, '', location.href); } catch (e) {}
fromHash(true);

})();
