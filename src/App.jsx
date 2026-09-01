import { useState } from "react";
import { airlines } from "./data/data";

function App() {
  const[airline,setAirline] = useState("indigo")
  const[bagtype,setBagtype] = useState("")
  const[length,setLength] = useState("")
  const[width,setWidth] = useState("")
  const[height,setHeight] = useState("")
  const[weight,setWeight] = useState("")
const handleCheckBag = () => {
  console.log("Airline:", airline);
  console.log("Bag Type:", bagtype);
  console.log("Length:", length);
  console.log("Width:", width);
  console.log("Height:", height);
  console.log("Weight:", weight);
};
  return (
    <>
      <select
        name="airline"
        value={airline}
        onChange={(e) => setAirline(e.target.value)}
      >
        <option value="indigo">IndiGo</option>
        <option value="airindia">Air India</option>
      </select>
      <br/><br/> 

      <input
        type="radio"
        name="bagtype"
        value="cabin"
        checked={bagtype === "cabin"}
        onChange={(e) => setBagtype(e.target.value)}
      />
      Cabin Bag

      <input
        type="radio"
        name="bagtype"
        value="checked"
        checked={bagtype === "checked"}
        onChange={(e) => setBagtype(e.target.value)}
      />
      Checked Bag
      <br/><br/>

      <input
  type="number"
  placeholder="Length (cm)"
  value={length}
  onChange={(e) => setLength(e.target.value)}
/>

      <input
  type="number"
  placeholder="Width (cm)"
  value={width}
  onChange={(e) => setWidth(e.target.value)}
/>

      <input
  type="number"
  placeholder="Height (cm)"
  value={height}
  onChange={(e) => setHeight(e.target.value)}
/>
      <input
  type="number"
  placeholder="Weight (kg)"
  value={weight}
  onChange={(e) => setWeight(e.target.value)}
/>
      <br/><br/>

<button onClick={handleCheckBag}>Check My Bag</button>
    </>
  );
}

export default App;