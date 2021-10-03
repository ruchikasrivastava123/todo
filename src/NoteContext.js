import { createContext, useContext, useState  } from "react";


 const noteContext=createContext(null)


export function NoteProvider({children}){
    const[viewnotes, setViewNotes]=useState([])
  return(
      <>
    <noteContext.Provider value={{viewnotes, setViewNotes}}>
        {children}
    </noteContext.Provider>
    </>
  )
}
export function useNote()
{
    return useContext(noteContext)
}



