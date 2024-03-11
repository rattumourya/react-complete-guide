import { useState } from "react"

export default function Player({name,symbol}) {
    const [isEditing,setIsEditing] = useState(false);

    let buttonName = "Edit";
    let playerField = <span className="player-name">{name}</span>;

    if(isEditing)
    {
         buttonName = "Save";
         playerField = <input type="text" value={name}  required/>
    }

    function editNameButtonHandler()
    {
        setIsEditing((editing) => !editing); // => schedules a state update to true

    }
    return (
        <li>
            <span className="player">
                {playerField}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editNameButtonHandler}>{buttonName}</button>
      </li>
    )
}