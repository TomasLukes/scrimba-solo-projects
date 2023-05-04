export default function Result({ score }) {
  return (
    <p className="text-results">{`You scored ${score}/5 correct answers`}</p>
  )
}