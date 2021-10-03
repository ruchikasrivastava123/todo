import logo from './logo.svg';
import './App.css';
import TodoMain from './TodoMain';
import { useState } from 'react/cjs/react.development';
import AddNote from './AddNote';
import ViewNotes from './ViewNotes';
import {useNote} from './NoteContext';
import { useTheme } from './ThemeContext';
import { useContext } from 'react';
import Footer from './Footer';
import BasicNote from './BasicNote';

function App() {
  const[app, setApp]=useState("todo")
    const{viewnotes, setViewNotes}=useNote()
   const{setBtnMode, btnmode, ThemeSet, themee:{bgColor,buttonColor, buttonBgColor}}=useTheme()
    
    const DisplayNote=(keepNote)=>
    {
     
   
      setViewNotes((prevstate)=>{ return[...prevstate, {title:keepNote[0].Title, content:keepNote[0].Content}]})
      // setViewNotes(()=>{return[ keepNote]})
      
      setApp("view")
     
     
     
    
    }
  return (
    <div className="App" style={{backgroundColor: bgColor}}>
    <div className="buttonDiv">
      {/* {console.log(themee)} */}
<button onClick={()=>{setApp("add")}} style={{color:buttonColor, backgroundColor:buttonBgColor, border:"none", padding:"5px",
 marginRight:"3px",cursor:"pointer", borderRadius:"2px"}} >Add note</button>
<button onClick={()=>{setApp("view")}} style={{color:buttonColor, backgroundColor:buttonBgColor, border:"none", padding:"5px",
 marginRight:"3px",cursor:"pointer", borderRadius:"2px"}} >View notes</button>
<button onClick={()=>{setApp("todo")}}style={{color:buttonColor, backgroundColor:buttonBgColor, border:"none", padding:"5px",
 marginRight:"3px",cursor:"pointer", borderRadius:"2px"}}>Todo List</button>
<button style={{color:buttonColor, backgroundColor:buttonBgColor, border:"none", padding:"5px",
 marginRight:"3px",cursor:"pointer", borderRadius:"2px"}} onClick={ThemeSet} >{btnmode} mode</button>
</div>

{/* {console.log(viewnotes)} */}
{app=="todo"&&<TodoMain/>}
{app=="add"&&<AddNote display={DisplayNote}/>}
{app=="view"&&<ViewNotes />}   
<Footer/>
</div>
  );
}

export default App;
