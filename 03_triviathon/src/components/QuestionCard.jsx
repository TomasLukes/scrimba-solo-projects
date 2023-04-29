/* eslint-disable react/prop-types */
import he from 'he';

export default function QuestionCard( {id, question, options, answers, gameFinished, handleClick} ) {

  function correctText(text) {
    return he.decode(text)
  }

  const optionButtons = options.map((option, index) => {
    const isSelected = answers[id].user_answer === correctText(option)
    const isCorrect = answers[id].correct_answer === correctText(option)
 
    return <button
            className={
              `btn-answer
              ${isSelected && 'btn-selected'}
              ${!isSelected && gameFinished && 'btn-unselected'}
              ${isCorrect && gameFinished && 'btn-correct'}
              ${isSelected && !isCorrect && gameFinished && 'btn-incorrect'}
              `}

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