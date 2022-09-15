import React from "react";
import { useState } from "react";
import Browseall from "./browseall";
import Navbar from "../components/navbar";
import ShopAll from "./shopAll";

const Collection = ()=>{
    const [dress, setDress]=useState([{productname:"dress1", rating:"4", price:"$400", id:1},
                                    {productname:"dress2", rating:"4", price:"$500", id:2},
                                   {productname:"dress3", rating:"5", price:"$600", id:3}])
    return(
        <div id="collection">
            <Browseall dress={dress}/>
            
            
            
                    
        </div>
    )
}
export default Collection