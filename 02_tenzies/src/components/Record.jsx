export default function Record({ bestRecord }) {
  return (
    <div>
      <p>Current best record is: <span>{bestRecord} ⏱️ </span></p>
      <p>Can you beat it? 😉</p>
    </div>
  )
}