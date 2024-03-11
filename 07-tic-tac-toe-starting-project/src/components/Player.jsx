import { useState } from "react"

export default function Player({initialName,symbol,isActive}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing,setIsEditing] = useState(false);

    let buttonName = "Edit";
    let playerField = <span className="player-name">{playerName}</span>;

    if(isEditing)
    {
         buttonName = "Save";
         playerField = <input type="text" value={playerName} onChange={handleChange} required/>
    }

    function editNameButtonHandler()
    {
        setIsEditing((editing) => !editing); // => schedules a state update to true
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerField}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editNameButtonHandler}>{buttonName}</button>
      </li>
    )
}