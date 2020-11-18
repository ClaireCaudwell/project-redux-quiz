import React from 'react'

import headerImage from './assets/pubquiz.jpg'

export const Header = () => {
  return (
    <header>
      <img className="header-image" src={headerImage} alt="PubQuiz" />
    </header>
  )
}
