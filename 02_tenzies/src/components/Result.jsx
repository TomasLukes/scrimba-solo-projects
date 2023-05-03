export default function Result({ recordBeaten }) {
  return (
    <div>
      {recordBeaten ?
        <p className="record__text">You did it! You've set a new record!</p> :
        <p className="record__text">Not quite there, give it another try!</p>
      }
    </div>
  )
}