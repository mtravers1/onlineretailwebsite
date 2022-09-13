import React from "react";
import { BrowserRouter as Routes, Router, Route, Link } from "react-router-dom";
import Navbar from "../components/navbar";

const ShopAll = ()=>{
    return(
        <div>
            
            <Navbar />
            <div id="tagline">
                <br/>
            <p>Tagline describing your e-shop</p>

            <input type="text"></input> <button type="submit">Submit</button>
            </div>
   
            <div>
                <h1>Featured Categories</h1>
                <p>sed ut perpiciatis unde omnis iste natus error sit voluptetem<br/>accusanrium doloremque laudantium</p>
                <div id="category">
                <span><img scr="./"></img><p>Category</p></span>
                <span><img></img><p>Category</p></span>
                <span><img></img><p>Category</p></span>
                <span><p id="shopp">ShopNow</p><p></p></span>
                </div>
                <div id="newsletter" >
                
                   <span style={{float:"left", border:"1px solid grey"}}><p>image</p>
                   
                   </span>
                   <span style={{border:"1px solid grey"}}>
                   <p  >newsletter<br/><input type="text" style={{width:"300px", height:"30px", border:"1px solid grey"}}/>
                    <button type="submit" style={{height:"35px"}}>Subscribe</button></p> 
                   </span>
                </div>
                <div id="prod">
            
                
                <span style={{width:"70%", float:"left"}}><h1>Header Reguarding your product</h1><br/>Sed ut perpiciatis unde omnis iste natus error voluptete accusanrium doloremque laudantiumtotam rem aperiam eaque ipsa quae ab illo<br/><button type="button"><Link to="/"/>Browse all</button></span>
                <span id="product">
                        <div>
                            <img>
                            </img>
                            <p>Product</p>
                        </div>
                        
                        <div><img>
                            </img><p>Product</p></div>

                        <div><img>
                            </img><p>Product</p></div>

                        <div><img>
                            </img><p>Product</p></div>

                        <div><img>
                            </img><p>Product</p></div>

                        <div><img>
                            </img><p>Product</p></div>
                </span>
                </div>
                <div id="bottom">
                <Navbar/>
                </div>
            </div>
        </div>
    )
}

export default ShopAll