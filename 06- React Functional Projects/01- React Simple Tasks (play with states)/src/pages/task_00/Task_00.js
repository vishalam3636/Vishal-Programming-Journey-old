import React, { useState } from "react";

export default function Task_00({ displayProject }) {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay(!display);
    displayProject(!display);
  }

  return (
    <div className="mainPage">
      <h3>
        Practice Applications
        <h4>(By- Vishal)</h4>
        <small>Instagram- vishalam36</small>
      </h3>
      <div className="buttonContainer">
        <button onClick={handleDisplay}>
          {display ? "Hide Projects" : "Display Projects"}
        </button>
      </div>
    </div>
  );
}
