/* eslint-disable react/prop-types */
import { useState } from "react"
import Logo from "./Logo";
import { categories } from "../constants/categories";
import { Slider, ToggleButtonGroup, ToggleButton, Autocomplete, TextField } from '@mui/material';

export default function StartScreen({ fetchData }) {
  // Refs for taking value of inputs
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState(null);
  const [category, setCategory] = useState(null);

  // When form is submited, url is created based on input values and passed to data fetching
  function handleSubmit(e) {
    e.preventDefault();
    console.log(numberOfQuestionsSliderRef.current.value)
    console.log(difficultyInputRef.current.value)
    console.log(categoryInputRef.current.value)
    const numberOfQuestions = numberOfQuestionsSliderRef.current.value || 5;
    const difficulty = difficultyInputRef.current.getValue();
    const category = categoryInputRef.current.getAttribute('data-value');

    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}`
    fetchData(url);
  }

  return (
    <div className="container-start-screen">
      <Logo />
      <p className="text-description">Unleash your brain power and challenge your knowledge!</p>
  
      <form onSubmit={handleSubmit}>
        <div>
          <label>Number of Questions:</label>
          <Slider
            name="numberOfQuestions"
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

        <div className="flex flex-col text-left">
          <label>Select Difficulty:</label>

          <ToggleButtonGroup
            exclusive
            aria-label="Difficulty"
            sx={{
              color: '#293264',
            }}
          >
            <ToggleButton value="easy" sx={{ width: '100px', color: "#293264" }}>
              Easy
            </ToggleButton>
            <ToggleButton value="medium" sx={{ width: '100px', color: "#293264" }}>
              Medium
            </ToggleButton>
            <ToggleButton value="hard" sx={{ width: '100px', color: "#293264" }}>
              Hard
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div className="flex flex-col text-left">
          <label>Select category:</label>

          <Autocomplete
            disablePortal
            options={categories}
            sx={{ width: 300 }}
            renderInput={(category) => <TextField {...category} label="Category" />}
          />
        </div>

        <button type="submit" className="btn-start">Start quiz</button>
      </form>
    </div>
  )
}