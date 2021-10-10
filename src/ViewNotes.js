import React from 'react'

import {useNote} from './NoteContext'
import './App.css';
import { useTheme } from './ThemeContext';
function ViewNotes() {
    const{viewnotes}=useNote()
    const{themee:{mainDivColor}}=useTheme()
     const color=["#FFFACD","#D3D3D3","#E0FFFF","#E6E6FA","#BC8F8F"]
  let num=-1;

 
    return (
        <div className="mainDiv" style={{backgroundColor: mainDivColor}}>
       
    
       <h2 className="headingSavedNote">Your Notes <small style={{position:"relative", top:"-4px"}}>📝</small></h2>
       <div className="viewNotes">
           {viewnotes.map((notes,index)=>
    
 index%2===0  ?
  <>
 <h2 style={{display:'none'}}>{num===4?num=0:num++}</h2> 
 <br/>   
    <li key={index} style={{backgroundColor:color[num] }} className="listStyle">
           
         
            <b  className="listHeading">
                {notes.title}</b><br/>
       { 
       <small className="noteContent" >{notes.content}</small>}
    
      
           </li>
           <br/>
           </>
          :null

           )}
           </div>
        </div>
    )
}

export default ViewNotes
