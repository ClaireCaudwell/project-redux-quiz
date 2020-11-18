import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from '../reducers/quiz'

import { HappyImage } from './HappyImage'
import { SadImage } from './SadImage'

export const Summary = () => {
  // selector to get the amount of correct answers the user got, we get this data from the
  // answers array inside the main state.quiz object
  const correctAnswers = useSelector((state) => state.quiz.answers.filter((answer) => answer.isCorrect === true).length)

  const dispatch = useDispatch()

  const restart = () => {
    dispatch(quiz.actions.restart())
  }

  // Function to show an image depending on the amount of correct answers the user got
  const finalImage = () => {
    if (correctAnswers === 5) {
      return <HappyImage />
    } else {
      return <SadImage />
    }
  }

  return (
    <section className="main-container summary-container">
      <h1 className="summary-text">Well done, you have completed our super difficult quiz!</h1>
      <div>{finalImage()}</div>
      <p className="scoretext">{`You've got ${correctAnswers} out of 5.`}</p>
      <button className="next-button" type="button" onClick={restart}>RESTART</button>
    </section>
  )
}
