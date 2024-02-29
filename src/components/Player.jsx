import { useState } from "react";

export default function Player({ name, symbol, ...props }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleChangeName() {
    setIsEditing(true);
  }

  let playerEdit = <span className="player-name">{name}</span>;
  let buttonState = "Edit";

  if (isEditing) {
    playerEdit = <input type="text" required />;
    buttonState = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerEdit}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleChangeName}>{buttonState}</button>
    </li>
  );
}
