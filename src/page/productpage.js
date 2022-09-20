import React from "react"
import NavProduct from "../components/navproduct"

import {BrowserRouter as Link, Route, Router, Routes} from 'react-router-dom'
import Navbar from "../components/navbar"
import { useState } from 'react'

const ProductPage = ()=>{


    const changePic = ()=>{
        const selectPic={

        }
    }
    
    const [ pic, setPic]=useState('mike')


    const handleClick=()=>{
        setPic('lary')
        


    }
    return(
        <div>
            <NavProduct/>
            <div id="productpage">
                <hr/>
                


                <div id="productdetails">
                    <div><div id="productpic" style={{height:"1000px", width:"90%"}}/>
                    <div id="bottomimages">
                        
                        <img style={{backgroundColor:"pink", height:"100px"}} onClick={()=>handleClick()}/>
                        
                        <img style={{backgroundColor:"pink", height:"100px"}} onClick={()=>handleClick()}/>
                        <img style={{backgroundColor:"pink", height:"100px"}} onClick={()=>handleClick()}/>
                        
                    </div>
                    </div>
                    <div id="prodinfo">
                        
                        <span>
                           <h1 style={{fontSize:"54px"}}><hr/>Billy Jeans</h1><p>review</p> </span>
                        
                        <span id="prodprice" style={{color:"pink",}}><hr/>$600 <select style={{float:"right"}}>
                            
                            <option value="Select Size" >
                                Select Size
                            </option>
                        </select></span>

                        <span style={{fontSize:"18px"}}><hr/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>
                        <span><button style={{backgroundColor:"pink", width:"200px", height:"50px", borderRadius:"2px", fontSize:"24px", color:"white"}}>Add to bag</button></span>
                        
                        
                        </div>

                </div>
                <div style={{height:"200px"}}>
                    <hr/>
                <p id="shopcollecthead">Shop our collection</p>
                <span id="shopcollection">
                    <span>
                        <img/>
                        <span>
                        <p id="homeprice">$365</p>
                        <p>Product name</p>
                        </span>

                    </span>
                    <span>
                    <img/>
                    <span >
                        <p id="homeprice">$365</p>
                        <p>Product name</p>
                        </span>
                        
                    </span>
                    <span>
                    <img/>
                    <span>
                        <p id="homeprice">$365</p>
                        <p>Product name</p>
                        </span>
                    </span>
                </span>
                </div>
                <hr style={{marginTop:"30px"}}/>

                <div >
                    <h1 style={{textAlign:"left"}}>Reviews</h1>
                    <div >
                        <div id="reviews">
                            <span style={{width:"20%"}}>
                            <h1>Dianna</h1>
                            <p>11 Nov 2022</p>
                            <p>rating</p>
                           
                            </span>
                            <span style={{width:"90%", textAlign:"left"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </span>


                            
                        </div>
                        <div id="reviews">
                        <span style={{width:"20%"}}>
                            <h1>Jessica</h1>
                            <p>15 May 2022</p>
                            <p>rating</p>
                            </span>
                            <span style={{width:"90%", textAlign:"left"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </span>
                        </div>
                        

                    </div>

                </div>
                
            </div>
            <hr/>
            <Navbar/>
        </div>
    )
}

export default ProductPage