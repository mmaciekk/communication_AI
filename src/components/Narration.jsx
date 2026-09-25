import { useCallback, useEffect, useRef, useState } from 'react'
import narration from '../narration.json'
import { speak } from '../speech'

function SpeakerIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
      <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" fill="none"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor" />
    </svg>
  )
}

/**
 * Odtwarza narrację bieżącego slajdu — audio wygenerowane offline przez
 * tools/voice/generate.py i opisane w src/narration.json.
 *
 * Zmiana slajdu zawsze ucina dźwięk: mówiony tekst ma sens tylko przy swoim
 * slajdzie. Nic nie startuje samo — odtwarzanie zawsze wychodzi od kliknięcia
 * albo klawisza, więc polityka autoplay przeglądarek nie ma tu zastosowania.
 */
export default function Narration({ index, accent, enabled = true }) {
  const entry = narration[String(index + 1)]
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    setPlaying(false)
    setElapsed(0)

    if (!entry) {
      audioRef.current = null
      return undefined
    }

    const audio = speak(new Audio(entry.src))
    audio.preload = 'auto'
    audioRef.current = audio

    const onTime = () => setElapsed(audio.currentTime)
    const onEnd = () => {
      setPlaying(false)
      setElapsed(0)
    }
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('ended', onEnd)

    return () => {
      audio.pause()
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('ended', onEnd)
      audio.src = ''
      audioRef.current = null
    }
  }, [entry])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    } else {
      audio.pause()
      setPlaying(false)
    }
  }, [])

  useEffect(() => {
    if (!enabled || !entry) return undefined
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key.toLowerCase() !== 'n') return
      e.preventDefault()
      toggle()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [enabled, entry, toggle])

  if (!entry) return null

  const total = entry.duration || 0
  const ratio = total ? Math.min(1, elapsed / total) : 0

  return (
    <button
      type="button"
      className={`narration${playing ? ' narration--on' : ''}`}
      data-accent={accent ?? 'cyan'}
      onClick={toggle}
      aria-label={playing ? 'Zatrzymaj narrację' : 'Przeczytaj tekst slajdu'}
      title="N — narracja"
    >
      <span className="narration__icon">{playing ? <PauseIcon /> : <SpeakerIcon />}</span>
      <span className="narration__bar">
        <span className="narration__bar-fill" style={{ transform: `scaleX(${ratio})` }} />
      </span>
    </button>
  )
}
