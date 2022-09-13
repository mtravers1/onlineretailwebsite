import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const Navbar = ()=>{
    return(
        
        <div id="navbar">
            
            <ul>
  
            <li>
                    <button type='button'><Link to='/yourcart'>Your Cart</Link></button>
                </li>
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
export default Navbar