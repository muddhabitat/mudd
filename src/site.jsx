// V1 — Cinematic / editorial. Full-bleed hero (video-ready), serif headlines,
// dark teal-indigo palette over Parchment body. Reference *vibe* only —
// original layout & type system for Mudd Habitat.

function ProjectCard({ p, c, serif, mono }) {
  return (
    <div>
      {p.img ?
      <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: 2, overflow: 'hidden' }}>
        <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div> :
      <MuddPlaceholder
        label={`${p.type.toLowerCase()} · ${p.suburb.toLowerCase()}`}
        tone={p.tag === 'cad' ? 'parchment' : 'dark'}
        kind={p.tag}
        style={{ width: '100%', aspectRatio: '4/5', borderRadius: 2 }} />
      }
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 16 }}>
        <div>
          <div style={{ fontFamily: serif, fontSize: 26, fontWeight: 500, lineHeight: 1.1 }}>{p.title}</div>
          {(p.suburb || p.type) && <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.16em', color: c.grape, marginTop: 6 }}>
            {p.suburb ? p.suburb.toUpperCase() + '  ·  ' : ''}{p.type.toUpperCase()}
          </div>}
        </div>
        {p.year && <div style={{ fontFamily: mono, fontSize: 11, color: c.lilac }}>{p.year}</div>}
      </div>
    </div>);
}

function InquiryForm({ c, serif, mono, hair }) {
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const g = (k) => (f.get(k) || '').toString().trim();
    const body = [
      `Name: ${g('name')}`,
      `Email: ${g('email')}`,
      `Phone: ${g('phone')}`,
      `Project location: ${g('location')}`,
      `Service interest: ${g('service')}`,
      '',
      'Details:',
      g('details')
    ].join('\n');
    const subject = `Landscape inquiry — ${g('name') || 'new'}${g('location') ? ' · ' + g('location') : ''}`;
    window.location.href = `mailto:${MUDD.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  const fields = [
    { n: 'name', l: 'Name', p: 'Your name', required: true },
    { n: 'email', l: 'Email', p: 'you@somewhere.com', type: 'email', required: true },
    { n: 'phone', l: 'Phone', p: '(optional)', type: 'tel' },
    { n: 'location', l: 'Project location', p: 'Neighborhood or address' }
  ];
  return (
    <form onSubmit={submit} style={{ background: '#faf7f5', padding: '36px 32px', border: hair, borderRadius: 2 }}>
      {fields.map((f) =>
      <div key={f.n} className="mf-field">
        <label className="mf-label" htmlFor={'f-' + f.n}>{f.l.toUpperCase()}</label>
        <input className="mf-input" id={'f-' + f.n} name={f.n} type={f.type || 'text'} placeholder={f.p} required={!!f.required} />
      </div>
      )}
      <div className="mf-field">
        <label className="mf-label" htmlFor="f-service">SERVICE INTEREST</label>
        <select className="mf-select" id="f-service" name="service" defaultValue="Design">
          {['Design', 'Install', 'Maintenance', 'Consultation', 'Not sure yet'].map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div className="mf-field" style={{ marginBottom: 28 }}>
        <label className="mf-label" htmlFor="f-details">TELL US MORE</label>
        <textarea className="mf-textarea" id="f-details" name="details" placeholder="A few words about the space, your timeline, and what you're hoping for…"></textarea>
      </div>
      <button className="mf-submit" type="submit">SEND INQUIRY  →</button>
      <div className="mf-note">OPENS YOUR EMAIL APP · OR WRITE DIRECTLY TO {MUDD.email.toUpperCase()}</div>
    </form>);
}

function V1Cinematic({ width = 1280 }) {
  const c = {
    indigo: MUDD.indigo,
    grape: MUDD.grape,
    lilac: MUDD.lilac,
    almond: MUDD.almond,
    parchment: MUDD.parchment,
    accent: '#c9ada7' // almond as warm accent (like the orange in salmon ref, but on-brand)
  };
  const PAD = 'clamp(32px, 5vw, 96px)';
  const MAXW = 1400;
  const container = { maxWidth: MAXW, margin: '0 auto', width: '100%' };
  const hair = '1px solid rgba(34,34,59,0.10)';
  const serif = 'var(--font-display)';
  const sans = 'var(--font-body)';
  const mono = 'var(--font-mono)';

  return (
    <div style={{ width: '100%', maxWidth: 2200, margin: '0 auto', fontFamily: sans, background: '#ffffff', color: c.indigo, position: 'relative' }}>
      {/* HERO — editorial split: quiet type panel + full-height image (swap <img> for <video> when ready) */}
      <section className="hero" style={{
        position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(380px, 0.85fr) 1.15fr',
        height: '100vh', minHeight: 600, background: '#ffffff', alignItems: 'stretch'
      }}>
        {/* Left — logo + positioning line */}
        <div className="hero-copy" style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: 'clamp(40px, 5vw, 88px) clamp(32px, 5vw, 96px)'
        }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingBottom: '5vh' }}>
            <LogoReveal
              src="assets/mudd-logo.png"
              alt="Mudd Habitat"
              className="hero-logo"
              style={{ display: 'block', height: 'clamp(280px, 42vh, 460px)', width: 'auto', maxWidth: '100%' }} />
            <p className="hero-tag" style={{
              fontFamily: serif, fontSize: 'clamp(19px, 1.5vw, 24px)', lineHeight: 1.45,
              margin: '38px 0 0', color: c.indigo, maxWidth: 420, textWrap: 'pretty'
            }}>
              Landscape design, installation, and care for gardens that belong to the Pacific Northwest.
            </p>
          </div>

          <div className="hero-meta" style={{ display: 'flex', gap: 28, alignItems: 'center', justifyContent: 'center', fontSize: 12, letterSpacing: '0.16em', color: c.grape }}>
            <span>PORTLAND, OREGON</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>{MUDD.email}</span>
          </div>
        </div>

        {/* Right — image panel, softly feathered into the page on its left edge */}
        <div className="hero-img" style={{ position: 'relative', overflow: 'hidden', background: '#ffffff' }}>
          <SyncedFadeImg
            src="assets/hero-forest.jpg"
            alt="Pacific Northwest forest understory with ferns"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 45%', display: 'block' }} />
          <div className="hero-fade" style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: `linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.55) 18%, rgba(255,255,255,0) 52%)`
          }} />
        </div>
      </section>

      {/* MISSION strip — over service area map */}
      <section className="sec mission" style={{ background: '#ffffff', color: c.indigo, padding: `104px ${PAD}` }}>
        <div style={{ ...container, maxWidth: 940, textAlign: 'center' }}>
        <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 52, lineHeight: 1.12, margin: 0, letterSpacing: '-0.005em' }}>
          We build landscapes that belong to the Pacific Northwest.
        </h2>
        <div>
          <p style={{ fontSize: 15, lineHeight: 1.7, margin: '28px auto 0', maxWidth: 620, opacity: 0.85, textWrap: 'pretty' }}>
            Every project starts with a plan looking towards the future. From a single retaining wall to a full lot redesign, we work with native plant communities, regional materials, and the way rain actually moves — so the landscape gets better with age instead of needing to be replaced.
          </p>
        </div>
        </div>
      </section>

      {/* IMPACT stats */}
      <section className="sec" style={{ background: '#ffffff', color: c.indigo, padding: `88px ${PAD}`, borderTop: hair }}>
        <div className="stats" style={{ ...container, display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: 40, alignItems: 'start' }}>
          <div className="stats-head">
            <h3 style={{ fontFamily: serif, fontSize: 32, lineHeight: 1.15, fontWeight: 400, margin: 0 }}>
              Built across the<br />greater Portland area
            </h3>
          </div>
          {[
          { n: '11+', l: 'Yards transformed', s: 'across Multnomah, Clackamas and Washington counties' },
          { n: '12k', l: 'Sq ft of native planting', s: 'restored to drought-tolerant cover and wildlife forage' },
          { n: '3yr', l: 'Average maintenance plan', s: 'designed for succession, so biweekly upkeep ends by year three' }].
          map((s, i) =>
          <div key={i}>
              <div className="stat-n" style={{ fontFamily: serif, fontSize: 68, lineHeight: 0.9, color: c.grape, fontWeight: 400 }}>{s.n}</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginTop: 14, letterSpacing: '0.02em' }}>{s.l}</div>
              <div style={{ fontSize: 12, opacity: 0.6, marginTop: 6, lineHeight: 1.5 }}>{s.s}</div>
            </div>
          )}
        </div>
      </section>

      {/* WORK gallery */}
      <section className="sec" style={{ background: '#ffffff', padding: `104px ${PAD}` }}>
        <div style={{ ...container }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44 }}>
          <div>
            <h2 style={{ fontFamily: serif, fontSize: 56, lineHeight: 1.02, margin: 0, fontWeight: 400, letterSpacing: '-0.01em' }}>
              Recent Projects
            </h2>
          </div>
          {/* Project filters — hidden until there are enough projects (toggle in Tweaks) */}
          {MUDD.showProjectFilters &&
          <div style={{ display: 'flex', gap: 24, fontSize: 13, fontFamily: mono, letterSpacing: '0.12em', color: c.grape }}>
            <span style={{ borderBottom: `1.5px solid ${c.indigo}`, paddingBottom: 4, color: c.indigo }}>ALL</span>
            <span>BUILT</span>
            <span>CAD</span>
            <span>PLANTING</span>
          </div>
          }
        </div>
        <div className="cards3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: 28, rowGap: 72 }}>
          {MUDD.projects.slice(0, 3).map((p, i) => <ProjectCard key={i} p={p} c={c} serif={serif} mono={mono} />)}
        </div>

        {/* SERVICES header — same treatment as Recent projects */}
        <div className="work-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 88, paddingTop: 88, borderTop: hair, marginBottom: 44 }}>
          <div>
            <h2 style={{ fontFamily: serif, fontSize: 56, lineHeight: 1.02, margin: 0, fontWeight: 400, letterSpacing: '-0.01em' }}>
              Services
            </h2>
          </div>
        </div>
        <div className="cards3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: 28, rowGap: 72 }}>
          {MUDD.projects.slice(3).map((p, i) => <ProjectCard key={i} p={p} c={c} serif={serif} mono={mono} />)}
        </div>
        </div>
      </section>

      {/* TESTIMONIALS — hidden until real testimonials exist (toggle in Tweaks) */}
      {MUDD.showTestimonials &&
      <section style={{ background: '#ffffff', color: c.indigo, padding: `104px ${PAD}`, borderTop: hair }}>
        <h2 style={{ fontFamily: serif, fontSize: 56, lineHeight: 1.05, margin: 0, fontWeight: 400, maxWidth: 700, letterSpacing: '-0.01em' }}>
          The kind of work people talk about over the fence.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, marginTop: 64 }}>
          {MUDD.testimonials.map((t, i) =>
          <div key={i} style={{ background: '#ffffff', padding: '36px 32px', borderRadius: 2, position: 'relative', border: `1px solid rgba(34,34,59,0.12)` }}>
              <div style={{ fontFamily: serif, fontSize: 64, color: c.lilac, lineHeight: 0.5, marginBottom: 12 }}>"</div>
              <p style={{ fontFamily: serif, fontSize: 19, lineHeight: 1.45, margin: 0, fontStyle: 'italic' }}>{t.quote}</p>
              <div style={{ marginTop: 28, fontSize: 13, fontWeight: 600 }}>{t.name}</div>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: c.grape, marginTop: 4 }}>
                {t.where.toUpperCase()}
              </div>
            </div>
          )}
        </div>
      </section>
      }

      {/* CONTACT CTA */}
      <section className="sec" style={{ background: '#ffffff', color: c.indigo, padding: `104px ${PAD}`, borderTop: hair }}>
        <div className="contact" style={{ ...container, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: serif, fontSize: 56, lineHeight: 1.02, margin: 0, fontWeight: 400, letterSpacing: '-0.01em', maxWidth: 520, textWrap: 'balance' }}>
              Tell us about your patch of earth.
            </h2>
            <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 28 }}>
            <div style={{ display: 'grid', gap: 14 }}>
              <a href={`mailto:${MUDD.email}`} style={{ color: c.indigo, fontSize: 21, fontFamily: serif, textDecoration: 'none' }}>{MUDD.email}</a>
              <a href="https://www.instagram.com/muddhabitat" target="_blank" rel="noopener" style={{ color: c.grape, fontFamily: sans, fontSize: 12, letterSpacing: '0.16em', textDecoration: 'none', marginTop: 6 }}>↗  INSTAGRAM  {MUDD.instagram}</a>
            </div>
              <img src="assets/cole-headshot.png" alt="Cole McCullough, owner of Mudd Habitat" style={{ width: 88, height: 88, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 30%', flexShrink: 0, display: 'block' }} />
            </div>
          </div>
          <InquiryForm c={c} serif={serif} mono={mono} hair={hair} />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#ffffff', color: c.grape, padding: `72px ${PAD} 40px`, borderTop: hair }}>
        <div className="footcols" style={{ ...container, display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, alignItems: 'start' }}>
          <div>
            <img src="assets/mudd-logo-footer.png" alt="Mudd Habitat" className="foot-logo" style={{ display: 'block', height: 120, width: 'auto', marginTop: -10, marginLeft: -12 }} />
          </div>
          <div>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.24em', color: c.indigo, marginBottom: 14 }}>SERVICES</div>
            {MUDD.services.map((s, i) =>
            <div key={i} style={{ fontSize: 13, lineHeight: 1.85 }}>{s}</div>
            )}
          </div>
          <div>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.24em', color: c.indigo, marginBottom: 14 }}>CONTACT</div>
            <div style={{ fontSize: 13, lineHeight: 1.85 }}>{MUDD.email}</div>
            <div style={{ fontSize: 13, lineHeight: 1.85 }}>{MUDD.instagram}</div>
          </div>
          <div>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.24em', color: c.indigo, marginBottom: 14 }}>LEGAL</div>
            <div style={{ fontSize: 13, lineHeight: 1.85 }}>Mudd Habitat LLC</div>
            <div style={{ fontSize: 13, lineHeight: 1.85 }}>Est. 2026</div>
            <div style={{ fontSize: 13, lineHeight: 1.85 }}>Licensed + Bonded</div>
            <div style={{ fontSize: 13, lineHeight: 1.85 }}>{MUDD.license}</div>
          </div>
        </div>
        <div className="footbot" style={{
          ...container, borderTop: hair, marginTop: 56, paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', fontSize: 11, fontFamily: mono, letterSpacing: '0.16em'
        }}>
          <span>© 2026 MUDD HABITAT LLC  ·  PORTLAND, OR</span>
          <span>PRIVACY  ·  TERMS</span>
        </div>
      </footer>
    </div>);

}

window.V1Cinematic = V1Cinematic;