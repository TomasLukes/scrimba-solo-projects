export default function Die(props) {

  return (
    <div className={`die ${props.isHeld && 'die--isHeld'}`} onClick={props.holdDice}>
      <h2 className="die__value no-margin">{props.value}</h2>
    </div>
  )
}

