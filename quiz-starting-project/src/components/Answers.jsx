import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {

    var suffledAnswers = useRef();

    if(!suffledAnswers.current) {
        suffledAnswers.current = [...answers];
        suffledAnswers.current.sort((q1,q2) =>  Math.random() - 0.5);
    }

    return (
        <ul id='answers'>
            {suffledAnswers.current.map((answer) => {

                var cssClass = '';
                const isSelected = selectedAnswer === answer;

                if(answerState === 'answered' && isSelected)
                {
                    cssClass = 'selected';
                }

                if((answerState === 'correct' || answerState === 'wrong') && isSelected)
                {
                    cssClass = answerState;
                }

                return (<li key={answer} className='answer'>
                    <button onClick={() => onSelect(answer)} className={cssClass}>
                        {answer}
                    </button>
                </li>
                )
            })} 
            </ul>
    )
}