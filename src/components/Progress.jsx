const pad = (n) => String(n).padStart(2, '0')

export default function Progress({ index, total }) {
  const ratio = total > 1 ? (index + 1) / total : 1

  return (
    <div className="progress">
      <div className="progress__track">
        <div className="progress__fill" style={{ transform: `scaleX(${ratio})` }} />
      </div>
      <div className="progress__counter">
        <b>{pad(index + 1)}</b> / {pad(total)}
      </div>
    </div>
  )
}
