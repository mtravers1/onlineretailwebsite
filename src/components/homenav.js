import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const HomeNavbar = ()=>{
    return(
        <div id="homenavbar">
            
            <ul>
  
            <li>
                    <input type="text" style={{width:"400px", borderRadius:"20px", height:"20px"}} ></input>
                </li>
                <li>
                    <Link to='/about' style={{padding:150}}>shop V</Link>
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
                <span style=
                {{float:"left", paddingTop:70}}>Newin</span>
               
            </ul>
        </div>    
        )
}
export default HomeNavbar