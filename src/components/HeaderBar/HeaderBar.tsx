import "./HeaderBar.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont, faFileCode } from "@fortawesome/free-solid-svg-icons";

interface HeaderBarProps {
    onToggle: (mode: string) => void;
}

function HeaderBar({ onToggle }: HeaderBarProps) {
    const [activeMode, setActiveMode] = useState("text");

    useEffect(() => {
        if (activeMode === "text") {
            (document.getElementById("cost-text") as HTMLElement).classList.add(
                "active"
            );
            (
                document.getElementById("cost-file") as HTMLElement
            ).classList.remove("active");
            document.documentElement.classList.remove("green-mode");
            onToggle("text");
        } else {
            (
                document.getElementById("cost-text") as HTMLElement
            ).classList.remove("active");
            (document.getElementById("cost-file") as HTMLElement).classList.add(
                "active"
            );
            document.documentElement.classList.add("green-mode");
            onToggle("file");
        }
    }, [activeMode]);

    return (
        <>
            <header id="header-bar">
                <div
                    className="tab active"
                    id="cost-text"
                    onClick={() => setActiveMode("text")}
                >
                    <FontAwesomeIcon icon={faFont} />
                    &nbsp;Text Cost
                </div>
                <div
                    className="tab"
                    id="cost-file"
                    onClick={() => setActiveMode("file")}
                >
                    <FontAwesomeIcon icon={faFileCode} />
                    &nbsp;File Cost
                </div>
            </header>
        </>
    );
}

export default HeaderBar;
