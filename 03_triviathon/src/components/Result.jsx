export default function Result({ score }) {
  return (
    <p className="text-xl
    md:text-3xl">
      {`You scored ${score}/5 correct answers`}
    </p>
  )
}