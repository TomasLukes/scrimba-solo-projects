export default function Die({ value, isHeld, holdDice }) {
  return (
    <div className={`die ${isHeld && 'die--isHeld'}`} onClick={holdDice}>
      <h2 className="die__value no-margin">{value}</h2>
    </div>
  )
}