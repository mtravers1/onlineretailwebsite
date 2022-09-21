import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const HomeNavbar = ()=>{
    return(
        <div id="homenavbar">
            
            <li style={{float:"left"}}>
                    new in
                </li>
            
            <ul>
            
                
                <li>
                    <Link to='/about' style={{padding:"10px"}}>shop V</Link>
                </li>
                <li>
                    <Link to="/collection">Collection</Link>
                </li>
                <li>
                    <a href=''>Shoes</a>
                </li>
                <li>
                    <a href=''>Purses</a>
                </li>
                <li>
                    <input type="text" style={{width:"400px", borderRadius:"20px", height:"20px"}} ></input>
                </li>
               
                
  
                
               
            </ul>
        </div>    
        )
}
export default HomeNavbar