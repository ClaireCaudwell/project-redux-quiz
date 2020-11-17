import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from '../reducers/quiz'

import { HappyImage } from './HappyImage'
import { SadImage } from './SadImage'

export const Summary = () => {
  const correctAnswers = useSelector((state) => state.quiz.answers.filter((answer) => answer.isCorrect === true).length)

  const dispatch = useDispatch()

  const restart = () => {
    dispatch(quiz.actions.restart())
  }

  const finalImage = () => {
    if (correctAnswers === 5) {
      return <HappyImage />
    } else {
      return <SadImage />
    }
  }

  return (
    <>
      <h1>Well done, you have completed our super difficult quiz!</h1>
      <div>{finalImage()}</div>
      <p>{`You've got ${correctAnswers} out of 5.`}</p>
      <button type="button" onClick={restart}>RESTART</button>
    </>
  )
}
