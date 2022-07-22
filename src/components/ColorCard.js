import "./ColorCard.css";
export default function ColorCard({ color, text }) {
  return (
    <>
      <div className="color-cards" style={{ backgroundColor: `${color}` }}>
        <button>{text}</button>
      </div>
    </>
  );
}
