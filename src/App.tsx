import "./App.css";
import { useEffect, useState } from "react";

import HeaderBar from "./components/HeaderBar/HeaderBar";
import InputBox from "./components/InputBox/InputBox";
import InputFileSize from "./components/InputFileSize/InputFileSize";
import Slider from "./components/Slider/Slider";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";

function App() {
    const [inputBytes, setInputBytes] = useState(0);
    const [yearDate, setYearDate] = useState(1956);
    const [activeMode, setActiveMode] = useState("text");
    const [unit, setUnit] = useState(0);

    const handleModeToggle = (mode: string) => {
        setActiveMode(mode);
        setInputBytes(0);
    };

    const handleNewInput = (length: number) => {
        setInputBytes(length);
    };

    const handleYearChange = (year: number) => {
        setYearDate(year);
    };

    const handleByteInput = (bytesInt: number) => {
        const bytes = bytesInt * unit;
        setInputBytes(bytes);
    };

    const handleUnitChange = (unitInt: number) => {
        const bytes = inputBytes * unitInt;
        setInputBytes(bytes);
        setUnit(unitInt);
    };

    useEffect(() => {
        // This code will run whenever `inputBytes` or `unit` changes.
        console.log(inputBytes, unit);
    }, [inputBytes, unit]);

    return (
        <>
            <HeaderBar onToggle={handleModeToggle} />
            <h1 id="title">
                {activeMode === "text"
                    ? "Cost To Store Text"
                    : "Cost To Store Files"}
            </h1>

            {activeMode === "text" ? (
                <InputBox onNewInput={handleNewInput} />
            ) : (
                <InputFileSize
                    onInputSize={handleByteInput}
                    onSelectUnit={handleUnitChange}
                />
            )}

            <Slider onYearChange={handleYearChange} />

            <h1 id="year-display">{yearDate}</h1>

            {inputBytes != 0 ? (
                <Results inputBytes={inputBytes} yearDate={yearDate} />
            ) : (
                <p id="enter-text">
                    Enter text above to see how much it would cost
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </p>
            )}

            <Footer />
        </>
    );
}

export default App;
