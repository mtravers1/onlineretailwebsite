import React from "react"
import NavProduct from "../components/navproduct"

import {BrowserRouter as Link, Route, Router, Routes} from 'react-router-dom'
import Navbar from "../components/navbar"
import { useState } from 'react'
import Stars from "../components/stars"
import prodpic2 from '../pics/prodpic2.png'
import prodpic3 from '../pics/prodpic3.png'
import prodpic4 from '../pics/prodpic4.png'
import productpage from '../pics/productpage.png'
 

const ProductPage = ()=>{


    const changePic = ()=>{
        const selectPic={

        }
    }
    
    const [ pic, setPic]=useState(productpage)


    const handleClick=(e, img)=>{
        setPic(img)
        
        

        
        


    }
    return(
        <div>
            <div>
            <NavProduct/> 
            
            
            
            
            </div>
            <div id="productpage">
                <hr/>
                


                <div id="productdetails">
                    <div>
                        
                        <div id="productpic" style={{ width:"90%"}}>
                            <img style={{objectFit:"cover", maxWidth:"100%"}}src={pic}alt="mainphoto"/> 
                        </div>
                    
                    <div id="bottomimages">
                        
                        <img src={prodpic2} alt="pic1"  onClick={(e)=>handleClick(e, prodpic2)}/>
                        
                        <img src={prodpic4} alt="pic3"  onClick={(e)=>handleClick(e, prodpic4)}/>
                        <img src={productpage} alt="pic3"  onClick={(e)=>handleClick(e, productpage)}/>
                        
                    </div>
                    </div>
                    <div id="prodinfo">
                        
                        <span>
                           <h1 style={{fontSize:"54px"}}>Billy Jeans</h1><span style={{display:"flex", justifyContent:"left"}}><Stars/>  5 reviews </span></span>
                        
                        <span id="prodprice" style={{color:"pink",}}><hr/>$600 <select style={{float:"right"}}>
                            
                            <option value="Select Size" >
                                Select Size
                            </option>
                        </select></span>

                        <span style={{fontSize:"18px"}}><hr/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>
                        <span><button style={{backgroundColor:"pink", width:"200px", height:"50px", borderRadius:"2px", fontSize:"24px", color:"white"}}>Add to bag</button></span>
                        
                        
                        </div>

                </div>
                <div style={{}}>
                    <hr/>
                <p id="shopcollecthead">Shop our collection</p>
                <span id="shopcollection">
                    <span>
                        <img src=""/>
                        <span>
                        <p id="homeprice">$365</p>
                        <p>Product name</p>
                        </span>

                    </span>
                    <span>
                    <img src=""/>
                    <span >
                        <p id="homeprice">$365</p>
                        <p>Product name</p>
                        </span>
                        
                    </span>
                    <span>
                    <img src=""/>
                    <span>
                        <p id="homeprice">$365</p>
                        <p>Product name</p>
                        </span>
                    </span>
                </span>
                </div>
                <hr style={{marginTop:"30px"}}/>

                <div id="rev" >
                    <h1 style={{textAlign:"left"}}>Reviews</h1>
                    <div >
                        <div id="reviews">
                            <span>
                                <img style={{width:"10%"}} src="" alt="photo"/>
                            </span>
                            <span style={{width:"20%"}}>
                            <h1>Dianna</h1>
                            <p>11 Nov 2022</p>
                            <Stars/>
                           
                            </span>
                            <span style={{width:"70%", textAlign:"left", display:"flex", alignItems:"center"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </span>


                            
                        </div>
                        <div id="reviews">
                        <span>
                                <img style={{width:"10%"}} src="" alt="photo"/>
                            </span>
                        <span style={{width:"20%"}}>
                            <h1>Jessica</h1>
                            <p>15 May 2022</p>
                            <Stars/>
                            </span>
                            <span style={{width:"70%", textAlign:"left", display:"flex", alignItems:"center"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </span>
                        </div>
                        

                    </div>

                </div>
                
            </div>
            <hr/>
            <div id="botnav">
            <Navbar />
            </div>
        </div>
    )
}

export default ProductPage