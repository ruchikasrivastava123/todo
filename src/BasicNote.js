import React from 'react'
import './App.css';
import TodoMain from './TodoMain';
import { useState } from 'react/cjs/react.development';
import AddNote from './AddNote';
import ViewNotes from './ViewNotes';
import {useNote} from './NoteContext'
import { useContext } from 'react';
import Footer from './Footer';
function BasicNote() {
    const[app, setApp]=useState("todo")
    const{viewnotes, setViewNotes}=useNote()
   
    
    const DisplayNote=(keepNote)=>
    {
     
   
      setViewNotes((prevstate)=>{ return[...prevstate, {title:keepNote[0].Title, content:keepNote[0].Content}]})
      // setViewNotes(()=>{return[ keepNote]})
      
      setApp("view")
     
     
     
    
    }
    return (
        <div className="App">
             <div className="buttonDiv">
      <button onClick={()=>{setApp("add")}}>Add note</button>
      <button onClick={()=>{setApp("view")}}>View notes</button>
      <button onClick={()=>{setApp("todo")}}>Todo</button>
    
      </div>
    
    {/* {console.log(viewnotes)} */}
 {app=="todo"&&<TodoMain/>}
        {app=="add"&&<AddNote display={DisplayNote}/>}
    {app=="view"&&<ViewNotes />}   
    <Footer/>
        </div>
    )
}

export default BasicNote
