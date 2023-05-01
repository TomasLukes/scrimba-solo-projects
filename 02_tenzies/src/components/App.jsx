import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import Die from './Die'
import Logo from './Logo'
import Record from './Record'
import Timer from './Timer'

export default function App() {
  const [bestRecord, setBestRecord] = useState(loadBestRecord())
  const [time, setTime] = useState(0)
  const [timeIsRunning, setTimeIsRunning] = useState(false) 
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  // Check if all dice have the same value and are also held, when dice state is changed
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      setTimeIsRunning(false)

      if (time > 0 && (bestRecord === 0 || time < bestRecord)) {
        setBestRecord(time);
        saveBestRecord(time);
      }
    }
  }, [dice, time, bestRecord])

  useEffect(() => {
      let interval;
      if (timeIsRunning) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime +1)
        }, 1000)
      } else {
        clearInterval(interval)
      }
      return () => clearInterval(interval);
    }, [timeIsRunning]);


    function saveBestRecord(time) {
      localStorage.setItem('bestRecord', JSON.stringify(time))
  }

  function loadBestRecord() {
    const storedBestRecord = JSON.parse(localStorage.getItem('bestRecord'));
    if (storedBestRecord) {
      return storedBestRecord
    } else {
      saveBestRecord(0)
      return 0
    }
  }

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
      setTime(0)
    } else {
      setTimeIsRunning(true)
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
    if (timeIsRunning) {
      setDice(oldDice => oldDice.map(die => {
        return die.id === id ?
          {...die, isHeld: !die.isHeld} : 
          die
      }))
    }
  }

  const dieElements = dice.map(num => 
    <Die 
      key={num.id}
      value={num.value}
      timeIsRunning={timeIsRunning}
      isHeld={num.isHeld}
      holdDice={() => holdDice(num.id)}
    />
  )
 
  return (
    <main className="App">
      {tenzies && <Confetti />}
      <div className='game__container'>
        {!timeIsRunning &&
          <div className='heading__description'>
                <div className='flex'>
                  <h2 className='heading__description-title no-margin'>Welcome to <Logo /></h2>
                  <svg className='heading__info-icon' height="48" viewBox="0 0 48 48" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none"/><path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"/></svg>
                </div>
            <p className="heading__description-text no-margin">
              Roll, hold, and match dice numbers. Click to hold a die, keep rolling to win!
            </p>
          </div>
        }

        {timeIsRunning ? <Timer time={time} /> : <Record bestRecord={bestRecord} />}
        
        <div className='dice'>
          {dieElements}
        </div>
        <button className='button' onClick={rollDice}>{tenzies ? 'New game' : 'Roll'}</button>
      </div>
    </main>
  )
}