export default function Die(props) {

  return (
    <div className={`die-box ${props.isHeld && 'isHeld'}`} onClick={props.holdDice}>
      <h2>{props.value}</h2>
    </div>
  )
}

