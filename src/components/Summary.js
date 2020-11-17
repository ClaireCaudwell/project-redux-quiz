import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const Summary = () => {
  const correctAnswers = useSelector((state) => state.quiz.answers.filter((answer) => answer.isCorrect === true).length)

  const dispatch = useDispatch()

  const restart = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <>
      <h1>Summary Page - replace with a Summary component (include restart button in summary</h1>
      <p>{`You've got ${correctAnswers} out of 5.`}</p>
      <button type="button" onClick={restart}>RESTART</button>
    </>
  )
}
