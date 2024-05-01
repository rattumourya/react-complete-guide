import  QuestionTimeout  from './QuestionTimeout.jsx';
import  Answers  from './Answers.jsx'

export default function Question({questionText, answers, selectedAnswer, answerState, onSelect, skipAnswer}) {

    return (
        <div id='question'>
            <QuestionTimeout
                timeout={10000}
                onTimeout={skipAnswer}
            />
            <h2>{questionText}</h2>
            <Answers
                answers={answers}
                selectedAnswer={selectedAnswer}
                answerState={answerState}
                onSelect={onSelect}
            />
        </div>
    )

}