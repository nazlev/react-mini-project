import React from 'react';
import style from './Quiz.module.scss'

const Game = ({step, number, questions, onClickVar}) => {
    const percentAge = Math.round((step / questions.length) * 100);

  return (
    <div className={style.block}>
      <div className={style.progress}>
        <div style={{ width: `${percentAge}%` }} className={style.progress__inner}></div>
      </div>
      <h1>{number.title}</h1>
      <ul>
        {
            number.variants.map((text, index) => 
                <li key={text} onClick={() => onClickVar(index)}>{text}</li>
            )
        }
      </ul>
    </div>
  )
}

export default Game