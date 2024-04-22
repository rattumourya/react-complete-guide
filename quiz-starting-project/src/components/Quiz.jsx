import QUESTIONS from '../question.js';
import { useState } from 'react';

export default function Quiz() {

    const [selectedAnswer, setSelectedAnswers] = useState([]);
    const activeQuestionIndex = selectedAnswer.length;

    function handleSelectAnswer(selectedAnswer) {
        setSelectedAnswers((prevSelectedAnswers) => {
            return [...prevSelectedAnswers, selectedAnswer];
        })
    }

    return (
       <div id='quiz'>
          <div id='questions'>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id='answers'>
                {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
                    <li key={answer} className='answer'>
                        <button onClick={handleSelectAnswer}>
                            {answer}
                        </button>
                    </li>
                ))} 
            </ul>
           </div>
       </div>
    )
    
}