import { useRef, useState } from "react";
import ResultModal from "./ResultModal";


export default function TimerChallenge({title,targetTime}) {

    const timer = useRef();
    const dialog = useRef();

    const [remainingTime,setRemainingTime] = useState(targetTime * 1000);

    const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;


    if(remainingTime <= 0)
    {
        clearInterval(timer.current);
        setRemainingTime(targetTime * 1000);
        dialog.current.open();
    }

    function handleStart() {
      timer.current = setInterval(() => {  
        setRemainingTime((preRemainingTime) =>  preRemainingTime - 10);
      },10)
    }

    function handleStop() {
        clearTimeout(timer.current);
        dialog.current.open();
    }

    return (
        <>
            <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>   
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running ...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}