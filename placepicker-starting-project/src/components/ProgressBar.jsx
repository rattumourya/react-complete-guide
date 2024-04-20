import { useState , useEffect} from "react";
const TIMER = 3000;
export default function ProgressBar() {
    const [remainingTime,setRemainingTime] = useState(TIMER);
    
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 10); //this line will be executed every 10ms
    },10)

    return () => {
      clearInterval(interval); //this line will be executed when the component is unmounted, clearing the interval
    }
  })
  return (
    <progress  value={remainingTime} max={TIMER} />
  )
}