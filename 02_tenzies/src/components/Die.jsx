export default function Die({ value, timeIsRunning, isHeld, holdDice }) {
  return (
    <div className={`die ${!timeIsRunning && 'die--not-started'} ${isHeld && 'die--isHeld'}`} onClick={holdDice}>
      <h2 className="die__value no-margin">{value}</h2>
    </div>
  )
}