/**
 * Wspólna „szyna mowy” dla całego decku: każde nagranie narracji przechodzi
 * przez jeden AnalyserNode, z którego TalkingHead czyta głośność, żeby ruszać
 * szczęką w rytm głosu. Moduł wie też, czy cokolwiek aktualnie gra — po tym
 * głowa decyduje, czy się pokazać.
 */

let ctx = null
let analyser = null
let buffer = null
const sources = new WeakMap()
const active = new Set()
const listeners = new Set()

function ensureContext() {
  if (ctx) return ctx
  const Ctx = window.AudioContext || window.webkitAudioContext
  if (!Ctx) return null
  ctx = new Ctx()
  analyser = ctx.createAnalyser()
  analyser.fftSize = 1024
  analyser.smoothingTimeConstant = 0.3
  analyser.connect(ctx.destination)
  buffer = new Uint8Array(analyser.fftSize)
  return ctx
}

function notify() {
  const speaking = active.size > 0
  listeners.forEach((fn) => fn(speaking))
}

/** Podpina element audio pod analizator. Wywołać zaraz po `new Audio(...)`. */
export function speak(audio) {
  if (!ensureContext() || sources.has(audio)) return audio
  // Element podpięty pod AudioContext gra tylko przez niego — zawieszony
  // kontekst oznaczałby ciszę, więc próbujemy go obudzić przy każdej okazji.
  if (ctx.state === 'suspended') ctx.resume().catch(() => {})

  const source = ctx.createMediaElementSource(audio)
  source.connect(analyser)
  sources.set(audio, source)

  const start = () => {
    if (ctx.state === 'suspended') ctx.resume().catch(() => {})
    active.add(audio)
    notify()
  }
  const stop = () => {
    if (active.delete(audio)) notify()
  }
  const release = () => {
    stop()
    source.disconnect()
  }

  audio.addEventListener('play', start)
  audio.addEventListener('pause', stop)
  audio.addEventListener('ended', stop)
  audio.addEventListener('emptied', release, { once: true })
  return audio
}

/** Bieżąca głośność (RMS) w zakresie mniej więcej 0..1. */
export function getLevel() {
  if (!analyser || active.size === 0) return 0
  analyser.getByteTimeDomainData(buffer)
  let sum = 0
  for (let i = 0; i < buffer.length; i++) {
    const v = (buffer[i] - 128) / 128
    sum += v * v
  }
  return Math.sqrt(sum / buffer.length)
}

export function isSpeaking() {
  return active.size > 0
}

/** Powiadamia o zmianie „czy ktoś mówi”. Zwraca funkcję wypisującą. */
export function subscribe(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}
