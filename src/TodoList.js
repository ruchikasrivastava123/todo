import React from 'react'
import { useState } from 'react/cjs/react.development';
import './App.css';
function TodoList(props) {
    const [completedNotes, setCompletedNotes]=useState(false)
    return (
        <div>
               <ol className="listDiv">
                <li className="listItem" >
                   { completedNotes?<strike>{props.noteText}</strike>: props.noteText}
              <i  onClick={()=>{props.onClickNote(props.id)}} class="fas fa-trash deleteIcon"></i>
               <i onClick={()=>{
                    completedNotes?setCompletedNotes(false):setCompletedNotes(true)
                }} class="fas fa-check-square doneCheck"></i>
             
                </li>
               
                </ol>
        </div>
    )
}

export default TodoList
