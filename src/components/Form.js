import "./Form.css";
import { useState } from "react";

export default function Form({ addColor }) {
  const [color, setColor] = useState("#505050");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addColor(color);
      }}
      className="form"
      style={{ backgroundColor: color }}
    >
      <label for="color">ColorPicker:</label>
      <input
        type="color"
        id="color"
        value={color}
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <hr />
      <label for="hex">Hex-Farbcode:</label>
      <input
        id="hex"
        type="text"
        value={color}
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <hr />
      <button type="submit">Add</button>
    </form>
  );
}
