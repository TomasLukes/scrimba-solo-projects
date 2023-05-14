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
      ` text-sm font-semibold
        py-2 px-4 my-1 mx-1 rounded-2xl
        border border-solid border-primarydarkBlue
      ${!gameFinished && !isSelected && 'bg-lightBg'}
      ${!gameFinished && isSelected && 'bg-selected'}
      ${!isSelected && gameFinished && 'border-0 opacity-50'}
      ${isCorrect && gameFinished && 'bg-correct'}
      ${isSelected && !isCorrect && gameFinished && 'bg-incorrect'}`
 
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
    <div className=" w-full pb-4 border-b border-solid border-bottomBorder">
      <h3 className='mb-4 '>{correctText(question)}</h3>
      {optionButtons}
    </div>
  )
}