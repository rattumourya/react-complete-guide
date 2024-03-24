import {useState} from "react";

export default function Player() {

  const [playerName,setPlayerName]  = useState('')
  const [isSubmitted,setSubmit] = useState(false);

  function handleChange(event){
    setPlayerName(event.target.value);
    setSubmit(false);
  }

  return (
    <section id="player">
      <h2>Welcome {isSubmitted ? playerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} />
        <button onClick={() => setSubmit(true)}>Set Name</button>
      </p>
    </section>
  );
}
