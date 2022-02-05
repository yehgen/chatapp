import './App.css';
import { useState } from "react";
import { FiSend, FiCamera } from "react-icons/fi";
import React from "react";

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
      <button className="cam" onClick={props.showCamera}>
        <FiCamera />
      </button>

      <input 
        className="text-input" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onKeyPress}>
      </input>

      <button className="send" onClick={sendMsg}>
        <FiSend />
      </button>
    </footer>
  );
}

export default TextInput;