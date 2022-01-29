import './App.css';
import TextInput from "./TextInput";
import {useState} from "react";
import Message from "./Message";

function App() {
  const [messages, setMessage] = useState([])
  function send(text) {
    const newMessage = {
      text,
      time: Date.now(),
      user: "Generous",
    };
    setMessage([newMessage, ...messages]);
  }
  console.log(messages);

  return (
    <div className="App">
      <header className="header">
        <div className="logo"></div>
        <span className="title">CHATTER!</span>
      </header>

      <span className="messages">
        {messages.map((msg) => {
          console.log({...msg})
          return <Message {...msg} />;
          // return <div className="message">{msg.text}</div>
        })}
      </span>
            
      <TextInput send={send} />

    </div>
  );
}

export default App;
