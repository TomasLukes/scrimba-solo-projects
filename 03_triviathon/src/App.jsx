import { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuestionsScreen from "./components/QuestionsScreen";
import Footer from "./components/Footer";

export default function App() {
  // State to store fetched questions data from API
  const [questions, setQuestions] = useState([])

  // Fetch data from Open Trivia DB API
  async function fetchData(url) {
    try {
      const res = await fetch(`${url}`)
      const data = await res.json();
      setQuestions(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  // Reset questions state when user starts new game
  function startNewGame() {
    setQuestions([])
  }

  return (
    <>
      {/* Conditionaly render StartScreen if data is not fetched yet, otherwise render QuestionsScreen */}
      {!questions.length ? 
        <StartScreen fetchData={fetchData} /> :
        <QuestionsScreen questions={questions} startNewGame={startNewGame} />
      }
      <Footer />
    </>
  )
}

