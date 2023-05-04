import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import Die from './components/Die'
import GameHeader from './components/GameHeader'
import Logo from './components/Logo'
import Record from './components/Record'
import Timer from './components/Timer'
import Result from './components/Result'
import PlayButton from './components/PlayButton'

export default function App() {
  const [bestRecord, setBestRecord] = useState(loadBestRecord())
  const [recordBeaten, setRecordBeaten] = useState(false)
  const [time, setTime] = useState(0)
  const [timeIsRunning, setTimeIsRunning] = useState(false) 
  const [dice, setDice] = useState(() => allNewDice())
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
        setRecordBeaten(true);
        setBestRecord(time);
        saveBestRecord(time);
      }
    }
  }, [dice, time, bestRecord])

  // Timer
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

  // Load/Save best time in localStorage
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

  // Generate new die object with random value between 1-6
  function generateNewDie(id) {
    return {
      id: id, 
      value: Math.ceil(Math.random() * 6), 
      isHeld: false
    }
  }

  // Roll dice based on game's conditions
  function rollDice() {
    if (tenzies) {
      setRecordBeaten(false);
      setDice(allNewDice());
      setTenzies(false);
      setTime(0);
    } else {
      setTimeIsRunning(true);
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie(die.id);
        })
      );
    }
  }

  // Create array of 10 new dice at start of the game
  function allNewDice() {
    let diceArray = []
    for (let i = 0; i < 10; i++) {
      diceArray.push(generateNewDie(i))
    }
    return diceArray
  }

  // When die is clicked, it change if its held or not
  function holdDice(id) {
    if (timeIsRunning) {
      setDice(oldDice => oldDice.map(die => {
        return die.id === id ?
          {...die, isHeld: !die.isHeld} : 
          die
      }))
    }
  }

  // Create die elements based on dice state
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
      {/* Redner confetti when player beaten previous record */}
      {tenzies && recordBeaten && <Confetti />}

      <div className='game__container'>

        {!timeIsRunning ? 
          <GameHeader/> : <Logo />
        }

        {tenzies && <Result recordBeaten={recordBeaten} /> }
        {timeIsRunning ? <Timer time={time} /> : <Record bestRecord={bestRecord} />}
        
        <div className='dice'>
          {dieElements}
        </div>

        <PlayButton tenzies={tenzies} timeIsRunning={timeIsRunning} rollDice={rollDice} />
      </div>

    </main>
  )
}