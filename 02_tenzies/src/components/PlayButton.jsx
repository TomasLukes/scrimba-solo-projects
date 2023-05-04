export default function PlayButton({ tenzies, timeIsRunning, rollDice }) {
  return (
    <button className='play-button' onClick={rollDice}>
      {tenzies ?
        'New game' : 
        timeIsRunning ? 'Roll' : `Start`}
    </button>
  )
}