import "./App.css";
import { useState } from "react";

import InputBox from "./components/InputBox";
import Slider from "./components/Slider";
import Results from "./components/Results";

function App() {
  const [inputBytes, setInputBytes] = useState(0);
  const [yearDate, setYearDate] = useState(1956);

  const handleNewInput = (length: number) => {
    setInputBytes(length);
  };

  const handleYearChange = (year: number) => {
    setYearDate(year);
  };

  return (
    <>
      <h1 id="title">Cost To Store Data</h1>
      <InputBox onNewInput={handleNewInput} />
      <Slider onYearChange={handleYearChange} />
      <h1 id="year-display">{yearDate}</h1>
      {inputBytes != 0 ? (
        <Results inputBytes={inputBytes} yearDate={yearDate} />
      ) : (
        <p id="enter-text">Enter text above to see how much it would cost</p>
      )}
    </>
  );
}

export default App;
