import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from '../reducers/quiz'

import { Summary } from './Summary'
import { Header } from './Header'
import { Footer } from './Footer'
import rihanna from './assets/rihanna_img.jpeg'
import unicorns from './assets/Unicorn.jpg'
import zedonkey from './assets/Zedonkey.jpg'
import scooby from './assets/scooby-doo.png'
import hippo from './assets/hippo_img.jpg'

export const CurrentQuestion = () => {
  // selectors to be able to access the data in our store
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answer = useSelector((state) => state.quiz.answers.find((a) => a.questionId === question.id))
  const isQuizOver = useSelector((state) => state.quiz.quizOver)

  const dispatch = useDispatch()

  // Function called when an answer button is clicked, this function will
  // dispatch the submitAnswer action which is one of our reducers
  // we send in an object with the payload required: question id and answer index
  const submitAnswer = (id, index) => {
    dispatch(quiz.actions.submitAnswer({
      questionId: id,
      answerIndex: index
    }))
  }

  // function to dispatch the action goToNextQuestion which is a reducer
  // and will render the next question by updating the current question index
  const handleNext = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  // Function that will show whether the user chose the correct answer or not
  // this variable will be shown with template literals in side the <p className="answer-text">
  const statusAnswer = () => {
    if (answer.isCorrect) {
      return 'right'
    } else {
      return 'wrong'
    }
  }

  // Function to pick which image to show, based on the question id
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

  // if the property isQuizOver is true, we should show the summary page
  // we get this data from one of our selectors, which accesses this
  // property from the state.quiz object
  if (isQuizOver) {
    return <Summary />
  }

  return (
    <>
      <Header />
      <section className="main-container">
        <h1 className="question-text">Question: {question.questionText}</h1>
        <img className="question-image" src={imageSelector()} alt="Question related pic" />
        <div className="buttons-container">
          {question.options.map((option, index) => (
            <button className="answer-buttons" key={index} type="button" onClick={() => { submitAnswer(question.id, index) }}>{option}</button>
          ))}
        </div>

        {answer &&
          <div className="next-question-container">
            <p className="answer-text">{`The answer is ${statusAnswer()}, please go to the next question`}</p>
            <button className="next-button" type="submit" onClick={handleNext}>NEXT</button>
          </div>}

        <p className="question-progress">Question {question.id}/5</p>
      </section>
      <Footer />
    </>
  )
}
