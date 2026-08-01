// Persistent animated background. Deliberately rendered once, outside
// AnimatePresence, so slide changes never remount it and the grid/sun keep
// their animation phase across the whole deck.
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__stars" />
      <div className="backdrop__sun-glow" />
      <div className="backdrop__sun" />
      <div className="backdrop__horizon" />
      <div className="backdrop__grid" />
    </div>
  )
}
