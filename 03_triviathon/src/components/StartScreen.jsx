/* eslint-disable react/prop-types */
import { useState } from "react"
import Logo from "./Logo";
import { categories } from "../constants/categories";
import { Slider, ToggleButtonGroup, ToggleButton, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function StartScreen({ fetchData }) {
  // Refs for taking value of inputs
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState('easy');
  const [category, setCategory] = useState('9');

  // When form is submited, url is created based on input values and passed to data fetching
  function handleSubmit(e) {
    e.preventDefault();
    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}`
    fetchData(url);
  }

  return (
    <div className="container mx-auto grid grid-cols-1 justify-items-center">
      <Logo />
      <p className="max-w-xs text-xl text-center">
        Unleash your brain power and challenge your knowledge!
      </p>
  
      <form 
      className="grid grid-cols-1 gap-6 bg-lightBg mt-12 py-10 px-12
      border-solid border-16 border-selected rounded-tr-2xl rounded-bl-2xl"
      onSubmit={handleSubmit}
      >
        <div className="flex flex-col text-left gap-3 ">
          <label>Number of Questions:</label>
          <Slider
            value={numberOfQuestions}
            onChange={(e, value) => setNumberOfQuestions(value)}
            aria-label="Default"
            valueLabelDisplay="auto"
            min={5}
            max={20}
            sx={{
              color: '#293264',
            }}
          />
        </div>

        <div className="flex flex-col text-left gap-3">
          <label>Select Difficulty:</label>

          <ToggleButtonGroup
            exclusive
            value={difficulty}
            onChange={(e, value) => setDifficulty(value)}
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

        <div className="flex flex-col text-left gap-3">
          <label>Select category:</label>

          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map(category => (
                <MenuItem key={category.id} value={category.id}>
                  {category.label}
                </MenuItem>
                )
              )}
            </Select>
          </FormControl>

{/*           <Autocomplete
            disablePortal
            options={categories}
            value={category}
            onChange={(e, value) => setCategory(value?.id)}
            isOptionEqualToValue={(option, value) => option.id === value}
            sx={{ width: 300 }}
            renderInput={(category) => <TextField {...category} label="Category" />}
          /> */}
        </div>

        <button
          className="mx-auto mt-4 px-10 py-4 rounded-full text-xl font-medium text-lightBg bg-btnBg hover:drop-shadow-md hover:scale-105"
          type="submit"
        >
          Start quiz
        </button>
      </form>
    </div>
  )
}