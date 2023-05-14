/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard"
import Logo from "./Logo";
import Result from "./Result";

export default function QuestionsScreen({ questions, startNewGame }) {
  const [gameFinished, setGameFinished] = useState(false)
  const [options, setOptions] = useState([])
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)

  // Runs only once when the component mounts, creating shuffled options and answers arrays
  useEffect(() => {
    const optionsArray = questions.map(question => {
      return shuffleOptions(question.correct_answer, question.incorrect_answers)
    })
    setOptions(optionsArray)

    const answersArray = questions.map((question, index) => {
      return {
        id: index,
        correct_answer: question.correct_answer, 
        user_answer: null}
    })
    setAnswers(answersArray)

  }, [])

  // Handle user click on one of the answer options
  function handleClick(e) {
    setAnswers(prevAnswers =>
      prevAnswers.map(answer => {
        if (e.target.id === answer.id.toString()) {
          return {...answer, user_answer: e.target.value}
        } else {
          return answer}
    }))
  }

  // Check if option chosen by user is correct or not
  function handleCheckAnswers() {
    setGameFinished(true)
    answers.map(answer => {
      answer.correct_answer === answer.user_answer && setScore(prevScore => prevScore +1)
    })
  }

  // Create question card elements base on data in state
  const questionCards = questions.map((question, index) => {
    if (questions.length === options.length) {
    return <QuestionCard
      key={index}
      id={index}
      question={question.question}
      options={options[index]}
      answers={answers}
      gameFinished={gameFinished}
      handleClick={handleClick}
      />
  }})

  // Merge incorrect and correct answers, returns array with all options shuffled
  function shuffleOptions ( correct, incorrect ) {
    const mergedOptions = [...incorrect, correct]
    for (let i = mergedOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mergedOptions[i], mergedOptions[j]] = [mergedOptions[j], mergedOptions[i]];
    }
    return mergedOptions;
  }
  
  return (
    <div className="container flex flex-col justify-items-center items-start mx-auto py-12 px-6">
      <Logo />
      {questionCards}

      <div className="flex flex-row w-full justify-between items-center">
        {gameFinished && <Result score={score} />}
        {gameFinished ? 
          <button 
            className="mx-auto mt-4 mb-8 px-10 py-4 rounded-full text-xl font-medium text-lightBg bg-btnBg hover:drop-shadow-md hover:scale-105"
            onClick={() => startNewGame()}>
              Play again
          </button> 
          :
          <button 
            className="mx-auto mt-4 mb-8 px-10 py-4 rounded-full text-xl font-medium text-lightBg bg-btnBg hover:drop-shadow-md hover:scale-105"
            onClick={handleCheckAnswers}>Check answers</button>
        }
      </div>

    </div>
  )
}