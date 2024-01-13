import React, { useState } from 'react'
import Game from '../Quiz/Game';
import Result from '../Quiz/Result';
import questions from '../Quiz/Questions';

const QuizPage = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const number = questions[step];

  const onClickVar = (index) => {
    setStep(step + 1);

    if(index === number.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="Quiz">
      {
        step !== questions.length 
        ?  <Game 
            step={step} 
            number={number} 
            questions={questions} 
            onClickVar={onClickVar}
          />
        : <Result 
          correct={correct} 
          questions={questions}
        />
      }
     
      
    </div>
  );
}

export default QuizPage;