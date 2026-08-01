// Each transition is a variant set consumed by <motion.section> inside an
// AnimatePresence with mode="wait". `custom` carries the nav direction
// (1 = forward, -1 = backward) so every effect mirrors itself when you go back.

const EXPO_OUT = [0.16, 1, 0.3, 1]
const EXPO_IN = [0.7, 0, 0.84, 0]
const SNAP = [0.85, 0, 0.15, 1]

/* --- vhsWarp -------------------------------------------------------------
   Tracking error: the slide skews, stretches and smears sideways as it goes,
   the next one snaps in from the opposite edge with the same distortion. */
const vhsWarp = {
  initial: (d) => ({
    opacity: 0,
    x: 90 * d,
    scaleX: 1.35,
    scaleY: 0.82,
    skewX: -12 * d,
    filter: 'blur(14px) saturate(2.4)',
  }),
  animate: {
    opacity: 1,
    x: 0,
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    filter: 'blur(0px) saturate(1)',
    transition: { duration: 0.62, ease: EXPO_OUT },
  },
  exit: (d) => ({
    opacity: 0,
    x: -140 * d,
    scaleX: 1.5,
    scaleY: 0.7,
    skewX: 16 * d,
    filter: 'blur(18px) saturate(3)',
    transition: { duration: 0.36, ease: EXPO_IN },
  }),
}

/* --- chromaSplit ---------------------------------------------------------
   Outgoing slide tears into RGB ghosts (drop-shadow doing the channel work)
   and blows apart; incoming reassembles from the fringe. */
const chromaSplit = {
  initial: (d) => ({
    opacity: 0,
    x: 46 * d,
    filter:
      'blur(10px) drop-shadow(-26px 0 0 rgba(255,46,151,.9)) drop-shadow(26px 0 0 rgba(0,240,255,.9))',
  }),
  animate: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px) drop-shadow(0px 0 0 rgba(255,46,151,0)) drop-shadow(0px 0 0 rgba(0,240,255,0))',
    transition: { duration: 0.66, ease: EXPO_OUT },
  },
  exit: (d) => ({
    opacity: 0,
    x: -46 * d,
    filter:
      'blur(12px) drop-shadow(34px 0 0 rgba(255,46,151,.95)) drop-shadow(-34px 0 0 rgba(0,240,255,.95))',
    transition: { duration: 0.4, ease: EXPO_IN },
  }),
}

/* --- gridDive ------------------------------------------------------------
   Slide recedes into the horizon grid on Z, next one flies up out of it.
   Relies on `perspective` set on .deck. */
const gridDive = {
  initial: (d) => ({
    opacity: 0,
    z: -900 * d,
    y: 130 * d,
    rotateX: 34 * d,
    scale: 0.7,
    filter: 'blur(9px)',
  }),
  animate: {
    opacity: 1,
    z: 0,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.78, ease: EXPO_OUT },
  },
  exit: (d) => ({
    opacity: 0,
    z: 700 * d,
    y: -110 * d,
    rotateX: -28 * d,
    scale: 1.3,
    filter: 'blur(11px)',
    transition: { duration: 0.42, ease: EXPO_IN },
  }),
}

/* --- scanWipe ------------------------------------------------------------
   A hard edge sweeps across, revealing the new slide. clipPath does the wipe;
   the companion .transition-beam element draws the bright scanning bar. */
const scanWipe = {
  initial: (d) => ({
    opacity: 1,
    clipPath: d > 0 ? 'inset(0 0 100% 0)' : 'inset(100% 0 0 0)',
    filter: 'brightness(2.2) saturate(2)',
  }),
  animate: {
    opacity: 1,
    clipPath: 'inset(0% 0 0% 0)',
    filter: 'brightness(1) saturate(1)',
    transition: { duration: 0.66, ease: SNAP },
  },
  exit: (d) => ({
    opacity: 1,
    clipPath: d > 0 ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)',
    filter: 'brightness(2.4) saturate(2.2)',
    transition: { duration: 0.4, ease: SNAP },
  }),
}

/* --- glitchCut -----------------------------------------------------------
   Punchy. Three clipped jump-frames on the way out, hard snap on the way in.
   Keyframe arrays + a matching `times` array per property. */
const glitchCut = {
  // `initial` must be a resting state — single values only, no keyframe arrays.
  initial: (d) => ({
    opacity: 0,
    x: 30 * d,
    skewX: 10,
    filter: 'blur(8px) invert(0.15)',
  }),
  animate: (d) => ({
    opacity: [0, 1, 1, 1],
    x: [30 * d, -18 * d, 10 * d, 0],
    skewX: [10, -6, 3, 0],
    filter: [
      'blur(8px) invert(0.15)',
      'blur(0px) invert(0)',
      'blur(3px) invert(0.1)',
      'blur(0px) invert(0)',
    ],
    transition: { duration: 0.38, ease: 'linear', times: [0, 0.3, 0.62, 1] },
  }),
  exit: (d) => ({
    opacity: [1, 1, 0.85, 0],
    x: [0, 22 * d, -34 * d, 12 * d],
    skewX: [0, -14, 9, -4],
    filter: [
      'blur(0px)',
      'blur(0px) invert(0.85)',
      'blur(5px) invert(0)',
      'blur(9px) invert(0.4)',
    ],
    transition: { duration: 0.3, ease: 'linear', times: [0, 0.34, 0.68, 1] },
  }),
}

/* --- sunRise -------------------------------------------------------------
   Calm vertical rise with a chromatic bloom. For section openers. */
const sunRise = {
  initial: (d) => ({
    opacity: 0,
    y: 120 * d,
    scale: 0.94,
    filter: 'blur(16px) brightness(1.9) saturate(2.2)',
  }),
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px) brightness(1) saturate(1)',
    transition: { duration: 0.85, ease: EXPO_OUT },
  },
  exit: (d) => ({
    opacity: 0,
    y: -100 * d,
    scale: 1.06,
    filter: 'blur(14px) brightness(1.7) saturate(2)',
    transition: { duration: 0.42, ease: EXPO_IN },
  }),
}

/* Accessibility fallback: same keys, no movement. */
const crossfade = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.18, ease: 'linear' } },
  exit: { opacity: 0, transition: { duration: 0.12, ease: 'linear' } },
}

export const TRANSITIONS = {
  vhsWarp,
  chromaSplit,
  gridDive,
  scanWipe,
  glitchCut,
  sunRise,
  crossfade,
}

export const TRANSITION_NAMES = Object.keys(TRANSITIONS).filter((n) => n !== 'crossfade')

export const DEFAULT_TRANSITION = 'vhsWarp'
