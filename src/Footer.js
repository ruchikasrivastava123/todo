import React from 'react'
import { useTheme } from './ThemeContext'

function Footer() {
    const {themee:{color, footerHeadingColor}}=useTheme()
    return (
    
           
               
                <footer className="footerDiv">
                <h4 style={ {position:"relative", top:"72px", color: color,left:"-220px" ,fontSize:"14px"}}>&copy; Ruchika Srivastava | 2021</h4>
            <div style={{position:"relative", top:"13px", left:"350px"}}>
                <small style={{  color: footerHeadingColor}}>social media connect</small>
                    <span  className="socialMedia">
                   
      <a href="https://www.linkedin.com/in/ruchika-srivastava-1170a914b/" style={{paddingLeft: "12px", cursor: "pointer", color: color, 
      fontSize:"20px"}}>
          <i class="fab fa-linkedin"></i></a>
      <a   href="https://github.com/ruchikasrivastava123" style={{paddingLeft: "14px", cursor: "pointer", color: color,  fontSize:"20px"}}>
          <i class="fab fa-github"></i></a>
      <a href="https://www.instagram.com/ruchika_writer/"  style={{paddingLeft: "14px", cursor: "pointer", color: color,  fontSize:"20px"}}>
          <i class="fab fa-instagram"></i></a>
      </span>
      </div>
                </footer>
                
            
       
    )
}

export default Footer
