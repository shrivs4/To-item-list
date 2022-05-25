import "./styles.css";
import { useState } from "react";

export default function App() {
  const [chng, updateChange] = useState("");
  const [lst, updateLst] = useState([]);

  const handleChange = (e) => {
    updateChange(e.target.value);
  };

  const handleClick = () => {
    updateLst([...lst, chng]);
    updateChange("");
  };
  return (
    <>
      <div className="App">
        <div className="head">
          <input
            onChange={handleChange}
            value={chng}
            placeholder="Enter items"
          ></input>
          <button onClick={handleClick} className="add">
            Add
          </button>
        </div>
        <div className="body">
          {lst.map((val, index) => {
            return (
              <ul>
                <li>
                  <span className="list">{index + 1}</span>
                  {val}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}
