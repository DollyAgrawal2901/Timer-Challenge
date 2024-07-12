import { useState, useRef } from "react";

export default function Player() {

  const playerName = useRef();
  const [Name, setName] = useState();
  
  function handleClick() {
    setName(playerName.current.value)
    playerName.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {Name ?? "Entity"} </h2>
      <p>
        <input ref={playerName} type="text" required />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
