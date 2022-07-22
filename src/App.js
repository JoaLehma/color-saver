import "./App.css";
import ColorCard from "./components/ColorCard";

function App() {
  const colors = [
    {
      id: "100",
      colorCode: "#3f2051",
    },

    {
      id: "101",
      colorCode: "#8b2e6c",
    },

    {
      id: "102",
      colorCode: "#2b96c8",
    },

    {
      id: "103",
      colorCode: "#2bcac8",
    },

    {
      id: "104",
      colorCode: "#a7e2e2",
    },

    {
      id: "105",
      colorCode: "#dfaea0",
    },

    {
      id: "106",
      colorCode: "#d9c97f",
    },

    {
      id: "107",
      colorCode: "#1a497a",
    },

    {
      id: "108",
      colorCode: "#156543",
    },

    {
      id: "109",
      colorCode: "#798722",
    },
  ];

  return (
    <div className="app">
      <h1>Color Saver App</h1>
      <div className="color-cards">
        {colors.map((color) => (
          <ColorCard
            key={color.id}
            text={color.colorCode}
            color={color.colorCode}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
