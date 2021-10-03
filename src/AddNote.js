import React, { useRef, useState } from 'react'
import ViewNotes from './ViewNotes'
import {useTheme}  from './ThemeContext'
function AddNote(props) {
    const[title, setitle]=useState("")
    const[content, setContent]=useState("")
    const[viewnote, setViewNote]=useState("")
    const[keepNote, setKeepNote]=useState([])
    const titleRef=useRef(null)
    const contentRef=useRef(null)
    const {themee:{  mainDivColor}}=useTheme()
    const publishNote=()=>{
       
      
        
        setKeepNote(oldnote=>
            {return[...oldnote, {Title:title, Content:content}]
        
        });
       
 setitle("")
 setContent("")
 setViewNote("view")
    }
  
    return (
        <div className="mainDiv" style={{backgroundColor: mainDivColor}}>
            <div className="addNoteDiv">
            <h2 className="headingNote">Add-Note <small style={{position:"relative", top:"-5px"}}>✍🏻</small></h2>
            <input type="text" placeholder="Enter Title" className="input" ref ={titleRef}
             onChange={()=>{setitle(titleRef.current.value)}} value={title}/>
            <textarea placeholder="Add your note" className="textarea" ref={contentRef}
             onChange={()=>{setContent(contentRef.current.value)}} value={content} />
             </div>
            <button className="buttonPublish" onClick={()=>{  setViewNote("")  
                publishNote()
        }}>publish</button>
            { console.log(viewnote)}
       {viewnote=="view" && props.display(keepNote) }
      
        </div>
    )
}

export default AddNote
