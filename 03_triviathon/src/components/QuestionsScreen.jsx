/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Confetti from 'react-confetti'
import QuestionCard from "./QuestionCard"
import Logo from "./Logo";

export default function QuestionsScreen({ questions, startNewGame }) {

  const [gameFinished, setGameFinished] = useState(false)
  const [options, setOptions] = useState([])
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)

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

  function handleClick(e) {
    setAnswers(prevAnswers =>
      prevAnswers.map(answer => {
        if (e.target.id === answer.id.toString()) {
          return {...answer, user_answer: e.target.value}
        } else {
          return answer}
    }))
  }

  function handleCheckAnswers() {
    setGameFinished(true)
    answers.map(answer => {
      answer.correct_answer === answer.user_answer && setScore(prevScore => prevScore +1)
    })
  }

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

  function shuffleOptions ( correct, incorrect ) {
    const mergedOptions = [...incorrect, correct]
    for (let i = mergedOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mergedOptions[i], mergedOptions[j]] = [mergedOptions[j], mergedOptions[i]];
    }
    return mergedOptions;
  }
  
  return (
    <div className="container-questions-screen">
      {score > 0 && <Confetti /> }

      <Logo />

      {questionCards}
      {gameFinished && <p className="text-results">{`You scored ${score}/5 correct answers`}</p>}
      {gameFinished ? 
        <button className="btn-check-answers" onClick={() => startNewGame()}>Play again</button> :
        <button className="btn-check-answers" onClick={handleCheckAnswers}>Check answers</button>
      }
    </div>
  )
}