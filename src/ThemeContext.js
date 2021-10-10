import { createContext } from "react";
import { useContext, useState } from "react";


const themeContext=createContext(null)
const theme={
    light:{
  color:"#374151",
  bgColor:"white",
  buttonColor:"white",
  buttonBgColor:"#374151",
  mainDivColor:"#FFF5EE",
  footerHeadingColor: "#EF4444"
    },

    dark:{
        color:"white",
        bgColor:"#374151",
        buttonColor:"#374151",
        buttonBgColor:"white",
        mainDivColor:"white",
        footerHeadingColor:"#d0f0c0"
    }
}
export function ThemeProvider({children})
{
    const[btnmode, setBtnMode]=useState("dark")
    const[themee, setThemee]=useState(theme.light)
    const ThemeSet=()=>{
       if( btnmode==="dark")
       {
       
      
       setThemee(theme.dark)
       setBtnMode("light")
    }
       else
       {
      
       setThemee(theme.light)
       setBtnMode("dark")
       }
    }
    return(
    <>
<themeContext.Provider value={{theme, btnmode, setBtnMode, ThemeSet, themee}}>
{children}
</themeContext.Provider>
</>)
}

export function useTheme()
{
return useContext(themeContext)
}