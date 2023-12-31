import "./Results.css";
import { useEffect, useState } from "react";

interface ResultsProps {
    inputBytes: number;
    yearDate: number;
}

function Results({ inputBytes, yearDate }: ResultsProps) {
    const [cost, setCost] = useState("0");
    const [costFormatted, setCostFormatted] = useState("0");
    const [bytesFormatted, setBytesFormatted] = useState("0");

    // 1956 - 2022
    const yearIndex = yearDate - 1956;
    const inflationIndex = 2022 - yearDate;
    const costPerTeraByte = [
        9200000000, 8666670000, 8133330000, 7600000000, 3600000000, 3579660000,
        3559310000, 3538970000, 3518620000, 2282940000, 1047260000, 850370000,
        653480000, 456590000, 259700000, 241030000, 222350000, 203680000,
        185000000, 171040000, 157070000, 143110000, 129140000, 115180000,
        101210000, 87250000, 73280000, 59320000, 45350000, 31390000, 24450000,
        14970000, 9970000, 7480000, 3270000, 2790000, 1400000, 718000, 433000,
        214000, 128000, 48400, 24800, 8800, 4070, 2590, 1220, 1060, 609, 406,
        219, 200, 100, 70, 45, 36.7, 36.1, 35.5, 35, 28.3, 27.7, 25, 23.4, 18.7,
        16.2, 15.25, 14.3,
    ];
    const inflationMultiplier = [
        1.0331, 1.0625, 1.0699, 1.0882, 1.0993, 1.1103, 1.125, 1.1397, 1.1581,
        1.1912, 1.2279, 1.2794, 1.3493, 1.4265, 1.489, 1.5368, 1.6324, 1.8125,
        1.9779, 2.0919, 2.2279, 2.3971, 2.6691, 3.0294, 3.3419, 3.5478, 3.6618,
        3.8199, 3.9559, 4.0294, 4.1765, 4.3493, 4.5588, 4.8051, 5.0074, 5.1581,
        5.3125, 5.4485, 5.6029, 5.7684, 5.9007, 5.9926, 6.125, 6.3309, 6.511,
        6.614, 6.7647, 6.9449, 7.1801, 7.4118, 7.6229, 7.9156, 7.8874, 8.0168,
        8.2698, 8.441, 8.5646, 8.7035, 8.7139, 8.8238, 9.0118, 9.2364, 9.3992,
        9.5151, 9.9621, 10.7594, 11.1811,
    ];

    useEffect(() => {
        const units = ["B", "KB", "MB", "GB", "TB"];
        let index = 0;
        let bytes = inputBytes;
        while (bytes >= 1000) {
            bytes /= 1000;
            index++;
        }
        if (index >= units.length) {
            index = units.length - 1;
        }
        const result = bytes.toFixed(2) + " " + units[index];
        setBytesFormatted(result);
    }, [inputBytes]);

    useEffect(() => {
        const [integerPart, decimalPart] = cost.split(".");
        const formattedIntegerPart = integerPart.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
        );
        const result = decimalPart
            ? `${formattedIntegerPart}.${decimalPart}`
            : formattedIntegerPart;
        setCostFormatted(result);
    }, [cost]);

    useEffect(() => {
        const trillion = 1e12;
        const costWithInflation =
            costPerTeraByte[yearIndex] * inflationMultiplier[inflationIndex];
        const normalizedCost = costWithInflation / trillion;

        const result = (inputBytes * normalizedCost);
        var resultFormatted = result.toFixed(0);

        if (result < 1) {
            resultFormatted = result.toFixed(12);
        }
        if (result >= 1) {
            resultFormatted = result.toFixed(4);
        }
        if (result >= 10) {
            resultFormatted = result.toFixed(3);
        }
        if (result >= 100) {
            resultFormatted = result.toFixed(2);
        }
        if (result >= 1000) {
            resultFormatted = result.toFixed(1);
        }
        if (result >= 10000) {
            resultFormatted = result.toFixed(0);
        }

        setCost(resultFormatted);
    }, [inputBytes, yearDate]);

    return (
        <>
            <div id="results-container">
                <p className="result-p">It would cost about</p>
                <h1 className="result-h">
                    {cost == "NaN" ? "Too Insignificant" : "$" + costFormatted}
                </h1>
                <p className="result-p">
                    to store {bytesFormatted} in the year of {yearDate}.
                </p>
            </div>
        </>
    );
}

export default Results;
