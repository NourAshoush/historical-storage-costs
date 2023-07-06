import "./InputFileSize.css";

function InputFileSize() {
    
    // write a function to trigger the dropdown menu
    const triggerDropdown = () => {
        // get the dropdown menu
        const dropdownMenu = document.querySelector(".dropdown-menu");
        dropdownMenu?.classList.toggle("show");
        // get the dropdown button
        const dropdownButton = document.querySelector(".dropdown-toggle");
        // get the dropdown menu items
        const dropdownMenuItems = document.querySelectorAll(".dropdown-item");


        // change this to get the selected dropdown item
        dropdownMenuItems.forEach((item) => {
            item.addEventListener("click", () => {
                dropdownButton!.innerHTML = item.innerHTML;
            });
        });
    };
    

    return (
        <>
            <div className="container">
                <input
                    className="form-control form-control-lg"
                    id="inputFileSize"
                    type="number"
                    min={0}
                    placeholder="Enter file size here"
                ></input>

                <div className="dropdown">
                    <button
                        className="btn btn-secondary btn-lg dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={triggerDropdown}
                    >
                        Select Size Unit
                    </button>
                    <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <li>
                            <option className="dropdown-item" value={1}>
                                Bytes
                            </option>
                        </li>
                        <li>
                            <option className="dropdown-item" value={1000}>
                                Kilobytes
                            </option>
                        </li>
                        <li>
                            <option className="dropdown-item" value={1000000}>
                                Megabytes
                            </option>
                        </li>
                        <li>
                            <option className="dropdown-item" value={1000000000}>
                                Gigabytes
                            </option>
                        </li>
                        <li>
                            <option className="dropdown-item" value={1000000000000}>
                                Terabytes
                            </option>
                        </li>
                        <li>
                            <option className="dropdown-item" value={1000000000000000}>             
                                Petabytes
                            </option>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default InputFileSize;
