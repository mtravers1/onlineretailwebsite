import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";

const Browseall = (props)=>{
    
    const [dress, setDress]=useState([{productname:"dress1", rating:"4", price:"$400", id:1},
                                    {productname:"dress2", rating:"4", price:"$500", id:2},
                                   {productname:"dress3", rating:"5", price:"$600", id:3},
                                   {productname:"dress4", rating:"5", price:"$700", id:4},
                                   {productname:"dress5", rating:"5", price:"$800", id:5},
                                   {productname:"dress6", rating:"5", price:"$900", id:6}])
    return(
        <div >
            <Navbar/>
            <div id="dres">
            {dress.map((dres)=>(
                <div key={dres.id}>
                   <span >
                    <h1>{dres.productname}</h1>
                    {dres.rating}
                    {dres.price}
                    </span>
                
                    
                </div>
            ))}


               
            
            </div>
                    
        </div>
    )
}
export default Browseall