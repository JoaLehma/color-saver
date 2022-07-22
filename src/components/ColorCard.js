import "./ColorCard.css";
export default function ColorCard({ color, text }) {
  return (
    <>
      <p className="color-cards" style={{ backgroundColor: `${color}` }}>
        <button>{text}</button>
      </p>
    </>
  );
}
