export default function Result({ recordBeaten }) {
  return (
    <div>
      {recordBeaten ?
        <p className="result__text">You did it! You've set a new record! 🔥</p> :
        <p className="result__text">Not quite there, give it another try! 💪</p>
      }
    </div>
  )
}