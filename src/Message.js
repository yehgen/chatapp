import React from "react";

function Message(props) {
  return (
  // add date
  // add pic {props.name}
  // text message
    <div>
      {/* add username above message */}
      <span className="username">{props.user}</span>
      <div className="message tip">{props.text}</div>
    </div>
  )
}

export default Message;