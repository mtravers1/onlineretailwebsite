import React from "react";
import { useState } from "react";
import Browseall from "./browseall";
import Navbar from "../components/navbar";
import ShopAll from "./shopAll";

const Collection = ()=>{
    const [dress, setDress]=useState([{productname:"dress1", rating:"2", price:"$400", id:1},
                                    {productname:"dress2best", rating:"4", price:"$500", id:2},
                                   {productname:"dress3", rating:"3", price:"$600", id:3},
                                   {productname:"dress4", rating:"1", price:"$600", id:4},
                                   {productname:"dress6best", rating:"5", price:"$600", id:5}])

    const handleDelete=(id)=>{
        const newdresslist = dress.filter(dres=>dres.id !==id)
        setDress(newdresslist)
    }

    
                

    return(
        <div id="collection">
            <Browseall dress={dress} handleDelete={handleDelete} />
            <div><p>best selling</p>
            <Browseall dress={dress.filter((dres)=>dres.rating>=4)} />
            </div>
            
            
            
                    
        </div>
    )
}
export default Collection