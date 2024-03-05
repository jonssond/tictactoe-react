import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [nameUpdate, setNameUpdate] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleChangeName() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, nameUpdate);
    }
  }

  function handleChange(event) {
    setNameUpdate(event.target.value);
  }

  let playerEdit = <span className="player-name">{nameUpdate}</span>;
  let buttonState = "Edit";

  if (isEditing) {
    playerEdit = (
      <input type="text" required value={nameUpdate} onChange={handleChange} />
    );
    buttonState = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerEdit}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleChangeName}>{buttonState}</button>
    </li>
  );
}
