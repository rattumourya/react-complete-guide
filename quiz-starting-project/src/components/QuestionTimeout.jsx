import { useEffect, useState } from "react";


export default function QuestionTimeout({timeout , onTimeout}) {

    const [remainingTimeout,setRemainingTimeout] = useState(timeout);

    useEffect(() => {
        setTimeout(onTimeout,timeout);
    },[onTimeout,timeout]);

    useEffect(() => {
        setInterval(() => {
            setRemainingTimeout(prevTimeout => prevTimeout - 10);
        })
    },[]);

    return (
        <progress id="question-timeout" max={timeout} value={remainingTimeout} />
    )
}