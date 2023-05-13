/* eslint-disable react/prop-types */
import { useRef } from "react"
import Logo from "./Logo";
import { categories } from "../constants/categories";
import Slider from '@mui/material/Slider';

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

          <Slider
            name="numberOfQuestions"
            ref={numberOfQuestionsInputRef}
            aria-label="Default"
            valueLabelDisplay="auto"
            defaultValue={5}
            min={5}
            max={20}
            sx={{
              color: '#293264',
            }}
          />
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
            {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>

        <button type="submit" className="btn-start">Start quiz</button>
      </form>
    </div>
  )
}