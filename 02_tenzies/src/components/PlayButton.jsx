export default function PlayButton({ tenzies, timeIsRunning, rollDice}) {
  return (
    <button className='button' onClick={rollDice}>
      {tenzies ?
        'New game' : 
        timeIsRunning ? 'Roll' : `Start`}
    </button>
  )
}