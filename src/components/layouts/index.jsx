import { motion } from 'motion/react'
import { SOURCE_GROUPS } from '../../slides'

// Bullet copy is authored in slides.js with inline <strong>/<em> markup.
// It is first-party static content, never user input.
const html = (s) => ({ dangerouslySetInnerHTML: { __html: s } })

/** Staggered reveal for content inside a slide, once the slide itself lands. */
const stagger = {
  animate: { transition: { staggerChildren: 0.075, delayChildren: 0.14 } },
}

const rise = {
  initial: { opacity: 0, y: 26, filter: 'blur(6px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}

// `nested` = an ancestor already drives the initial/animate states, so this
// element only needs to declare its variants and let them propagate down.
const drive = (nested) => (nested ? {} : { initial: 'initial', animate: 'animate' })

function Bullets({ items, nested }) {
  return (
    <motion.ul className="bullets" variants={stagger} {...drive(nested)}>
      {items.map((item, i) => (
        <motion.li key={i} className="bullets__item" variants={rise} {...html(item)} />
      ))}
    </motion.ul>
  )
}

/** Optional GIF/still on a slide. Absent `media` renders nothing. */
function Media({ media, nested }) {
  if (!media) return null
  return (
    <motion.figure
      className={`media media--${media.variant ?? 'side'}`}
      variants={rise}
      {...drive(nested)}
    >
      <img src={media.src} alt={media.alt ?? ''} loading="eager" />
    </motion.figure>
  )
}

function Credit({ credit }) {
  if (!credit) return null
  return (
    <div className="credit">
      ↳{' '}
      {credit.url ? (
        <a href={credit.url} target="_blank" rel="noreferrer">
          {credit.label}
        </a>
      ) : (
        credit.label
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ title */

function TitleLayout({ slide }) {
  return (
    <>
      {slide.kicker && <p className="kicker fx-flicker">{slide.kicker}</p>}
      <h1 className="title title--mega fx-chrome" style={{ whiteSpace: 'pre-line' }}>
        {slide.title}
      </h1>
      {slide.subtitle && <p className="subtitle">{slide.subtitle}</p>}
      <Media media={slide.media} />
    </>
  )
}

/* ---------------------------------------------------------------- section */

function SectionLayout({ slide }) {
  return (
    <>
      {slide.numeral && <span className="fx-numeral">{slide.numeral}</span>}
      {slide.kicker && <p className="kicker">{slide.kicker}</p>}
      <h2
        className="title title--mega fx-neon"
        data-text={slide.title}
        style={{ whiteSpace: 'pre-line' }}
      >
        {slide.title}
      </h2>
      {slide.subtitle && <p className="subtitle">{slide.subtitle}</p>}
    </>
  )
}

/* ---------------------------------------------------------------- bullets */

function BulletsLayout({ slide }) {
  // `side` media shares a row with the bullets, so both are driven by one
  // stagger container. Without media the markup is exactly as it was.
  const side = slide.media && slide.media.variant !== 'band'

  return (
    <>
      {slide.kicker && <p className="kicker">{slide.kicker}</p>}
      <h2 className="title fx-chrome">{slide.title}</h2>
      {side ? (
        <motion.div className="with-media" variants={stagger} initial="initial" animate="animate">
          {slide.bullets && <Bullets items={slide.bullets} nested />}
          <Media media={slide.media} nested />
        </motion.div>
      ) : (
        <>
          {slide.bullets && <Bullets items={slide.bullets} />}
          <Media media={slide.media} />
        </>
      )}
    </>
  )
}

/* ------------------------------------------------------------------ quote */

function QuoteLayout({ slide }) {
  return (
    <>
      <span className="quote__mark">“</span>
      <blockquote className="quote fx-neon">{slide.quote}</blockquote>
      {slide.cite && <cite className="quote__cite">— {slide.cite}</cite>}
    </>
  )
}

/* ------------------------------------------------------------------- stat */

function StatLayout({ slide }) {
  return (
    <div className="stat">
      {slide.kicker && <p className="kicker">{slide.kicker}</p>}
      <div className="stat__figure fx-chrome">{slide.figure}</div>
      <p className="stat__label">{slide.label}</p>
    </div>
  )
}

/* ------------------------------------------------------------------ split */

function SplitLayout({ slide }) {
  return (
    <>
      {slide.kicker && <p className="kicker">{slide.kicker}</p>}
      <h2 className="title fx-chrome">{slide.title}</h2>
      <div className="split">
        {slide.columns.map((col) => (
          <div key={col.heading} className={`split__col split__col--${col.tone}`}>
            <h3>{col.heading}</h3>
            <ul className="bullets">
              {col.items.map((item, i) => (
                <li key={i} className="bullets__item" {...html(item)} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

/* ---------------------------------------------------------------- sources */

function SourcesLayout({ slide }) {
  return (
    <>
      {slide.kicker && <p className="kicker">{slide.kicker}</p>}
      <h2 className="title fx-chrome">{slide.title}</h2>
      <div className="sources">
        {SOURCE_GROUPS.map((group) => (
          <section key={group.topic} className="sources__group">
            <h3>{group.topic}</h3>
            <ul>
              {group.links.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  )
}

const LAYOUTS = {
  title: TitleLayout,
  section: SectionLayout,
  bullets: BulletsLayout,
  quote: QuoteLayout,
  stat: StatLayout,
  split: SplitLayout,
  sources: SourcesLayout,
}

/** Layouts that read better centred. */
export const CENTERED = new Set(['title', 'quote', 'stat'])

export function getLayout(name) {
  return LAYOUTS[name] ?? BulletsLayout
}

export { Credit }
