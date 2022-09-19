import Navbar from "./navbar"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const NavProduct= ()=>{
    return(
        <div id="navbar">
            
        <ul>

        <li>
                <button type='button' style={{backgroundColor:"pink"}}><Link to='/yourcart'>Your Bag</Link></button>
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

export default NavProduct