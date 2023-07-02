import "./InputBox.css";

interface InputBoxProps {
  onNewInput: (e: number) => void;
}

function InputBox({ onNewInput }: InputBoxProps) {


  return (
    <>
      <input
        id="input-box"
        className="form-control form-control-lg"
        type="text"
        placeholder="Enter Text Here"
        onKeyUp={(e: any) => onNewInput(e.target.value.length)}
      ></input>
    </>
  );
}

export default InputBox;
