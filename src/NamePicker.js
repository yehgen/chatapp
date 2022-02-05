import {useState} from 'react'
import './App.css';
import { FiEdit2, FiUser} from "react-icons/fi";
import React from "react";

function NamePicker(props) {
  const [editName, setEditName] = useState(false)
  const [name, setName] = useState("Guest") // "" works, revisit if Guest is needed

  function save() {
    props.save(name)
    setEditName(false)   
  }

  function onKeyPress(e) {
    if (e.key === "Enter") {
      save()
    }
  }

  if (editName) {
    return <div className="editUser">
      <input 
        className="nameInput"
        value={name}
        onChange={e=>setName(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <button className="saveUser" onClick={save}>Done</button>
    </div>
  } else {
    return (
      <div className="editUser">
        <FiUser />
        <div>{name}</div>
        <button className="editPen" onClick={()=>setEditName(true)}>
          <FiEdit2 />
        </button>
      </div>
    )
  }
}

export default NamePicker