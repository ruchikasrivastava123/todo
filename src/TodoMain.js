import React, { useRef, useState } from 'react'
import './App.css';

import { useTheme } from './ThemeContext';
import TodoList from './TodoList';
function TodoMain() {
   
   
    const[currentNote, setCurrentNote]=useState("")
    const[notes, setNotes]=useState([])
    const {themee:{mainDivColor}}=useTheme()
    const InputRef=useRef(null)
    const InititalNote=()=>{
       
       setCurrentNote(InputRef.current.value)
      
    }
    const AllNotes=()=>{
       
        setNotes(notes=>{return [...notes, currentNote]})
      
        setCurrentNote("")
      
    }
   const deleteNote=(id)=>{
    
           setNotes(oldNotes=>
         {   return oldNotes.filter((note,index)=>
         {
             return index!==id}

         )
         }
           )
         
   }
    return (
        <div className="mainDiv" style={{backgroundColor: mainDivColor}}>
            <h2 className="headingTodo">Todo-List</h2>
            <input className="input" type="text" onChange={InititalNote} ref={InputRef}
            placeholder="Add your todo" value={currentNote}/>
           <i className="buttonTodo" onClick={AllNotes} class="fas fa-plus-circle addIcon"></i>
            <div className="noteList">
               {notes.map((note, index)=> 
           {    return <TodoList noteText={note} id={index} onClickNote={deleteNote}/>}
              
                )}
                
            </div>
        </div>
    )
}

export default TodoMain
