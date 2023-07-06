import "./Slider.css";
import { useState } from "react";

interface SliderProps {
    onYearChange: (e: number) => void;
}

function Slider({ onYearChange }: SliderProps) {
    const [year, setYear] = useState(1956);

    return (
        <>
            <input
                type="range"
                min="1956"
                max="2022"
                step="1"
                id="slider"
                value={year}
                onChange={(e) => {
                    setYear(parseInt(e.target.value));
                    onYearChange(parseInt(e.target.value));
                }}
            ></input>
        </>
    );
}

export default Slider;
