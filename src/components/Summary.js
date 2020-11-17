import React from 'react'
import { useSelector } from 'react-redux'

export const Summary = () => {
  const correctAnswers = useSelector((state) => state.quiz.answers.filter((answer) => answer.isCorrect === true).length)

  return (
    <>
      <h1>Summary Page - replace with a Summary component (include restart button in summary</h1>
      <p>{`You've got ${correctAnswers} out of 5.`}</p>
    </>
  )
}
