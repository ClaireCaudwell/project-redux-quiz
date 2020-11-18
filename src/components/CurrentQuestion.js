import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from '../reducers/quiz'

import { Summary } from './Summary'
import rihanna from './assets/rihanna_img.jpeg'
import unicorns from './assets/Unicorn.jpg'
import zedonkey from './assets/Zedonkey.jpg'
import scooby from './assets/scooby-doo.png'
import hippo from './assets/hippo_img.jpg'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answer = useSelector((state) => state.quiz.answers.find((a) => a.questionId === question.id))
  const isQuizOver = useSelector((state) => state.quiz.quizOver)

  const dispatch = useDispatch()

  const submitAnswer = (id, index) => {
    dispatch(quiz.actions.submitAnswer({
      questionId: id,
      answerIndex: index
    }))
  }

  const handleNext = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  const statusAnswer = () => {
    if (answer.isCorrect) {
      return 'right'
    } else {
      return 'wrong'
    }
  }

  const imageSelector = () => {
    if (question.id === 1) {
      return rihanna
    } else if (question.id === 2) {
      return unicorns
    } else if (question.id === 3) {
      return zedonkey
    } else if (question.id === 4) {
      return scooby
    } else if (question.id === 5) {
      return hippo
    }
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  if (isQuizOver) {
    return <Summary />
  }

  return (
    <>
      <h1>Question: {question.questionText}</h1>
      <img src={imageSelector()} alt="Rihanna" />
      <div>
        {question.options.map((option, index) => (
          <button key={index} type="button" onClick={() => { submitAnswer(question.id, index) }}>{option}</button>
        ))}
      </div>

      {answer &&
        <div>
          <p>{`The answer is ${statusAnswer()}, please go to the next question`}</p>
          <button type="submit" onClick={handleNext}>Next question</button>
        </div>}

      <p>Question {question.id}/5</p>
    </>
  )
}
