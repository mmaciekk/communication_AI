function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 4.5v15l13-7.5z" fill="currentColor" />
    </svg>
  )
}

/**
 * Kontrolka pauza/play widoczna na każdym slajdzie, dopóki trwa autopilot
 * (src/Deck.jsx). Zajmuje ten sam slot co Narration.jsx, bo w trybie
 * autopilota dźwiękiem steruje już sam autopilot.
 */
export default function AutopilotControls({ accent, paused, onPause, onResume }) {
  return (
    <button
      type="button"
      className={`narration autopilot-controls${paused ? ' autopilot-controls--paused' : ''}`}
      data-accent={accent ?? 'cyan'}
      onClick={paused ? onResume : onPause}
      aria-label={paused ? 'Wznów autopilota' : 'Zatrzymaj autopilota'}
      title={paused ? 'Wznów' : 'Pauza'}
    >
      <span className="narration__icon">{paused ? <PlayIcon /> : <PauseIcon />}</span>
    </button>
  )
}
