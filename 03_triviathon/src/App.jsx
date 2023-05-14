import { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuestionsScreen from "./components/QuestionsScreen";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  // State to store fetched questions data from API
  const [questions, setQuestions] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  // Fetch data from Open Trivia DB API
  async function fetchData(url) {
    setIsLoading(true)
    try {
      const res = await fetch(`${url}`)
      const data = await res.json();
      setQuestions(data.results)
      setIsLoading(false)
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Conditionally render StartScreen if data is not fetched yet, otherwise render QuestionsScreen */}
          {!questions.length ? (
            <StartScreen fetchData={fetchData} />
          ) : (
            <QuestionsScreen questions={questions} startNewGame={startNewGame} />
          )}
          <Footer />
        </>
      )}
    </>
  )
}

