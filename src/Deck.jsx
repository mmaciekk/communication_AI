import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import Autopilot from './components/Autopilot'
import AutopilotControls from './components/AutopilotControls'
import Backdrop from './components/Backdrop'
import Narration from './components/Narration'
import Overview from './components/Overview'
import Progress from './components/Progress'
import Slide from './components/Slide'
import narration from './narration.json'
import { slides } from './slides'
import { DEFAULT_TRANSITION, resolveVariants, usePrefersReducedMotion } from './transitions'

const DWELL_MS = 5000

const LAST = slides.length - 1
const clamp = (n) => Math.max(0, Math.min(LAST, n))

/** Read a slide index out of `#/7`. Returns 0 for anything unparseable. */
function indexFromHash() {
  const m = /^#\/(\d+)$/.exec(window.location.hash)
  return m ? clamp(Number(m[1]) - 1) : 0
}

export default function Deck() {
  const [index, setIndex] = useState(indexFromHash)
  const [direction, setDirection] = useState(1)
  const [overview, setOverview] = useState(false)
  const [idle, setIdle] = useState(false)
  const [autopilot, setAutopilot] = useState(false)
  const [paused, setPaused] = useState(false)
  const reduced = usePrefersReducedMotion()

  // Guards AnimatePresence against a second navigation landing mid-transition,
  // which would otherwise leave an orphaned exiting slide on screen.
  const locked = useRef(false)
  const unlockTimer = useRef(null)

  const unlock = useCallback(() => {
    locked.current = false
    clearTimeout(unlockTimer.current)
  }, [])

  const go = useCallback(
    (next, dir) => {
      const target = clamp(next)
      if (target === index || locked.current) return
      locked.current = true
      // Safety net: if an animation never reports completion (interrupted tab,
      // dropped frame), release the lock anyway rather than freezing the deck.
      clearTimeout(unlockTimer.current)
      unlockTimer.current = setTimeout(unlock, 1600)
      setDirection(dir ?? (target > index ? 1 : -1))
      setIndex(target)
    },
    [index, unlock],
  )

  const next = useCallback(() => go(index + 1, 1), [go, index])
  const prev = useCallback(() => go(index - 1, -1), [go, index])

  /* --------------------------------------------------------------- autopilot */

  // "Stresujesz się?" tryb: odtwarza narrację slajd po slajdzie, sam
  // przechodząc dalej gdy nagranie się skończy (albo po ustalonym czasie,
  // jeśli dany slajd jeszcze nie ma nagrania). Kontrolki pauzy operują na
  // tym samym Audio/timerze, więc wznowienie startuje dokładnie tam, gdzie
  // stanęło — nie od nowa.
  const audioRef = useRef(null)
  const dwellRef = useRef(null)
  const advanceRef = useRef(() => {})

  const cancelAutopilot = useCallback(() => {
    setAutopilot(false)
    setPaused(false)
  }, [])

  useEffect(() => {
    advanceRef.current = () => {
      if (index === LAST) {
        setAutopilot(false)
        setPaused(false)
      } else {
        next()
      }
    }
  }, [index, next])

  useEffect(() => {
    if (!autopilot) return undefined
    setPaused(false)

    const entry = narration[String(index + 1)]

    if (entry) {
      const audio = new Audio(entry.src)
      audioRef.current = audio
      const onEnd = () => advanceRef.current()
      audio.addEventListener('ended', onEnd)
      audio.play().catch(() => {})
      return () => {
        audio.pause()
        audio.removeEventListener('ended', onEnd)
        audio.src = ''
        audioRef.current = null
      }
    }

    dwellRef.current = { remaining: DWELL_MS, startedAt: Date.now() }
    dwellRef.current.timer = setTimeout(() => advanceRef.current(), DWELL_MS)
    return () => {
      clearTimeout(dwellRef.current?.timer)
      dwellRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autopilot, index])

  const onAutopilotPause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
    } else if (dwellRef.current) {
      clearTimeout(dwellRef.current.timer)
      dwellRef.current.remaining -= Date.now() - dwellRef.current.startedAt
    }
    setPaused(true)
  }, [])

  const onAutopilotResume = useCallback(() => {
    setPaused(false)
    const continuePlayback = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {})
      } else if (dwellRef.current) {
        dwellRef.current.startedAt = Date.now()
        dwellRef.current.timer = setTimeout(() => advanceRef.current(), dwellRef.current.remaining)
      }
    }
    const phrase = new Audio('/audio/resume.mp3')
    phrase.addEventListener('ended', continuePlayback)
    phrase.addEventListener('error', continuePlayback)
    phrase.play().catch(continuePlayback)
  }, [])

  /* ------------------------------------------------------------ hash sync */

  useEffect(() => {
    const want = `#/${index + 1}`
    if (window.location.hash !== want) {
      window.history.replaceState(null, '', want)
    }
  }, [index])

  useEffect(() => {
    const onHash = () => {
      const target = indexFromHash()
      setIndex((cur) => {
        if (target === cur) return cur
        setDirection(target > cur ? 1 : -1)
        return target
      })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  /* -------------------------------------------------------------- keyboard */

  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return

      if (overview) {
        if (e.key === 'Escape' || e.key.toLowerCase() === 'o') {
          e.preventDefault()
          setOverview(false)
        }
        return
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
        case 'Enter':
          e.preventDefault()
          if (autopilot) cancelAutopilot()
          next()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
        case 'Backspace':
          e.preventDefault()
          if (autopilot) cancelAutopilot()
          prev()
          break
        case 'Home':
          e.preventDefault()
          if (autopilot) cancelAutopilot()
          go(0, -1)
          break
        case 'End':
          e.preventDefault()
          if (autopilot) cancelAutopilot()
          go(LAST, 1)
          break
        default:
          if (e.key.toLowerCase() === 'o') {
            e.preventDefault()
            if (autopilot) cancelAutopilot()
            setOverview(true)
          } else if (e.key.toLowerCase() === 'f') {
            e.preventDefault()
            if (document.fullscreenElement) document.exitFullscreen()
            else document.documentElement.requestFullscreen?.()
          }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go, overview, autopilot, cancelAutopilot])

  /* ------------------------------------------------------ pointer & touch */

  const touchStart = useRef(null)

  const onPointerUp = (e) => {
    if (overview) return
    // Links inside a slide must stay clickable.
    if (e.target.closest('a, button')) return
    if (autopilot) cancelAutopilot()
    const half = window.innerWidth / 2
    if (e.clientX > half) next()
    else prev()
  }

  const onTouchStart = (e) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  const onTouchEnd = (e) => {
    const start = touchStart.current
    if (!start) return
    touchStart.current = null
    const dx = e.changedTouches[0].clientX - start.x
    const dy = e.changedTouches[0].clientY - start.y
    if (Math.abs(dx) < 55 || Math.abs(dx) < Math.abs(dy)) return
    if (autopilot) cancelAutopilot()
    if (dx < 0) next()
    else prev()
  }

  /* ------------------------------------------------- fade the hint on idle */

  useEffect(() => {
    const t = setTimeout(() => setIdle(true), 6000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => () => clearTimeout(unlockTimer.current), [])

  const slide = slides[index]
  const variants = resolveVariants(slide.transition ?? DEFAULT_TRANSITION, reduced)

  return (
    <div
      className="deck"
      onPointerUp={onPointerUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Backdrop />

      <div className="deck__stage">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <Slide
            key={slide.id}
            slide={slide}
            variants={variants}
            direction={direction}
            onAnimationComplete={unlock}
          />
        </AnimatePresence>
      </div>

      <div className="overlay">
        <div className="overlay__scanlines" />
        <div className="overlay__sweep" />
        <div className="overlay__vignette" />
      </div>

      <Progress index={index} total={slides.length} />
      {autopilot ? (
        <AutopilotControls
          accent={slide.accent}
          paused={paused}
          onPause={onAutopilotPause}
          onResume={onAutopilotResume}
        />
      ) : (
        <Narration index={index} accent={slide.accent} enabled={!overview} />
      )}
      <Autopilot index={index} active={autopilot} onStart={() => setAutopilot(true)} />
      <div className={`hint${idle ? ' hint--hidden' : ''}`}>
        ← → NAVIGATE · N NARRATION · O OVERVIEW · F FULLSCREEN
      </div>

      <AnimatePresence>
        {overview && (
          <Overview
            slides={slides}
            index={index}
            onClose={() => setOverview(false)}
            onPick={(i) => {
              setOverview(false)
              unlock()
              go(i)
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
