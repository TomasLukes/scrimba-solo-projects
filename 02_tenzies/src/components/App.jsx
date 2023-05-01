import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import Die from './Die'

export default function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  // Check if all dice have the same value and are also held
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log('You won')
      }
  }, [dice])

  function generateNewDie(id) {
    return {
      id: id, 
      value: Math.ceil(Math.random() * 6), 
      isHeld: false
    }
  }

  function rollDice() {
    if (tenzies) {
      setDice(allNewDice)
      setTenzies(false)
    } else {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? 
          die : generateNewDie(die.id)
    }))}
  }

  function allNewDice() {
    let diceArray = []
    for (let i = 0; i < 10; i++) {
      diceArray.push(generateNewDie(i))
    }
    return diceArray
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        {...die, isHeld: !die.isHeld} : 
        die
    }))
  }

  const dieElements = dice.map(num => 
    <Die 
      key={num.id}
      value={num.value}
      isHeld={num.isHeld}
      holdDice={() => holdDice(num.id)}
    />
  )
 
  return (
    <main className="App">
      {tenzies && <Confetti />}
      <div className='description'>
        <h1 className="description__title no-margin">Tenzies</h1>
        <p className="description__text">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className='dice'>
        {dieElements}
      </div>
      <button className='button' onClick={rollDice}>{tenzies ? 'New game' : 'Roll'}</button>
    </main>
  )
}