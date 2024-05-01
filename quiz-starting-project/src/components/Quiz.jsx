import QUESTIONS from '../question.js';
import { useCallback, useState } from 'react';
import quizComplete from '../assets/quiz-complete.png';
import QuestionTimeout from './QuestionTimeout.jsx';

export default function Quiz() {

    const [userAnswers, setSelectedAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setSelectedAnswers((prevSelectedAnswers) => {
            return [...prevSelectedAnswers, selectedAnswer];
        })
    },[])

    const skipNextAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);

    if(isQuizCompleted) {
        return (
            <div id="summary">
                <img src={quizComplete} alt="Quiz Completed" />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }


    const suffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    suffledAnswers.sort((q1,q2) =>  Math.random() - 0.5);
    

    return (
       <div id='quiz'>
          <div id='question'>
            <QuestionTimeout 
                key={activeQuestionIndex}
                timeout={10000}
                onTimeout={skipNextAnswer}    
            />
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id='answers'>
                {suffledAnswers.map((answer) => (
                    <li key={answer} className='answer'>
                        <button onClick={() => handleSelectAnswer(answer)}>
                            {answer}
                        </button>
                    </li>
                ))} 
            </ul>
           </div>
       </div>
    )
    
}