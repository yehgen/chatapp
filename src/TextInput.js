import './App.css';
import { useState } from "react";

function TextInput(props) {
  const { send } = props;
  const [text, setText] = useState('')
  // let text = "";
  // function setText(newValue) {text = newValue};

  function sendMsg() {
    send(text);
    setText(""); // reset input field
  }

  function onKeyPress(e) {
    if (e.key === "Enter") {
      sendMsg()
    }
  }

  return (
    <footer className="footer">
      <input 
        className="text-input" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onKeyPress}>
      </input>

      <button className="send" onClick={sendMsg}>
        ↑
      </button>
    </footer>
  );
}

export default TextInput;