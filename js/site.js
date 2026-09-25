/* Mudd Habitat — compiled from js/shared.jsx + js/site.jsx. Do not edit by hand; edit the JSX and recompile. */
(function(){
// ---- shared.jsx ----
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MUDD = {
  indigo: '#22223b',
  grape: '#4a4e69',
  lilac: '#9a8c98',
  almond: '#c9ada7',
  parchment: '#f2e9e4',
  tagline: 'Residential Rewilding',
  email: 'cole@muddhabitat.com',
  phone: '206-954-2653',
  phoneDisplay: '(206) 954-2653',
  instagram: '@muddhabitat',
  area: 'Portland Metro · Oregon',
  license: 'LCB #100886',
  heroSubtitle: 'Landscape design, install, and stewardship for Portland gardens that look like they grew there.',
  services: ['Landscape Design', 'Install', 'Care', 'Consultation'],
  projects: [{
    title: 'Rock Creek Meadow',
    suburb: 'NW Portland',
    type: 'Full Install',
    year: '2024',
    tag: 'project',
    img: 'assets/proj-1.jpg'
  }, {
    title: 'St. Johns Juniper Wall',
    suburb: 'N Portland',
    type: 'Hardscape + Planting',
    year: '2026',
    tag: 'project',
    img: 'assets/proj-2.jpg'
  }, {
    title: 'Redwood Screening',
    suburb: '',
    type: 'Carpentry',
    year: '2026',
    tag: 'project',
    img: 'assets/proj-3.jpg'
  }, {
    title: 'Plant Care',
    suburb: '',
    type: 'Health · Ornamental · Education',
    year: '',
    tag: 'project',
    img: 'assets/proj-forestpark.jpg'
  }, {
    title: 'Design + Install',
    suburb: '',
    type: 'Meadow · Forest · Water Gardens · Hardscape',
    year: '',
    tag: 'project',
    img: 'assets/proj-watergardens.jpg'
  }, {
    title: 'Consultation',
    suburb: '',
    type: "Let's Talk!",
    year: '',
    tag: 'project',
    img: 'assets/proj-lakeoswego.jpg'
  }],
  showTestimonials: false,
  showProjectFilters: false,
  testimonials: [{
    quote: "Cole turned a steep, mossy mess into the part of our house we actually live in. The CAD drawings felt like seeing the future.",
    name: 'Hannah & Drew M.',
    where: 'Alameda · NE Portland'
  }, {
    quote: "Best contractor experience we've had in fifteen years of remodeling. He listens, then he draws, then he builds — exactly in that order.",
    name: 'Tomás R.',
    where: 'Lake Oswego'
  }, {
    quote: "Mudd Habitat replaced our front lawn with a native meadow that bees actually visit. Neighbors keep stopping to ask who did it.",
    name: 'Priya K.',
    where: 'Mt. Tabor · SE Portland'
  }]
};
function MuddPlaceholder({
  label = 'photo',
  tone = 'dark',
  style,
  children,
  kind = 'photo'
}) {
  const palettes = {
    dark: {
      bg: '#1c1d2e',
      stripe: 'rgba(242,233,228,0.04)',
      text: 'rgba(242,233,228,0.55)'
    },
    grape: {
      bg: '#3a3d56',
      stripe: 'rgba(242,233,228,0.05)',
      text: 'rgba(242,233,228,0.7)'
    },
    almond: {
      bg: '#c9ada7',
      stripe: 'rgba(34,34,59,0.06)',
      text: 'rgba(34,34,59,0.55)'
    },
    parchment: {
      bg: '#ece2da',
      stripe: 'rgba(34,34,59,0.05)',
      text: 'rgba(34,34,59,0.55)'
    },
    lilac: {
      bg: '#9a8c98',
      stripe: 'rgba(242,233,228,0.08)',
      text: 'rgba(242,233,228,0.85)'
    },
    sepia: {
      bg: '#3d3527',
      stripe: 'rgba(242,233,228,0.04)',
      text: 'rgba(242,233,228,0.6)'
    }
  };
  const p = palettes[tone] || palettes.dark;
  const id = 'sl-' + Math.random().toString(36).slice(2, 8);
  const isCad = kind === 'cad';
  return React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: p.bg,
      ...style
    }
  }, React.createElement("svg", {
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'block'
    },
    preserveAspectRatio: "none"
  }, React.createElement("defs", null, React.createElement("pattern", {
    id: id,
    width: "14",
    height: "14",
    patternUnits: "userSpaceOnUse",
    patternTransform: "rotate(35)"
  }, React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "14",
    stroke: p.stripe,
    strokeWidth: "6"
  })), isCad && React.createElement("pattern", {
    id: id + '-cad',
    width: "32",
    height: "32",
    patternUnits: "userSpaceOnUse"
  }, React.createElement("path", {
    d: "M0 0H32V32",
    fill: "none",
    stroke: p.stripe,
    strokeWidth: "1"
  }))), React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: `url(#${id})`
  }), isCad && React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: `url(#${id}-cad)`
  })), children || React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      color: p.text,
      textTransform: 'uppercase',
      textAlign: 'center',
      padding: 16
    }
  }, isCad ? '◊ ' : '▮ ', label));
}
function MuddMark({
  size = 28,
  color = '#f2e9e4'
}) {
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none"
  }, React.createElement("path", {
    d: "M3 24 L9 12 L13 19 L16 14 L19 19 L23 12 L29 24 Z",
    fill: color
  }), React.createElement("circle", {
    cx: "16",
    cy: "6",
    r: "2",
    fill: color
  }));
}
function PortlandMap({
  width = 600,
  height = 360,
  theme = 'dark',
  showLabels = true
}) {
  const themes = {
    dark: {
      bg: '#22223b',
      land: '#2b2d4a',
      river: '#4a4e69',
      label: '#c9ada7',
      pin: '#f2e9e4'
    },
    parchment: {
      bg: 'transparent',
      land: '#e4d9d2',
      river: '#9a8c98',
      label: '#22223b',
      pin: '#22223b'
    },
    grape: {
      bg: '#4a4e69',
      land: '#3a3d56',
      river: '#9a8c98',
      label: '#f2e9e4',
      pin: '#c9ada7'
    }
  };
  const t = themes[theme] || themes.dark;
  const pins = [{
    x: 360,
    y: 150,
    label: 'NW Portland · Forest Park'
  }, {
    x: 410,
    y: 165,
    label: 'NE Portland · Alameda'
  }, {
    x: 425,
    y: 215,
    label: 'SE Portland · Mt. Tabor'
  }, {
    x: 395,
    y: 245,
    label: 'Sellwood'
  }, {
    x: 410,
    y: 290,
    label: 'Lake Oswego'
  }, {
    x: 330,
    y: 180,
    label: 'NW Hills'
  }];
  return React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    width: "100%",
    height: "100%",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      display: 'block'
    }
  }, t.bg !== 'transparent' && React.createElement("rect", {
    width: width,
    height: height,
    fill: t.bg
  }), React.createElement("path", {
    d: "M 40 80 Q 200 40 400 90 Q 560 130 590 220 Q 560 320 400 330 Q 200 340 60 290 Q 20 200 40 80 Z",
    fill: t.land,
    opacity: "0.55"
  }), React.createElement("path", {
    d: "M 380 30 Q 395 90 400 150 Q 405 220 420 300 Q 425 340 430 360",
    stroke: t.river,
    strokeWidth: "6",
    fill: "none",
    opacity: "0.85",
    strokeLinecap: "round"
  }), React.createElement("path", {
    d: "M 100 110 Q 250 130 380 120 Q 500 115 600 140",
    stroke: t.river,
    strokeWidth: "5",
    fill: "none",
    opacity: "0.7",
    strokeLinecap: "round"
  }), Array.from({
    length: 8
  }).map((_, i) => React.createElement("line", {
    key: 'h' + i,
    x1: "0",
    y1: i * 45,
    x2: width,
    y2: i * 45,
    stroke: t.label,
    strokeWidth: "0.5",
    opacity: "0.06"
  })), Array.from({
    length: 14
  }).map((_, i) => React.createElement("line", {
    key: 'v' + i,
    x1: i * 45,
    y1: "0",
    x2: i * 45,
    y2: height,
    stroke: t.label,
    strokeWidth: "0.5",
    opacity: "0.06"
  })), pins.map((p, i) => React.createElement("g", {
    key: i
  }, React.createElement("circle", {
    cx: p.x,
    cy: p.y,
    r: "14",
    fill: t.pin,
    opacity: "0.15"
  }), React.createElement("circle", {
    cx: p.x,
    cy: p.y,
    r: "5",
    fill: t.pin
  }), showLabels && React.createElement("text", {
    x: p.x + 12,
    y: p.y + 4,
    fill: t.label,
    fontSize: "11",
    fontFamily: "var(--font-mono)",
    letterSpacing: "0.06em"
  }, p.label))), showLabels && React.createElement("text", {
    x: "40",
    y: height - 20,
    fill: t.label,
    fontSize: "10",
    fontFamily: "var(--font-mono)",
    letterSpacing: "0.2em",
    opacity: "0.7"
  }, "\u25CA SERVICE AREA \u2014 PORTLAND METRO"));
}
function LogoSlot({
  width = 140,
  height = 40,
  color = '#f2e9e4',
  variant = 'wordmark'
}) {
  if (variant === 'mark') {
    return React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10
      }
    }, React.createElement(MuddMark, {
      size: 28,
      color: color
    }), React.createElement("span", {
      style: {
        color,
        fontWeight: 600,
        letterSpacing: '0.04em',
        fontSize: 14
      }
    }, "MUDD HABITAT"));
  }
  return React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement(MuddMark, {
    size: 26,
    color: color
  }), React.createElement("div", {
    style: {
      color,
      lineHeight: 1,
      fontFamily: 'inherit'
    }
  }, React.createElement("div", {
    style: {
      letterSpacing: '0.02em',
      fontSize: "19px",
      fontFamily: "Helvetica",
      fontWeight: "700"
    }
  }, "MUDD HABITAT LLC"), React.createElement("div", {
    style: {
      letterSpacing: '0.3em',
      opacity: 0.7,
      marginTop: 4,
      fontSize: "8px"
    }
  }, "LICENSED \xB7 BONDED\xA0\xB7 INSURED")));
}
Object.assign(window, {
  MUDD,
  MuddPlaceholder,
  MuddMark,
  PortlandMap,
  LogoSlot
});
function LogoReveal({
  src,
  alt,
  className,
  style,
  lag = 0.5,
  fade = 0.9
}) {
  const wrap = React.useRef(null);
  const [split, setSplit] = React.useState(null);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setSplit('none');
      return;
    }
    const img = new Image();
    img.onload = () => {
      try {
        const w = img.naturalWidth,
          h = img.naturalHeight;
        const cv = document.createElement('canvas');
        cv.width = w;
        cv.height = h;
        const ctx = cv.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const src = ctx.getImageData(0, 0, w, h).data;
        const label = new Int32Array(w * h).fill(-1);
        const comps = [];
        const stack = new Int32Array(w * h);
        for (let p = 0; p < w * h; p++) {
          if (label[p] !== -1 || src[p * 4 + 3] < 8) continue;
          const id = comps.length;
          let sp = 0,
            n = 0,
            sy = 0,
            minY = h,
            minX = w,
            maxY = 0,
            maxX = 0;
          stack[sp++] = p;
          label[p] = id;
          while (sp) {
            const q = stack[--sp];
            n++;
            const x = q % w,
              y = q / w | 0;
            sy += y;
            if (y < minY) minY = y;
            if (x < minX) minX = x;
            if (y > maxY) maxY = y;
            if (x > maxX) maxX = x;
            const nb = [x > 0 ? q - 1 : -1, x < w - 1 ? q + 1 : -1, y > 0 ? q - w : -1, y < h - 1 ? q + w : -1];
            for (const r of nb) if (r >= 0 && label[r] === -1 && src[r * 4 + 3] >= 8) {
              label[r] = id;
              stack[sp++] = r;
            }
          }
          comps.push({
            id,
            n,
            cy: sy / n,
            minY,
            minX,
            maxY,
            maxX
          });
        }
        const maxN = Math.max(...comps.map(c => c.n));
        const big = comps.filter(c => c.n >= maxN * 0.02);
        for (let i = big.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [big[i], big[j]] = [big[j], big[i]];
        }
        const nameIdx = big.findIndex(c => c.n === maxN);
        if (nameIdx > -1) big.push(big.splice(nameIdx, 1)[0]);
        const order = new Map(big.map((c, i) => [c.id, i]));
        for (const c of comps) {
          if (order.has(c.id)) continue;
          const cx = (c.minX + c.maxX) / 2,
            cy = (c.minY + c.maxY) / 2;
          let host = big.find(b => c.minX >= b.minX && c.maxX <= b.maxX && c.minY >= b.minY && c.maxY <= b.maxY && b.n > c.n);
          if (!host) host = big.reduce((best, b) => {
            const d = Math.hypot((b.minX + b.maxX) / 2 - cx, (b.minY + b.maxY) / 2 - cy);
            return d < best.d ? {
              b,
              d
            } : best;
          }, {
            b: big[0],
            d: Infinity
          }).b;
          order.set(c.id, order.get(host.id));
        }
        const layers = big.map(() => new ImageData(w, h));
        const last = big.length - 1;
        for (let p = 0; p < w * h; p++) {
          const l = label[p];
          if (l < 0 && src[p * 4 + 3] === 0) continue;
          const k = l >= 0 ? order.get(l) : last;
          const d = layers[k].data,
            o = p * 4;
          d[o] = src[o];
          d[o + 1] = src[o + 1];
          d[o + 2] = src[o + 2];
          d[o + 3] = src[o + 3];
        }
        const urls = layers.map(id => {
          const c = document.createElement('canvas');
          c.width = w;
          c.height = h;
          c.getContext('2d').putImageData(id, 0, 0);
          return c.toDataURL();
        });
        setSplit(urls);
      } catch (e) {
        setSplit('whole');
      }
    };
    img.onerror = () => setSplit('whole');
    img.src = src;
  }, [src]);
  React.useEffect(() => {
    if (split === null) return;
    const total = Array.isArray(split) ? (split.length - 1) * lag + fade * 3 : split === 'whole' ? fade : 0;
    window.__muddLogoTotal = total;
    window.dispatchEvent(new CustomEvent('mudd:logo-timing', {
      detail: total
    }));
  }, [split]);
  const layer = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    animation: `logoFadeIn ${fade}s ease forwards`
  };
  return React.createElement("div", {
    ref: wrap,
    style: {
      position: 'relative',
      lineHeight: 0
    }
  }, React.createElement("style", null, '@keyframes logoFadeIn{from{opacity:0}to{opacity:1}}'), React.createElement("img", {
    src: src,
    alt: alt,
    className: className,
    style: {
      ...style,
      opacity: split === 'none' ? 1 : 0,
      animation: split === 'whole' ? `logoFadeIn ${fade}s ease forwards` : 'none'
    }
  }), Array.isArray(split) && split.map((u, i) => React.createElement("img", {
    key: i,
    src: u,
    alt: "",
    "aria-hidden": "true",
    style: {
      ...layer,
      animationDelay: `${i * lag}s`,
      animationDuration: `${i === split.length - 1 ? fade * 3 : fade}s`
    }
  })));
}
window.LogoReveal = LogoReveal;
function SyncedFadeImg({
  style,
  ...rest
}) {
  const [dur, setDur] = React.useState(window.__muddLogoTotal ?? null);
  React.useEffect(() => {
    const on = e => setDur(e.detail);
    window.addEventListener('mudd:logo-timing', on);
    return () => window.removeEventListener('mudd:logo-timing', on);
  }, []);
  return React.createElement("img", _extends({}, rest, {
    style: {
      ...style,
      opacity: dur === null ? 0 : 1,
      transition: dur ? `opacity ${dur}s ease-in-out` : 'none'
    }
  }));
}
window.SyncedFadeImg = SyncedFadeImg;

// ---- site.jsx ----
function ProjectCard({
  p,
  c,
  serif,
  mono
}) {
  return React.createElement("div", null, p.img ? React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4/5',
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, React.createElement("img", {
    src: p.img,
    alt: p.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })) : React.createElement(MuddPlaceholder, {
    label: `${p.type.toLowerCase()} · ${p.suburb.toLowerCase()}`,
    tone: p.tag === 'cad' ? 'parchment' : 'dark',
    kind: p.tag,
    style: {
      width: '100%',
      aspectRatio: '4/5',
      borderRadius: 2
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 16
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: serif,
      fontSize: 26,
      fontWeight: 500,
      lineHeight: 1.1
    }
  }, p.title), (p.suburb || p.type) && React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      letterSpacing: '0.16em',
      color: c.grape,
      marginTop: 6
    }
  }, p.suburb ? p.suburb.toUpperCase() + '  ·  ' : '', p.type.toUpperCase())), p.year && React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      color: c.lilac
    }
  }, p.year)));
}
function InquiryForm({
  c,
  serif,
  mono,
  hair
}) {
  const submit = e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const g = k => (f.get(k) || '').toString().trim();
    const body = [`Name: ${g('name')}`, `Email: ${g('email')}`, `Phone: ${g('phone')}`, `Project location: ${g('location')}`, `Service interest: ${g('service')}`, '', 'Details:', g('details')].join('\n');
    const subject = `Landscape inquiry — ${g('name') || 'new'}${g('location') ? ' · ' + g('location') : ''}`;
    window.location.href = `mailto:${MUDD.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  const fields = [{
    n: 'name',
    l: 'Name',
    p: 'Your name',
    required: true
  }, {
    n: 'email',
    l: 'Email',
    p: 'you@somewhere.com',
    type: 'email',
    required: true
  }, {
    n: 'phone',
    l: 'Phone',
    p: '(optional)',
    type: 'tel'
  }, {
    n: 'location',
    l: 'Project location',
    p: 'Neighborhood or address'
  }];
  return React.createElement("form", {
    onSubmit: submit,
    style: {
      background: '#faf7f5',
      padding: '36px 32px',
      border: hair,
      borderRadius: 2
    }
  }, fields.map(f => React.createElement("div", {
    key: f.n,
    className: "mf-field"
  }, React.createElement("label", {
    className: "mf-label",
    htmlFor: 'f-' + f.n
  }, f.l.toUpperCase()), React.createElement("input", {
    className: "mf-input",
    id: 'f-' + f.n,
    name: f.n,
    type: f.type || 'text',
    placeholder: f.p,
    required: !!f.required
  }))), React.createElement("div", {
    className: "mf-field"
  }, React.createElement("label", {
    className: "mf-label",
    htmlFor: "f-service"
  }, "SERVICE INTEREST"), React.createElement("select", {
    className: "mf-select",
    id: "f-service",
    name: "service",
    defaultValue: "Design"
  }, ['Design', 'Install', 'Maintenance', 'Consultation', 'Not sure yet'].map(o => React.createElement("option", {
    key: o,
    value: o
  }, o)))), React.createElement("div", {
    className: "mf-field",
    style: {
      marginBottom: 28
    }
  }, React.createElement("label", {
    className: "mf-label",
    htmlFor: "f-details"
  }, "TELL US MORE"), React.createElement("textarea", {
    className: "mf-textarea",
    id: "f-details",
    name: "details",
    placeholder: "A few words about the space, your timeline, and what you're hoping for\u2026"
  })), React.createElement("button", {
    className: "mf-submit",
    type: "submit"
  }, "SEND INQUIRY  \u2192"), React.createElement("div", {
    className: "mf-note"
  }, "OPENS YOUR EMAIL APP \xB7 OR WRITE DIRECTLY TO ", MUDD.email.toUpperCase()));
}
function V1Cinematic({
  width = 1280
}) {
  const c = {
    indigo: MUDD.indigo,
    grape: MUDD.grape,
    lilac: MUDD.lilac,
    almond: MUDD.almond,
    parchment: MUDD.parchment,
    accent: '#c9ada7'
  };
  const PAD = 'clamp(32px, 5vw, 96px)';
  const MAXW = 1400;
  const container = {
    maxWidth: MAXW,
    margin: '0 auto',
    width: '100%'
  };
  const hair = '1px solid rgba(34,34,59,0.10)';
  const serif = 'var(--font-display)';
  const sans = 'var(--font-body)';
  const mono = 'var(--font-mono)';
  return React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 2200,
      margin: '0 auto',
      fontFamily: sans,
      background: '#ffffff',
      color: c.indigo,
      position: 'relative'
    }
  }, React.createElement("section", {
    className: "hero",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'minmax(380px, 0.85fr) 1.15fr',
      height: '100vh',
      minHeight: 600,
      background: '#ffffff',
      alignItems: 'stretch'
    }
  }, React.createElement("div", {
    className: "hero-copy",
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 'clamp(40px, 5vw, 88px) clamp(32px, 5vw, 96px)'
    },
    "data-comment-anchor": "d37b969cbe-h1-64-11"
  }, React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingBottom: '5vh'
    }
  }, React.createElement(LogoReveal, {
    src: "assets/mudd-logo.png",
    alt: "Mudd Habitat",
    className: "hero-logo",
    style: {
      display: 'block',
      height: 'clamp(280px, 42vh, 460px)',
      width: 'auto',
      maxWidth: '100%'
    }
  }), React.createElement("p", {
    className: "hero-tag",
    style: {
      fontFamily: serif,
      fontSize: 'clamp(19px, 1.5vw, 24px)',
      lineHeight: 1.45,
      margin: '38px 0 0',
      color: c.indigo,
      maxWidth: 420,
      textWrap: 'pretty'
    }
  }, "Landscape design, installation, and care for gardens that belong to the Pacific Northwest.")), React.createElement("div", {
    className: "hero-meta",
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      letterSpacing: '0.16em',
      color: c.grape
    }
  }, React.createElement("span", null, "PORTLAND, OREGON"), React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, "\xB7"), React.createElement("span", null, MUDD.email))), React.createElement("div", {
    className: "hero-img",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: '#ffffff'
    }
  }, React.createElement(SyncedFadeImg, {
    src: "assets/hero-forest.jpg",
    alt: "Pacific Northwest forest understory with ferns",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 45%',
      display: 'block'
    }
  }), React.createElement("div", {
    className: "hero-fade",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: `linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.55) 18%, rgba(255,255,255,0) 52%)`
    }
  }))), React.createElement("section", {
    className: "sec mission",
    style: {
      background: '#ffffff',
      color: c.indigo,
      padding: `104px ${PAD}`
    }
  }, React.createElement("div", {
    style: {
      ...container,
      maxWidth: 940,
      textAlign: 'center'
    }
  }, React.createElement("h2", {
    style: {
      fontFamily: serif,
      fontWeight: 400,
      fontSize: 52,
      lineHeight: 1.12,
      margin: 0,
      letterSpacing: '-0.005em'
    }
  }, "We build landscapes that belong to the Pacific Northwest."), React.createElement("div", null, React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      margin: '28px auto 0',
      maxWidth: 620,
      opacity: 0.85,
      textWrap: 'pretty'
    }
  }, "Every project starts with a plan looking towards the future. From a single retaining wall to a full lot redesign, we work with native plant communities, regional materials, and the way rain actually moves \u2014 so the landscape gets better with age instead of needing to be replaced.")))), React.createElement("section", {
    className: "sec",
    style: {
      background: '#ffffff',
      color: c.indigo,
      padding: `88px ${PAD}`,
      borderTop: hair
    }
  }, React.createElement("div", {
    className: "stats",
    style: {
      ...container,
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 1fr 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, React.createElement("div", {
    className: "stats-head"
  }, React.createElement("h3", {
    style: {
      fontFamily: serif,
      fontSize: 32,
      lineHeight: 1.15,
      fontWeight: 400,
      margin: 0
    }
  }, "Built across the", React.createElement("br", null), "greater Portland area")), [{
    n: '11+',
    l: 'Yards transformed',
    s: 'across Multnomah, Clackamas and Washington counties'
  }, {
    n: '12k',
    l: 'Sq ft of native planting',
    s: 'restored to drought-tolerant cover and wildlife forage'
  }, {
    n: '3yr',
    l: 'Average maintenance plan',
    s: 'designed for succession, so biweekly upkeep ends by year three'
  }].map((s, i) => React.createElement("div", {
    key: i
  }, React.createElement("div", {
    className: "stat-n",
    style: {
      fontFamily: serif,
      fontSize: 68,
      lineHeight: 0.9,
      color: c.grape,
      fontWeight: 400
    }
  }, s.n), React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginTop: 14,
      letterSpacing: '0.02em'
    }
  }, s.l), React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.6,
      marginTop: 6,
      lineHeight: 1.5
    }
  }, s.s))))), React.createElement("section", {
    className: "sec",
    style: {
      background: '#ffffff',
      padding: `104px ${PAD}`
    }
  }, React.createElement("div", {
    style: {
      ...container
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 44
    }
  }, React.createElement("div", null, React.createElement("h2", {
    style: {
      fontFamily: serif,
      fontSize: 56,
      lineHeight: 1.02,
      margin: 0,
      fontWeight: 400,
      letterSpacing: '-0.01em'
    }
  }, "Recent Projects")), MUDD.showProjectFilters && React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      fontSize: 13,
      fontFamily: mono,
      letterSpacing: '0.12em',
      color: c.grape
    }
  }, React.createElement("span", {
    style: {
      borderBottom: `1.5px solid ${c.indigo}`,
      paddingBottom: 4,
      color: c.indigo
    }
  }, "ALL"), React.createElement("span", null, "BUILT"), React.createElement("span", null, "CAD"), React.createElement("span", null, "PLANTING"))), React.createElement("div", {
    className: "cards3",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      columnGap: 28,
      rowGap: 72
    }
  }, MUDD.projects.slice(0, 3).map((p, i) => React.createElement(ProjectCard, {
    key: i,
    p: p,
    c: c,
    serif: serif,
    mono: mono
  }))), React.createElement("div", {
    className: "work-head",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginTop: 88,
      paddingTop: 88,
      borderTop: hair,
      marginBottom: 44
    }
  }, React.createElement("div", null, React.createElement("h2", {
    style: {
      fontFamily: serif,
      fontSize: 56,
      lineHeight: 1.02,
      margin: 0,
      fontWeight: 400,
      letterSpacing: '-0.01em'
    }
  }, "Services"))), React.createElement("div", {
    className: "cards3",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      columnGap: 28,
      rowGap: 72
    }
  }, MUDD.projects.slice(3).map((p, i) => React.createElement(ProjectCard, {
    key: i,
    p: p,
    c: c,
    serif: serif,
    mono: mono
  }))))), MUDD.showTestimonials && React.createElement("section", {
    style: {
      background: '#ffffff',
      color: c.indigo,
      padding: `104px ${PAD}`,
      borderTop: hair
    }
  }, React.createElement("h2", {
    style: {
      fontFamily: serif,
      fontSize: 56,
      lineHeight: 1.05,
      margin: 0,
      fontWeight: 400,
      maxWidth: 700,
      letterSpacing: '-0.01em'
    }
  }, "The kind of work people talk about over the fence."), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 32,
      marginTop: 64
    }
  }, MUDD.testimonials.map((t, i) => React.createElement("div", {
    key: i,
    style: {
      background: '#ffffff',
      padding: '36px 32px',
      borderRadius: 2,
      position: 'relative',
      border: `1px solid rgba(34,34,59,0.12)`
    }
  }, React.createElement("div", {
    style: {
      fontFamily: serif,
      fontSize: 64,
      color: c.lilac,
      lineHeight: 0.5,
      marginBottom: 12
    }
  }, "\""), React.createElement("p", {
    style: {
      fontFamily: serif,
      fontSize: 19,
      lineHeight: 1.45,
      margin: 0,
      fontStyle: 'italic'
    }
  }, t.quote), React.createElement("div", {
    style: {
      marginTop: 28,
      fontSize: 13,
      fontWeight: 600
    }
  }, t.name), React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 10,
      letterSpacing: '0.18em',
      color: c.grape,
      marginTop: 4
    }
  }, t.where.toUpperCase()))))), React.createElement("section", {
    className: "sec",
    style: {
      background: '#ffffff',
      color: c.indigo,
      padding: `104px ${PAD}`,
      borderTop: hair
    }
  }, React.createElement("div", {
    className: "contact",
    style: {
      ...container,
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 72,
      alignItems: 'center'
    }
  }, React.createElement("div", null, React.createElement("h2", {
    style: {
      fontFamily: serif,
      fontSize: 56,
      lineHeight: 1.02,
      margin: 0,
      fontWeight: 400,
      letterSpacing: '-0.01em',
      maxWidth: 520,
      textWrap: 'balance'
    }
  }, "Tell us about your patch of earth."), React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, React.createElement("a", {
    href: `mailto:${MUDD.email}`,
    style: {
      color: c.indigo,
      fontSize: 21,
      fontFamily: serif,
      textDecoration: 'none'
    }
  }, MUDD.email), React.createElement("a", {
    href: "https://www.instagram.com/muddhabitat",
    target: "_blank",
    rel: "noopener",
    style: {
      color: c.grape,
      fontFamily: sans,
      fontSize: 12,
      letterSpacing: '0.16em',
      textDecoration: 'none',
      marginTop: 6
    }
  }, "\u2197  INSTAGRAM  ", MUDD.instagram)), React.createElement("img", {
    src: "assets/cole-headshot.png",
    alt: "Cole McCullough, owner of Mudd Habitat",
    style: {
      width: 88,
      height: 88,
      borderRadius: '50%',
      objectFit: 'cover',
      objectPosition: 'center 30%',
      flexShrink: 0,
      display: 'block'
    }
  }))), React.createElement(InquiryForm, {
    c: c,
    serif: serif,
    mono: mono,
    hair: hair
  }))), React.createElement("footer", {
    style: {
      background: '#ffffff',
      color: c.grape,
      padding: `72px ${PAD} 40px`,
      borderTop: hair
    }
  }, React.createElement("div", {
    className: "footcols",
    style: {
      ...container,
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, React.createElement("div", null, React.createElement("img", {
    src: "assets/mudd-logo-footer.png",
    alt: "Mudd Habitat",
    className: "foot-logo",
    style: {
      display: 'block',
      height: 120,
      width: 'auto',
      marginTop: -10,
      marginLeft: -12
    }
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 10,
      letterSpacing: '0.24em',
      color: c.indigo,
      marginBottom: 14
    }
  }, "SERVICES"), MUDD.services.map((s, i) => React.createElement("div", {
    key: i,
    style: {
      fontSize: 13,
      lineHeight: 1.85
    }
  }, s))), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 10,
      letterSpacing: '0.24em',
      color: c.indigo,
      marginBottom: 14
    }
  }, "CONTACT"), React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.85
    }
  }, MUDD.email), React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.85
    }
  }, MUDD.instagram)), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 10,
      letterSpacing: '0.24em',
      color: c.indigo,
      marginBottom: 14
    }
  }, "LEGAL"), React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.85
    }
  }, "Mudd Habitat LLC"), React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.85
    }
  }, "Est. 2026"), React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.85
    }
  }, "Licensed + Bonded"), React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.85
    }
  }, MUDD.license))), React.createElement("div", {
    className: "footbot",
    style: {
      ...container,
      borderTop: hair,
      marginTop: 56,
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 11,
      fontFamily: mono,
      letterSpacing: '0.16em'
    }
  }, React.createElement("span", null, "\xA9 2026 MUDD HABITAT LLC  \xB7  PORTLAND, OR"), React.createElement("span", null, "PRIVACY  \xB7  TERMS"))));
}
window.V1Cinematic = V1Cinematic;

// ---- mount ----
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(V1Cinematic, null));
})();
