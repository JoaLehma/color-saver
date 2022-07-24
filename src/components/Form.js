import "./Form.css";
import React, { useState } from "react";

export default function Form() {
  const [inputValue, setInputValue] = useState("#dd0e72");

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <form className="form">
      <label for="color">ColorPicker:</label>
      <input
        type="color"
        id="color"
        value={inputValue}
        onChange={handleInputValue}
      />
      <hr />
      <label for="hex">Hex-Farbcode:</label>
      <input
        id="hex"
        type="text"
        value={inputValue}
        onChange={handleInputValue}
      />
      <hr />
      <button>Add</button>
    </form>
  );
}
