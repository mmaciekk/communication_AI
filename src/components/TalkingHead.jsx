import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { getLevel, isSpeaking, subscribe } from '../speech'
import { usePrefersReducedMotion } from '../transitions'

// Krótkie przerwy między nagraniami (intro → slajd 1, fraza „resume”) nie
// powinny chować głowy — znika dopiero po tej chwili ciszy.
const HIDE_DELAY_MS = 700

/**
 * Gadająca głowa w prawym dolnym rogu. Pokazuje się, gdy gra jakakolwiek
 * narracja (src/speech.js), a szczęka opada proporcjonalnie do głośności.
 * Poziom trafia do CSS jako `--jaw` (0..1) bezpośrednio przez ref, bez
 * re-renderów Reacta w każdej klatce.
 */
export default function TalkingHead({ hidden = false }) {
  const [visible, setVisible] = useState(isSpeaking)
  const reduced = usePrefersReducedMotion()
  const headRef = useRef(null)

  useEffect(() => {
    let timer = null
    const unsubscribe = subscribe((speaking) => {
      clearTimeout(timer)
      if (speaking) setVisible(true)
      else timer = setTimeout(() => setVisible(false), HIDE_DELAY_MS)
    })
    return () => {
      clearTimeout(timer)
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (!visible) return undefined
    let raf = 0
    let jaw = 0
    const tick = () => {
      // Głos z nagrań ma RMS rzędu 0.05–0.3; próg obcina szum, mnożnik
      // rozciąga resztę na pełny zakres ruchu szczęki.
      const target = Math.min(1, Math.max(0, (getLevel() - 0.02) * 5))
      // Szybkie otwarcie, wolniejsze zamknięcie — mniej „trzepotania”.
      jaw += (target - jaw) * (target > jaw ? 0.6 : 0.25)
      headRef.current?.style.setProperty('--jaw', jaw.toFixed(3))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible])

  return (
    <AnimatePresence>
      {visible && !hidden && (
        <motion.div
          key="head"
          className={`head${reduced ? ' head--still' : ''}`}
          aria-hidden="true"
          initial={{ opacity: 0, y: reduced ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduced ? 0 : 40 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="head__rig" ref={headRef}>
            <img className="head__base" src="media/head.png" alt="" draggable="false" />
            <span className="head__mouth" />
            <img className="head__jaw" src="media/head.png" alt="" draggable="false" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
