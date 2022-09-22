import React from "react";
import { BrowserRouter as Routes, Router, Route, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import BottomNavbar from "../components/bottomnav";
import ProductPage from "./productpage";



const ShopAll = (props)=>{

    const click = ()=>{
        console.log('clicked')
    }
    return(
        <div id="shopal">
            <div style={{backgroundColor:"lightgrey"}}>
              
            <Navbar style={{justifyContent:"right"}}/>
            
            
            
                    
                
            <div id="tagline">
                <br/>
            <p style={{textAlign:"center"}}>Tagline describing your e-shop</p>
            
            <hr style={{width:"300px"}}/>
            <br/>
            <div style={{textAlign:"center"}}>
            <input type="text"></input> <button type="submit">Submit</button></div>
            </div>
            </div>
            <div>

                <h1>Featured Categories</h1>
                <p>sed ut perpiciatis unde omnis iste natus error sit voluptetem<br/>accusanrium doloremque laudantium</p>
                <div id="category">
                <span><img scr="./"></img><p>Category</p></span>
                <span><img></img><p>Category</p></span>
                <span><img></img><p>Category</p></span>
                <span id="shopp"><span ><p>shop now</p></span></span>
                {/* <span><span id="shopp">ShopNow</span></span> */}
                </div>
                <div id="newsletter" >
                
                   <span style={{float:"left", border:"1px solid grey"}}><img  style={{display:"flex", justifyContent:"center", alignItems:"center"}} src="" alt="photo"/>
                   
                   </span>
                   <span style={{border:"1px solid grey"}}>
                   <p  >newsletter<br/><input type="text" style={{width:"300px", height:"30px", border:"1px solid grey"}}/>
                    <button type="submit" style={{height:"35px", width:"100px"}}>Subscribe</button></p> 
                   </span>
                </div>
                <div id="prod">
            
                
                <span style={{width:"70%", float:"left"}}><h1>Header Reguarding your product</h1>
                <br/>Sed ut perpiciatis unde omnis iste natus error voluptete accusanrium doloremque laudantiumtotam rem aperiam eaque ipsa quae ab illo<br/>
                <button type="button">
                    <Link to="/browseall" style={{textDeclearation:"none"}}>Browse all</Link>
                    </button></span>
                <span >
                        <div id="product">
                            <div>
                                
                                <Link to="/productpage">
                            <img>
                                
                            </img>
                            </Link>
                           
                            
                            
                            <span style={{float:"right"}}>
                            <h1 >Product</h1>
                            <p>rating</p>
                            <p>price</p>
                            
                            </span>
                            </div>


                            <div>
                            <Link to="/productpage">
                            <img>
                                
                            </img>
                            </Link>
                            <span style={{float:"right"}}>
                            <h1 >Product</h1>
                            <p>rating</p>
                            <p>price</p>
                           
                            </span>
                            </div>

                            <div>
                            <Link to="/productpage">
                            <img>
                                
                            </img>
                            </Link>
                            <span style={{float:"right"}}>
                            <h1 >Product</h1>
                            <p>rating</p>
                            <p>price</p>
                            
                            </span>
                            </div>


                            <div>
                            <Link to="/productpage">
                            <img>
                                
                            </img>
                            </Link>
                            <span style={{float:"right"}}>
                                <span></span>
                                <h1 >Product</h1>
                            <p>rating</p>
                            <p>price</p>
                            
                            </span>
                            </div>



                            <div>
                            <Link to="/productpage">
                            <img>
                                
                            </img>
                            </Link>
                            <span style={{float:"right"}}>
                            <h1 >Product</h1>
                            <p>rating</p>
                            <p>price</p>
                           
                            </span>
                            </div>


                            <div>
                            <Link to="/productpage">
                            <img>
                                
                            </img>
                            </Link>
                            <span style={{float:"right"}}>
                            <h1 >Product</h1>
                            <p>rating</p>
                            <p>price</p>
                            
                            </span>
                            </div>
                            
                        </div>
                        
                        
                </span>
                </div>
                <div id="bottom">
                <BottomNavbar/>
                </div>
            </div>
        </div>
    )
}

export default ShopAll