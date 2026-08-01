import { useEffect, useState } from 'react'
import { TRANSITIONS, DEFAULT_TRANSITION } from './variants'

export { TRANSITIONS, TRANSITION_NAMES, DEFAULT_TRANSITION } from './variants'

/** Live-tracks the OS reduced-motion setting (no reload needed). */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/**
 * Resolve a slide's transition name to its variant set.
 * Reduced motion collapses every effect to a plain crossfade — the single
 * guard for the whole deck.
 */
export function resolveVariants(name, reduced) {
  if (reduced) return TRANSITIONS.crossfade
  return TRANSITIONS[name] ?? TRANSITIONS[DEFAULT_TRANSITION]
}
