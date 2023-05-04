/* eslint-disable react/prop-types */
import he from 'he';

export default function QuestionCard({ id, question, options, answers, gameFinished, handleClick }) {
  // Correct text from fetched API with replacing HTML characters
  function correctText(text) {
    return he.decode(text)
  }

  // Create option buttons from data in options state
  const optionButtons = options.map((option, index) => {
    const isSelected = answers[id].user_answer === correctText(option)
    const isCorrect = answers[id].correct_answer === correctText(option)

    // Decide what class to use based on if its selected and correct answer
    const buttonClass = 
      `btn-answer
      ${isSelected && 'btn-selected'}
      ${!isSelected && gameFinished && 'btn-unselected'}
      ${isCorrect && gameFinished && 'btn-correct'}
      ${isSelected && !isCorrect && gameFinished && 'btn-incorrect'}`
 
    return <button
            className={buttonClass}
            key={index}
            id={id}
            value={correctText(option)}
            onClick={handleClick}>
              {correctText(option)}
            </button>
  })

  return (
    <div className="container-questions-card">
      <h3 className='text-question'>{correctText(question)}</h3>
      {optionButtons}
    </div>
  )
}