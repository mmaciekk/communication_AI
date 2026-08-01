import { motion } from 'motion/react'
import { CENTERED, Credit, getLayout } from './layouts'

/**
 * Generic slide frame. Owns the enter/exit animation; the layout owns content.
 * `direction` is threaded through as `custom` so variants can mirror themselves.
 */
export default function Slide({ slide, variants, direction, onAnimationComplete }) {
  const Layout = getLayout(slide.layout)
  const centered = CENTERED.has(slide.layout)

  return (
    <motion.section
      key={slide.id}
      className={`slide${centered ? ' slide--center' : ''}${
        slide.layout === 'section' ? ' fx-frame' : ''
      }`}
      data-accent={slide.accent ?? 'cyan'}
      custom={direction}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={onAnimationComplete}
      style={{ zIndex: 10 }}
    >
      <Layout slide={slide} />
      <Credit credit={slide.credit} />
    </motion.section>
  )
}
