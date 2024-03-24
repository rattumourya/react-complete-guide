import {useRef, useState} from "react";

export default function Player() {

  const currentPlayerName = useRef();
  const [playerName,setPlayerName]  = useState(null)

  function onSubmit(){
    setPlayerName(currentPlayerName.current.value);
    currentPlayerName.current.value = "";
  }


  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input 
          type="text"
          ref={currentPlayerName} />
        <button onClick={onSubmit}>Set Name</button>
      </p>
    </section>
  );
}
