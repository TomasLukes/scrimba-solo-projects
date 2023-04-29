import { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuestionsScreen from "./components/QuestionsScreen";

export default function App() {
  const [questions, setQuestions] = useState([])

  async function fetchData(url) {
    try {
      const res = await fetch(`${url}`)
      const data = await res.json();
      setQuestions(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  function startNewGame() {
    setQuestions([])
  }

  return (
    <>
      {questions.length > 1 ? 
        < QuestionsScreen questions={questions} startNewGame={startNewGame} /> : 
        <StartScreen fetchData={fetchData} />}
    </>
  )
}

