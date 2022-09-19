import React from "react"
import NavProduct from "../components/navproduct"

import {BrowserRouter as Link, Route, Router, Routes} from 'react-router-dom'
import Navbar from "../components/navbar"

const ProductPage = ()=>{
    return(
        <div>
            <NavProduct/>
            <div id="productpage">
                <hr/>


                <div id="productdetails">
                    <div><img style={{height:"1000px", width:"600px"}}/>
                    <div id="bottomimages">
                        <img style={{backgroundColor:"pink", height:"100px", width:"200px"}}/>
                        <img style={{backgroundColor:"pink", height:"100px", width:"200px"}}/>
                        <img style={{backgroundColor:"pink", height:"100px", width:"200px"}}/>

                    </div>
                    </div>
                    <div id="prodinfo">
                        <span>
                           <h1><hr/>Billy Jeans</h1><p>review</p> </span>
                        
                        <span style={{color:"pink"}}><hr/>$600 <select style={{float:"right"}}>
                            <option value="Select Size" >
                                Select Size
                            </option>
                        </select></span>

                        <span><hr/>product rating<p>review</p></span>
                        <span><button style={{backgroundColor:"pink"}}>add to bag</button></span>
                        
                        
                        </div>

                </div>
                <div style={{height:"200px"}}>
                    <hr/>
                <p>Shop our collection</p>
                <span id="shopcollection">
                    <span>
                        <img/>
                        <p>productName</p>

                    </span>
                    <span>
                    <img/>
                        <p>productName</p>
                        
                    </span>
                    <span>
                    <img/>
                        <p>productName</p>
                    </span>
                </span>
                </div>
                <hr/>

                <div >
                    <h1>Reviews</h1>
                    <div id="reviews">
                        <span>
                            dfgff
                        </span>
                        <span>
                            fdgf
                        </span>
                        

                    </div>

                </div>
                
            </div>
            <hr/>
            <Navbar/>
        </div>
    )
}

export default ProductPage