export default function Record({ bestRecord }) {
  return (
    <div className="record">
      <p className="record__current no-margin">Current best record is: <span>{bestRecord} seconds ⏱️ </span></p>
      <p className="record__challenge no-margin">Can you beat it? 😉</p>
    </div>
  )
}