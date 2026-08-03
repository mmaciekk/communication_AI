/**
 * Przycisk startowy autopilota — widoczny tylko na pierwszym slajdzie,
 * dopóki autopilot nie działa. Uruchamia sekwencyjne odtwarzanie narracji
 * (src/Deck.jsx) ze zmianą slajdów po zakończeniu każdego nagrania.
 */
export default function Autopilot({ index, active, onStart }) {
  if (index !== 0 || active) return null;
  return (
    <button type="button" className="autopilot" onClick={onStart}>
      HELP ME
    </button>
  );
}
