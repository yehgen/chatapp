import './App.css';
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";
import React from "react";
import { use100vh } from "react-div-100vh";
import Camera from "react-snap-pic"

// this is a Component
function App() {
  const height = use100vh();
  // useState creates a magic variable
  // here it's called "messages"
  // the initial value is an empty array []
  // "setMessage" is a function that is used to update "messages"
  const [messages, setMessage] = useState([]);
  const [showCamera, setShowCamera] = useState(false);
  // "send" runs whenever we click the send button
  function send(text) {
    if (!text) return;
    // we'll create a new message object 
    // text: text,
    const newMessage = {
      text,
      time: Date.now(),
      user: "Generous",
    };
    // set the "messages" to be a new array that 
    // contains the new message + all the old messages
    setMessage([newMessage, ...messages]);
  }

  // every time state changes, React "re-renders"
  // so this console.log will run again
  console.log(messages);

  function takePicture(img) {
    console.log(img)
    setShowCamera(false)
  }

  // returning HTML
  return (
    <div className="App" style={{height:height,minHeight:height,maxHeight:height}}>
      {showCamera && <Camera takePicture={takePicture} />}
      <header className="header">
        <div className="logo"></div>
        <span className="title">CHATTER!</span>
      </header>
      <span className="messages">
        {messages.map((msg, i) => {
          // loop over every message in the "messages" array
          // and return a Message component
          // we are "spreading all the items in "msg" into the props
          // "key" needs to be a unique value for each item
          return <Message {...msg} key={i} />;
          // return <div className="message">{msg.text}</div>
        })}
      </span>
      
      {/* send prop on TextInput = the send function */}
      <TextInput send={send} showCamera={()=>setShowCamera(true)}/>
    </div>
  );
}

export default App;
