import "./Results.css";
import { useEffect, useState } from "react";

interface ResultsProps {
  inputBytes: number;
  yearDate: number;
}

function Results({ inputBytes, yearDate }: ResultsProps) {
  const [cost, setCost] = useState("0");

  // 1956 - 2022
  const yearIndex = yearDate - 1956;
  const inflationIndex = 2022 - yearDate;
  const costPerTeraByte = [
    9200000000, 8400000000, 7600000000, 3600000000, 3518620000, 2282940000,
    1047260000, 259700000, 222350000, 185000000, 167932222, 150864444,
    133796667, 116728889, 99661111, 82593333, 65525556, 48457778, 31390000,
    24450000, 14970000, 9970000, 7480000, 3270000, 2790000, 1400000, 718000,
    433000, 214000, 128000, 48400, 24800, 8800, 4070, 2590, 1220, 1060, 609,
    406, 219, 200, 100, 70, 45, 36.7, 36.1, 35.5, 35, 28.3, 27.7, 25, 23.4,
    18.7, 16.2, 15.25, 14.3,
  ];
  const inflationMultiplier = [
    1.0331, 1.0625, 1.0699, 1.0882, 1.0993, 1.1103, 1.125, 1.1397, 1.1581,
    1.1912, 1.2279, 1.2794, 1.3493, 1.4265, 1.489, 1.5368, 1.6324, 1.8125,
    1.9779, 2.0919, 2.2279, 2.3971, 2.6691, 3.0294, 3.3419, 3.5478, 3.6618,
    3.8199, 3.9559, 4.0294, 4.1765, 4.3493, 4.5588, 4.8051, 5.0074, 5.1581,
    5.3125, 5.4485, 5.6029, 5.7684, 5.9007, 5.9926, 6.125, 6.3309, 6.511, 6.614,
    6.7647, 6.9449, 7.1801, 7.4118, 7.6229, 7.9156, 7.8874, 8.0168, 8.2698,
    8.441, 8.5646, 8.7035, 8.7139, 8.8238, 9.0118, 9.2364, 9.3992, 9.5151,
    9.9621, 10.7594, 11.1811,
  ];

  useEffect(() => {
    const trillion = 1e12;
    const costWithInflation = costPerTeraByte[yearIndex] * inflationMultiplier[inflationIndex];
    const normalizedCost = costWithInflation / trillion;

    const result = (inputBytes * normalizedCost).toFixed(12);
    setCost(result);
  }, [inputBytes, yearDate]);

  return (
    <>
      <div id="results-container">
        <p>It would cost about</p>
        <h1>{cost == "NaN" ? "Too Insignificant" : "$" + cost}</h1>
        <p>
          to store {inputBytes} {inputBytes == 1 ? "byte" : "bytes"} in the year
          of {yearDate}.
        </p>
      </div>
    </>
  );
}

export default Results;
