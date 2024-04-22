import { useEffect, useState } from "react";


export default function QuestionTimeout({timeout , onTimeout}) {

    const [remainingTimeout,setRemainingTimeout] = useState(timeout);

    useEffect(() => {
        const timer =  setTimeout(onTimeout,timeout);

        return () => {
            clearTimeout(timer);
        }
    },[onTimeout,timeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTimeout(prevTimeout => prevTimeout - 100);
        },100)

        return () => {
            clearInterval(interval);
        }
    },[]);

    return (
        <progress id="question-timeout" max={timeout} value={remainingTimeout} />
    )
}