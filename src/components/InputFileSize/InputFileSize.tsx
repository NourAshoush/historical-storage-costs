import "./InputFileSize.css";

interface InputFileSizeProps {
    onInputSize: (bytes: number) => void;
    onSelectUnit: (unit: number) => void;
    onInputFile: (file: File) => void;
}

function InputFileSize({
    onInputSize,
    onSelectUnit,
    onInputFile,
}: InputFileSizeProps) {
    const clearInputFile = () => {
        const inputFile = document.getElementById(
            "input-file"
        ) as HTMLInputElement;
        inputFile.value = "";
    };

    const clearInputSize = () => {
        const inputNumSize = document.getElementById(
            "input-num-size"
        ) as HTMLInputElement;
        const inputUnitDropdown = document.getElementById(
            "input-unit-dropdown"
        ) as HTMLSelectElement;
        inputNumSize.value = "";
        inputUnitDropdown.value = "0";
    };

    return (
        <>
            <div className="parent-container">
                <div className="container">
                    <input
                        type="file"
                        id="input-file"
                        className="form-control form-control-lg"
                        onChange={(e) => {
                            e.target.files?.length == 1
                                ? onInputFile(e.target.files[0])
                                : onInputSize(0);
                            clearInputSize();
                        }}
                    />
                </div>

                <p id="or">or</p>

                <div className="container">
                    <input
                        id="input-num-size"
                        className="form-control form-control-lg"
                        type="number"
                        min={1}
                        placeholder="Enter File Size"
                        defaultValue={1}
                        pattern="[0-9]*"
                        onChange={(e) => {
                            onInputSize(
                                e.target.value === ""
                                    ? 0
                                    : parseInt(e.target.value)
                            );
                            clearInputFile();
                        }}
                    ></input>

                    <select
                        className="btn btn-secondary btn-lg dropdown-toggle"
                        id="input-unit-dropdown"
                        onChange={(e) => {
                            onSelectUnit(parseInt(e.target.value));
                            clearInputFile();
                        }}
                    >
                        <option value={0} defaultChecked>
                            Select Unit
                        </option>
                        <option value={1}>Bytes (B)</option>
                        <option value={1000}>Kilobytes (KB)</option>
                        <option value={1000000}>Megabytes (MB)</option>
                        <option value={1000000000}>Gigabytes (GB)</option>
                        <option value={1000000000000}>Terabytes (TB)</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default InputFileSize;
