import "./App.css";
import ColorCard from "./components/ColorCard";
import Form from "./components/Form";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [colors, setColors] = useState([
    {
      id: nanoid(),
      colorCode: "#3f2051",
    },

    {
      id: nanoid(),
      colorCode: "#8b2e6c",
    },

    {
      id: nanoid(),
      colorCode: "#2b96c8",
    },

    {
      id: nanoid(),
      colorCode: "#2bcac8",
    },

    {
      id: nanoid(),
      colorCode: "#a7e2e2",
    },

    {
      id: nanoid(),
      colorCode: "#dfaea0",
    },

    {
      id: nanoid(),
      colorCode: "#d9c97f",
    },

    {
      id: nanoid(),
      colorCode: "#1a497a",
    },

    {
      id: nanoid(),
      colorCode: "#156543",
    },

    {
      id: nanoid(),
      colorCode: "#798722",
    },
  ]);

  function addNewColor(newColor) {
    setColors([...colors, { id: nanoid(), colorCode: newColor }]);
    console.log(setColors);
  }

  return (
    <div>
      <h1>Color Saver App</h1>
      <Form addColor={addNewColor} />
      <div className="app">
        {colors.map((color) => (
          <ColorCard
            key={nanoid()}
            text={color.colorCode}
            color={color.colorCode}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
