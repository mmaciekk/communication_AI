import { motion } from 'motion/react'

const pad = (n) => String(n).padStart(2, '0')

export default function Overview({ slides, index, onPick, onClose }) {
  return (
    <motion.div
      className="overview"
      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      animate={{ opacity: 1, backdropFilter: 'blur(14px)' }}
      exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      transition={{ duration: 0.28 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <p className="overview__hint">Overview — click a slide, or press O / Esc to close</p>
      <div className="overview__grid">
        {slides.map((slide, i) => (
          <motion.button
            key={slide.id}
            className={`overview__card${i === index ? ' overview__card--active' : ''}`}
            data-accent={slide.accent ?? 'cyan'}
            onClick={() => onPick(i)}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: Math.min(i * 0.018, 0.4) }}
          >
            <span className="overview__num">{pad(i + 1)}</span>
            <div className="overview__title">
              {(slide.title ?? slide.quote ?? slide.figure ?? '').replace(/\n/g, ' ')}
            </div>
            {slide.kicker && <span className="overview__kicker">{slide.kicker}</span>}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
