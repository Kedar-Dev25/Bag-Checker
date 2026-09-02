import { useState } from "react";
import airlines from "./data/data";

function App() {
  const[airline,setAirline] = useState("indigo")
  const[bagtype,setBagtype] = useState("")
  const[length,setLength] = useState("")
  const[width,setWidth] = useState("")
  const[height,setHeight] = useState("")
  const[weight,setWeight] = useState("")
  const [result, setResult] = useState(null);
const handleCheckBag = () => {

const index = airlines.findIndex(
  (item) => item.id === airline
);
  const selectedAirline = airlines[index]
  const checkedRule = selectedAirline.checked
  const bagLength = Number(length);
  const bagWidth = Number(width);
  const bagHeight = Number(height);
  const bagWeight = Number(weight);

  const total = bagLength + bagWidth + bagHeight;
    if (bagtype == "cabin") {

        const cabinRule = selectedAirline.cabin;

        if (
          cabinRule.height < bagHeight || cabinRule.length < bagLength || cabinRule.width < bagWidth || cabinRule.maxWeight < bagWeight ||cabinRule.maxTotalDimensions < total) {
          setResult({
          status: "not-allowed",
          message: "Your bag is not allowed"
        });
        } else {
          setResult({
          status: "allowed",
          message: "Your bag is allowed"
        });
        }

    } else if (bagtype == "checked") {
        const checkedRule = selectedAirline.checked;

        if (
          checkedRule.maxWeight < bagWeight || checkedRule.maxTotalDimensions < total) {
          setResult({
          status: "not-allowed",
          message: "Your bag is not allowed"
        });
        } else {
          setResult({
          status: "allowed",
          message: "Your bag is allowed"
        });
      }
    }
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

<button onClick={handleCheckBag}>Check My Bag</button>'
{result && (
  <div>
    <h2>
      {result.status === "allowed" ? "🟢 Allowed" : "🔴 Not Allowed"}
    </h2>

    <p>{result.message}</p>
  </div>
)}
    </>
  );
}

export default App;