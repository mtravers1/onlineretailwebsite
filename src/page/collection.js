import React from "react";
import { useState, useEffect } from "react";
import Browseall from "./browseall";
import Navbar from "../components/navbar";
import ShopAll from "./shopAll";
import useFetch from "../useFetch";
import Cart from "./yourcart";

const Collection = ()=>{
    // const [dress, setDress]=useState(null)
    const { data:dress } = useFetch('http://localhost:8000/dress')
    // const { data:cart } = useFetch('http://localhost:8000/Cart')
    // const [shiping, setShiping]=useState(null)
    
// const [dress, setDress]=useState([{productname:"dress1", rating:"2", price:"$400", id:1},
//                                    {productname:"dress2best", rating:"4", price:"$500", id:2},
//                                   {productname:"dress3", rating:"3", price:"$600", id:3},
//                                   {productname:"dress4", rating:"1", price:"$600", id:4},
//                                   {productname:"dress6best", rating:"5", price:"$600", id:5}])
   

    // const handleDelete=(id)=>{
    //     const newdresslist = dress.filter(dres=>dres.id !==id)
    //     setDress(newdresslist)
    // }
        // useEffect(()=>{
        //     fetch("http://localhost:8000/dress")
        //     .then(res=>{
        //         return res.json()
        //     }).then(data=>{console.log(data)
        //     setDress(data)})

        // }, [])
    

                

    return(
        <div id="collection">
            {/* {dress &&<Browseall dress={dress}  /> */}
            {/* <Browseall dress={dress} handleDelete={handleDelete} /> */}
            <p>best selling</p>
            {/* {dress && <Browseall dress={dress.filter((dres)=>dres.rating>=4)} />
            </div> */}
            {/* {cart && <Cart cart={cart}/>} */}
            
            
            
                    
        </div>
    )
}
export default Collection