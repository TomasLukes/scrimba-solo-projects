/* eslint-disable react/prop-types */
import { useRef } from "react"
import Logo from "./Logo";

export default function StartScreen({ fetchData }) {
  // Refs for taking value of inputs
  const numberOfQuestionsInputRef = useRef();
  const difficultyInputRef = useRef();
  const categoryInputRef = useRef();

  // When form is submited, url is created based on input values and passed to data fetching
  function handleSubmit(e) {
    e.preventDefault();
    const numberOfQuestions = numberOfQuestionsInputRef.current.value || 5;
    const difficulty = difficultyInputRef.current.querySelector('input:checked').value;
    const category = categoryInputRef.current.value;

    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}`
    fetchData(url);
  }

  return (
    <div className="container-start-screen">
      <Logo />
      <p className="text-description">Unleash your brain power and challenge your knowledge!</p>
  
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="numberOfQuestions">Number of Questions:</label>
          <input type="number" name="numberOfQuestions" className="questions-input" min='5' max='20' placeholder="5" ref={numberOfQuestionsInputRef}/>
        </div>

        <fieldset ref={difficultyInputRef}>
          <legend>Select Difficulty:</legend>
        
          <div>
            <input type="radio" name="difficulty" id="easy" value='easy' defaultChecked/>
            <label htmlFor="easy">Easy</label>
          </div>
          <div>
            <input type="radio" name="difficulty" id="medium" value='medium'/>
            <label htmlFor="medium">Medium</label>
          </div>
          <div>
            <input type="radio" name="difficulty" id="hard" value='hard'/>
            <label htmlFor="hard">Hard</label>
          </div>
        </fieldset>

        <div className="container-select">
          <label htmlFor="category">Select category:</label>
          <select name="category" id="categoryDropdown" ref={categoryInputRef}>
            <option value="9">General Knowledge</option>
            <option value="10">Books</option>
            <option value="11">Film</option>
            <option value="12">Music</option>
            <option value="14">Television</option>
            <option value="15">Video Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Computers</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
          </select>
        </div>

        <button type="submit" className="btn-start">Start quiz</button>
      </form>
    </div>
  )
}