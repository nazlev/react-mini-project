import React from 'react';
import style from './Quiz.module.scss'

const Result = ({correct, questions}) => {
  return (
    <div className={style.result}>
    <img alt='text' src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
    <h2>You guessed {correct} answers out of {questions.length}</h2>
    <a href='/'>
        <button>Try again</button>
    </a>
  </div>
  )
}

export default Result