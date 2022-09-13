import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const BottomNavbar = ()=>{
    return(
        
        <div id="bottomnavbar">
            
            <ul>
  
         
                <li>
                    <Link to="/home">home</Link>
                </li>
                
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/'>Shop</Link>
                </li>
                <li>
                    <Link to='/'>Help</Link>
                </li>
                
                
            </ul>
        </div>    
        )
}
export default BottomNavbar