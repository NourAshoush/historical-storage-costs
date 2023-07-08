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
    const [rawBytes, setRawBytes] = useState(1);

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
        setRawBytes(bytesInt);
    };

    const handleUnitChange = (unitInt: number) => {
        setUnit(unitInt);
    };

    useEffect(() => {
        setInputBytes(rawBytes * unit);
    }, [rawBytes, unit]);

    return (
        <>
            {/* ------------------ HeaderBar ------------------ */}

            <HeaderBar onToggle={handleModeToggle} />

            {/* -------------------- Title -------------------- */}

            <h1 id="title">
                {activeMode === "text" && "Cost To Store Text"}
                {activeMode === "file" && "Cost To Store Files"}
            </h1>

            {/* ------------------- Inputs -------------------- */}

            {activeMode === "text" && <InputBox onNewInput={handleNewInput} />}

            {activeMode === "file" && (
                <InputFileSize
                    onInputSize={handleByteInput}
                    onSelectUnit={handleUnitChange}
                />
            )}

            {/* ------------------- Slider -------------------- */}

            <Slider onYearChange={handleYearChange} />

            <h1 id="year-display">{yearDate}</h1>

            {/* ------------------- Results ------------------- */}

            {inputBytes != 0 && (
                <Results inputBytes={inputBytes} yearDate={yearDate} />
            )}

            {inputBytes === 0 && (
                <>
                    {activeMode === "text" && (
                        <p id="enter-data-label">
                            Enter text above to see how much it would cost
                        </p>
                    )}

                    {activeMode === "file" && (
                        <p id="enter-data-label">
                            Enter file above to see how much it would cost
                        </p>
                    )}
                </>
            )}

            {/* ------------------- Footer -------------------- */}

            <Footer />
        </>
    );
}

export default App;
