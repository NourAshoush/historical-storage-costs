import './HeaderBar.css'
import { useEffect, useState } from 'react';

interface HeaderBarProps {
  onToggle: () => void;
}

function HeaderBar({ onToggle }: HeaderBarProps) {

  const [isRedActive, setIsRedActive] = useState(true);

  useEffect(() => {
    if (isRedActive) {
      ((document.getElementById("cost-text")) as HTMLElement).classList.add("active");
      ((document.getElementById("cost-file")) as HTMLElement).classList.remove("active");
    } else {
      ((document.getElementById("cost-text")) as HTMLElement).classList.remove("active");
      ((document.getElementById("cost-file")) as HTMLElement).classList.add("active");
    }
    document.documentElement.classList.toggle("green-mode");
    onToggle();
  }, [isRedActive]);

  return (
    <>
      <header id="header-bar">
        <div
          className="tab active"
          id="cost-text"
          onClick={() => setIsRedActive(true)}
        >
          Text Cost
        </div>
        <div
          className="tab"
          id="cost-file"
          onClick={() => setIsRedActive(false)}
        >
          File Cost
        </div>
      </header>
    </>
  );
}

export default HeaderBar;