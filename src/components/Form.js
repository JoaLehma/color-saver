import "./Form.css";

export default function Form() {
  return (
<form className="form" >
  <label for="color">ColorPicker</label>
    <input name="color" id="color" type="color" />
    <hr/>
    <label for="hex">Hex-Color-Code</label>
    <input id="hex" type="text" />
    <hr />
    <button>Add</button>
  </form>
  );
};
