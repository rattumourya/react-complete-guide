import QUESTIONS from '../question.js';
import { useCallback, useState } from 'react';
import quizComplete from '../assets/quiz-complete.png';
import Question from './Question.jsx';

export default function Quiz() {

    const [userAnswers, setSelectedAnswers] = useState([]);
    const [answerState,setAnswerState] = useState('');
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;


    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {

        setAnswerState("answered");
        setSelectedAnswers((prevSelectedAnswers) => {
            return [...prevSelectedAnswers, selectedAnswer];
        })

        setTimeout(() => {
            if(QUESTIONS[activeQuestionIndex].answers[0] === selectedAnswer)
            {
                setAnswerState("correct");
            }else {
                setAnswerState("wrong");
            }
            setTimeout(() => {
                setAnswerState('');
            },2000)
        },1000)

    },[activeQuestionIndex])

    const skipNextAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);

    if(isQuizCompleted) {
        return (
            <div id="summary">
                <img src={quizComplete} alt="Quiz Completed" />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }
    

    return (
       <div id='quiz'>
        <Question
            key={activeQuestionIndex}
            questionText={QUESTIONS[activeQuestionIndex].text}
            answers={QUESTIONS[activeQuestionIndex].answers}
            selectedAnswer={userAnswers[userAnswers.length - 1]}
            answerState={answerState}
            onSelect={handleSelectAnswer}
            skipAnswer={skipNextAnswer}
        />
       </div>
    )
    
}