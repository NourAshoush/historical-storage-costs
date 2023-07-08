import "./InputFileSize.css";

interface InputFileSizeProps {
    onInputSize: (bytes: number) => void;
    onSelectUnit: (unit: number) => void;
}

function InputFileSize({ onInputSize, onSelectUnit }: InputFileSizeProps) {
    return (
        <>
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
                        onInputSize(e.target.value === '' ? 0 : parseInt(e.target.value));
                    }}
                ></input>

                <select
                    className="btn btn-secondary btn-lg dropdown-toggle"
                    id="input-unit-dropdown"
                    onChange={(e) => {
                        onSelectUnit(parseInt(e.target.value));
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
        </>
    );
}

export default InputFileSize;
