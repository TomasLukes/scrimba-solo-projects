export default function Result({ recordBeaten }) {
  return (
    <div>
      {recordBeaten ?
        <p>You did it! You've set a new record!</p> :
        <p>Not quite there, give it another try!</p>
      }
    </div>
  )
}