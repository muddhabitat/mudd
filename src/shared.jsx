// Shared tokens + placeholder utilities for all three Mudd Habitat variations.

const MUDD = {
  // Brand palette
  indigo: '#22223b',
  grape: '#4a4e69',
  lilac: '#9a8c98',
  almond: '#c9ada7',
  parchment: '#f2e9e4',
  // tagline & contact
  tagline: 'Residential Rewilding',
  email: 'cole@muddhabitat.com',
  phone: '206-954-2653',
  phoneDisplay: '(206) 954-2653',
  instagram: '@muddhabitat',
  area: 'Portland Metro · Oregon',
  license: 'LCB #100886',
  heroSubtitle: 'Landscape design, install, and stewardship for Portland gardens that look like they grew there.',
  services: ['Landscape Design', 'Install', 'Care', 'Consultation'],
  // Project seed data
  projects: [
  { title: 'Rock Creek Meadow', suburb: 'NW Portland', type: 'Full Install', year: '2024', tag: 'project', img: 'assets/proj-1.jpg' },
  { title: 'St. Johns Juniper Wall', suburb: 'N Portland', type: 'Hardscape + Planting', year: '2026', tag: 'project', img: 'assets/proj-2.jpg' },
  { title: 'Redwood Screening', suburb: '', type: 'Carpentry', year: '2026', tag: 'project', img: 'assets/proj-3.jpg' },
  { title: 'Plant Care', suburb: '', type: 'Health · Ornamental · Education', year: '', tag: 'project', img: 'assets/proj-forestpark.jpg' },
  { title: 'Design + Install', suburb: '', type: 'Meadow · Forest · Water Gardens · Hardscape', year: '', tag: 'project', img: 'assets/proj-watergardens.jpg' },
  { title: 'Consultation', suburb: '', type: "Let's Talk!", year: '', tag: 'project', img: 'assets/proj-lakeoswego.jpg' }],

  showTestimonials: false,
  showProjectFilters: false,
  testimonials: [
  {
    quote: "Cole turned a steep, mossy mess into the part of our house we actually live in. The CAD drawings felt like seeing the future.",
    name: 'Hannah & Drew M.',
    where: 'Alameda · NE Portland'
  },
  {
    quote: "Best contractor experience we've had in fifteen years of remodeling. He listens, then he draws, then he builds — exactly in that order.",
    name: 'Tomás R.',
    where: 'Lake Oswego'
  },
  {
    quote: "Mudd Habitat replaced our front lawn with a native meadow that bees actually visit. Neighbors keep stopping to ask who did it.",
    name: 'Priya K.',
    where: 'Mt. Tabor · SE Portland'
  }]

};

// Striped SVG placeholder — sub for real photography later.
function MuddPlaceholder({ label = 'photo', tone = 'dark', style, children, kind = 'photo' }) {
  // Tone-driven stripes that match the palette
  const palettes = {
    dark: { bg: '#1c1d2e', stripe: 'rgba(242,233,228,0.04)', text: 'rgba(242,233,228,0.55)' },
    grape: { bg: '#3a3d56', stripe: 'rgba(242,233,228,0.05)', text: 'rgba(242,233,228,0.7)' },
    almond: { bg: '#c9ada7', stripe: 'rgba(34,34,59,0.06)', text: 'rgba(34,34,59,0.55)' },
    parchment: { bg: '#ece2da', stripe: 'rgba(34,34,59,0.05)', text: 'rgba(34,34,59,0.55)' },
    lilac: { bg: '#9a8c98', stripe: 'rgba(242,233,228,0.08)', text: 'rgba(242,233,228,0.85)' },
    sepia: { bg: '#3d3527', stripe: 'rgba(242,233,228,0.04)', text: 'rgba(242,233,228,0.6)' }
  };
  const p = palettes[tone] || palettes.dark;
  const id = 'sl-' + Math.random().toString(36).slice(2, 8);
  const isCad = kind === 'cad';
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: p.bg, ...style }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, display: 'block' }} preserveAspectRatio="none">
        <defs>
          <pattern id={id} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="14" stroke={p.stripe} strokeWidth="6" />
          </pattern>
          {isCad &&
          <pattern id={id + '-cad'} width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M0 0H32V32" fill="none" stroke={p.stripe} strokeWidth="1" />
            </pattern>
          }
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
        {isCad && <rect width="100%" height="100%" fill={`url(#${id}-cad)`} />}
      </svg>
      {children ||
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em',
        color: p.text, textTransform: 'uppercase', textAlign: 'center', padding: 16
      }}>
          {isCad ? '◊ ' : '▮ '}{label}
        </div>
      }
    </div>);

}

// Tiny mark — geometric "M" / land form. Used wherever a real logo isn't loaded.
function MuddMark({ size = 28, color = '#f2e9e4' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M3 24 L9 12 L13 19 L16 14 L19 19 L23 12 L29 24 Z" fill={color} />
      <circle cx="16" cy="6" r="2" fill={color} />
    </svg>);

}

// Service-area map of greater Portland — abstract, hand-drawn-feeling
function PortlandMap({ width = 600, height = 360, theme = 'dark', showLabels = true }) {
  const themes = {
    dark: { bg: '#22223b', land: '#2b2d4a', river: '#4a4e69', label: '#c9ada7', pin: '#f2e9e4' },
    parchment: { bg: 'transparent', land: '#e4d9d2', river: '#9a8c98', label: '#22223b', pin: '#22223b' },
    grape: { bg: '#4a4e69', land: '#3a3d56', river: '#9a8c98', label: '#f2e9e4', pin: '#c9ada7' }
  };
  const t = themes[theme] || themes.dark;
  const pins = [
  { x: 360, y: 150, label: 'NW Portland · Forest Park' },
  { x: 410, y: 165, label: 'NE Portland · Alameda' },
  { x: 425, y: 215, label: 'SE Portland · Mt. Tabor' },
  { x: 395, y: 245, label: 'Sellwood' },
  { x: 410, y: 290, label: 'Lake Oswego' },
  { x: 330, y: 180, label: 'NW Hills' }];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ display: 'block' }}>
      {t.bg !== 'transparent' && <rect width={width} height={height} fill={t.bg} />}
      {/* Subtle land mass */}
      <path d="M 40 80 Q 200 40 400 90 Q 560 130 590 220 Q 560 320 400 330 Q 200 340 60 290 Q 20 200 40 80 Z"
      fill={t.land} opacity="0.55" />
      {/* Willamette + Columbia */}
      <path d="M 380 30 Q 395 90 400 150 Q 405 220 420 300 Q 425 340 430 360"
      stroke={t.river} strokeWidth="6" fill="none" opacity="0.85" strokeLinecap="round" />
      <path d="M 100 110 Q 250 130 380 120 Q 500 115 600 140"
      stroke={t.river} strokeWidth="5" fill="none" opacity="0.7" strokeLinecap="round" />
      {/* Grid lines */}
      {Array.from({ length: 8 }).map((_, i) =>
      <line key={'h' + i} x1="0" y1={i * 45} x2={width} y2={i * 45} stroke={t.label} strokeWidth="0.5" opacity="0.06" />
      )}
      {Array.from({ length: 14 }).map((_, i) =>
      <line key={'v' + i} x1={i * 45} y1="0" x2={i * 45} y2={height} stroke={t.label} strokeWidth="0.5" opacity="0.06" />
      )}
      {/* Pins */}
      {pins.map((p, i) =>
      <g key={i}>
          <circle cx={p.x} cy={p.y} r="14" fill={t.pin} opacity="0.15" />
          <circle cx={p.x} cy={p.y} r="5" fill={t.pin} />
          {showLabels && <text x={p.x + 12} y={p.y + 4} fill={t.label} fontSize="11" fontFamily="var(--font-mono)" letterSpacing="0.06em">
            {p.label}
          </text>}
        </g>
      )}
      {showLabels && <text x="40" y={height - 20} fill={t.label} fontSize="10" fontFamily="var(--font-mono)" letterSpacing="0.2em" opacity="0.7">
        ◊ SERVICE AREA — PORTLAND METRO
      </text>}
    </svg>);

}

// Logo-upload slot (until they drop in a real logo)
function LogoSlot({ width = 140, height = 40, color = '#f2e9e4', variant = 'wordmark' }) {
  if (variant === 'mark') {
    return (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
        <MuddMark size={28} color={color} />
        <span style={{ color, fontWeight: 600, letterSpacing: '0.04em', fontSize: 14 }}>MUDD HABITAT</span>
      </div>);

  }
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <MuddMark size={26} color={color} />
      <div style={{ color, lineHeight: 1, fontFamily: 'inherit' }}>
        <div style={{ letterSpacing: '0.02em', fontSize: "19px", fontFamily: "Helvetica", fontWeight: "700" }}>MUDD HABITAT LLC</div>
        <div style={{ letterSpacing: '0.3em', opacity: 0.7, marginTop: 4, fontSize: "8px" }}>LICENSED · BONDED · INSURED</div>
      </div>
    </div>);

}

Object.assign(window, { MUDD, MuddPlaceholder, MuddMark, PortlandMap, LogoSlot });

// Logo reveal: splits the logo PNG into its separate shapes (connected opaque regions)
// and fades each in, one after another. Falls back to a single fade if splitting fails.
function LogoReveal({ src, alt, className, style, lag = 0.5, fade = 0.9 }) {
  const wrap = React.useRef(null);
  const [split, setSplit] = React.useState(null);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setSplit('none'); return; }
    const img = new Image();
    img.onload = () => {
      try {
        const w = img.naturalWidth, h = img.naturalHeight;
        const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
        const ctx = cv.getContext('2d'); ctx.drawImage(img, 0, 0);
        const src = ctx.getImageData(0, 0, w, h).data;
        const label = new Int32Array(w * h).fill(-1);
        const comps = [];
        const stack = new Int32Array(w * h);
        for (let p = 0; p < w * h; p++) {
          if (label[p] !== -1 || src[p * 4 + 3] < 8) continue;
          const id = comps.length; let sp = 0, n = 0, sy = 0, minY = h, minX = w, maxY = 0, maxX = 0;
          stack[sp++] = p; label[p] = id;
          while (sp) {
            const q = stack[--sp]; n++;
            const x = q % w, y = (q / w) | 0; sy += y; if (y < minY) minY = y; if (x < minX) minX = x; if (y > maxY) maxY = y; if (x > maxX) maxX = x;
            const nb = [x > 0 ? q - 1 : -1, x < w - 1 ? q + 1 : -1, y > 0 ? q - w : -1, y < h - 1 ? q + w : -1];
            for (const r of nb) if (r >= 0 && label[r] === -1 && src[r * 4 + 3] >= 8) { label[r] = id; stack[sp++] = r; }
          }
          comps.push({ id, n, cy: sy / n, minY, minX, maxY, maxX });
        }
        const maxN = Math.max(...comps.map((c) => c.n));
        const big = comps.filter((c) => c.n >= maxN * 0.02);
        // random order each load (Fisher–Yates); the name block is then moved to the end
        for (let i = big.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [big[i], big[j]] = [big[j], big[i]]; }
        // the name block (largest shape) always comes in last
        const nameIdx = big.findIndex((c) => c.n === maxN);
        if (nameIdx > -1) big.push(big.splice(nameIdx, 1)[0]);
        const order = new Map(big.map((c, i) => [c.id, i]));
        // small islands (letter counters, specks) join the big shape whose box contains them, else the nearest
        for (const c of comps) {
          if (order.has(c.id)) continue;
          const cx = (c.minX + c.maxX) / 2, cy = (c.minY + c.maxY) / 2;
          let host = big.find((b) => c.minX >= b.minX && c.maxX <= b.maxX && c.minY >= b.minY && c.maxY <= b.maxY && b.n > c.n);
          if (!host) host = big.reduce((best, b) => { const d = Math.hypot((b.minX + b.maxX) / 2 - cx, (b.minY + b.maxY) / 2 - cy); return d < best.d ? { b, d } : best; }, { b: big[0], d: Infinity }).b;
          order.set(c.id, order.get(host.id));
        }
        const layers = big.map(() => new ImageData(w, h));
        const last = big.length - 1;
        for (let p = 0; p < w * h; p++) {
          const l = label[p]; if (l < 0 && src[p * 4 + 3] === 0) continue;
          const k = l >= 0 ? order.get(l) : last;
          const d = layers[k].data, o = p * 4;
          d[o] = src[o]; d[o + 1] = src[o + 1]; d[o + 2] = src[o + 2]; d[o + 3] = src[o + 3];
        }
        const urls = layers.map((id) => { const c = document.createElement('canvas'); c.width = w; c.height = h; c.getContext('2d').putImageData(id, 0, 0); return c.toDataURL(); });
        setSplit(urls);
      } catch (e) { setSplit('whole'); }
    };
    img.onerror = () => setSplit('whole');
    img.src = src;
  }, [src]);
  React.useEffect(() => {
    if (split === null) return;
    const total = Array.isArray(split) ? (split.length - 1) * lag + fade * 3 : split === 'whole' ? fade : 0;
    window.__muddLogoTotal = total;
    window.dispatchEvent(new CustomEvent('mudd:logo-timing', { detail: total }));
  }, [split]);
  const layer = { position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0, animation: `logoFadeIn ${fade}s ease forwards` };
  return (
    <div ref={wrap} style={{ position: 'relative', lineHeight: 0 }}>
      <style>{'@keyframes logoFadeIn{from{opacity:0}to{opacity:1}}'}</style>
      <img src={src} alt={alt} className={className}
        style={{ ...style, opacity: split === 'none' ? 1 : 0, animation: split === 'whole' ? `logoFadeIn ${fade}s ease forwards` : 'none' }} />
      {Array.isArray(split) && split.map((u, i) =>
      <img key={i} src={u} alt="" aria-hidden="true" style={{ ...layer, animationDelay: `${i * lag}s`, animationDuration: `${i === split.length - 1 ? fade * 3 : fade}s` }} />
      )}
    </div>);
}
window.LogoReveal = LogoReveal;

// Fades in over the same span as the logo reveal, so both finish together.
function SyncedFadeImg({ style, ...rest }) {
  const [dur, setDur] = React.useState(window.__muddLogoTotal ?? null);
  React.useEffect(() => {
    const on = (e) => setDur(e.detail);
    window.addEventListener('mudd:logo-timing', on);
    return () => window.removeEventListener('mudd:logo-timing', on);
  }, []);
  return <img {...rest} style={{ ...style, opacity: dur === null ? 0 : 1, transition: dur ? `opacity ${dur}s ease-in-out` : 'none' }} />;
}
window.SyncedFadeImg = SyncedFadeImg;
