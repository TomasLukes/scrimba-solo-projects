export default function Record({ bestRecord }) {
  return (
    <div className="record">
      <p className="record__text no-margin">⏱️ Best record is: <span className="record__seconds">{bestRecord}</span> seconds</p>
    </div>
  )
}