import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development';
import './App.css';
function TodoList(props) {
    const [completedNotes, setCompletedNotes]=useState(false)
    const[strikeText,setStrikeText]=useState(false)
    useEffect(() => {
      
     setStrikeText(false)
    }, [props.noteText])
    return (
        <div>
               <ol className="listDiv">
                <li className="listItem" >
     {props.noteText &&               completedNotes && strikeText?<strike>{props.noteText}</strike>: props.noteText}
     {props.noteText &&      <i  onClick={()=>{props.onClickNote(props.id)
        }} class="fas fa-trash deleteIcon"></i>}
    {props.noteText &&         <i onClick={()=>{
                    completedNotes?setCompletedNotes(false):setCompletedNotes(true)

                    setStrikeText(true)
                }} class="fas fa-check-square doneCheck"></i>}
             
                </li>
               
                </ol>
        </div>
    )
}

export default TodoList
