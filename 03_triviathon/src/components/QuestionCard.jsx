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
      ` text-sm font-semibold bg-lightBg
        py-2 px-4 my-1 mx-1 rounded-2xl
        border border-solid border-primarydarkBlue
      ${isSelected && 'bg-selected'}
      ${!isSelected && gameFinished && 'bg-selected border-0 opcaity-50'}
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
    <div className=" w-full mb-8 pb-6 border-b border-solid border-red-500">
      <h3 className='mb-4 '>{correctText(question)}</h3>
      {optionButtons}
    </div>
  )
}

/* .container-questions-card {
  width: 100%;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #DBDEF0;
} 
*/