import Navbar from "./navbar"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const NavProduct= ()=>{
    return(
        <div id="navbar" style={{display:"flex", justifyContent:"right"}}>
          <div>  
        <ul>

        
            <li>
                <Link to="/home">Home</Link>
            </li>
            
            <li>
                <Link to='/shopAll'>Shop All</Link>
            </li>
            <li>
                <Link to='/collection'>Collections</Link>
            </li>
            <li>
                <Link to='/'>Shoes</Link>
            </li>
            <li >
                <Link to='/' style={{borderRight:"none"}}>Purses</Link>
            </li>
            
            
            
            <button type='button' style={{backgroundColor:"pink", borderRadius:"5px", color:"white"}}><Link to='/yourcart' style={{borderRight:"none", color:"white"}}>Your Bag</Link></button>

        </ul>

        </div>
        
    </div> 
    )
}

export default NavProduct