export default function Die({ value, timeIsRunning, isHeld, holdDice }) {
  return (
    <div
    className= {`die ${!timeIsRunning && 'die--not-started'} ${isHeld && 'die--isHeld'}`}
    onClick={timeIsRunning ? holdDice : () => alert("You must start game first")} >
      <h2 className="die__value no-margin">{value}</h2>
    </div>
  )
}