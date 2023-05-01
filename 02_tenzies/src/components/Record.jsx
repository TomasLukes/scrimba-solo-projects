export default function Record({ bestRecord }) {
  return (
    <div>
      <p>Current best record is: <br></br> <span>{bestRecord} seconds ⏱️ </span></p>
      <p>Can you beat it? 😉</p>
    </div>
  )
}