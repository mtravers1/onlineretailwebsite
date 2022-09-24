import React from "react";
import Navbar from "../components/navbar";
import Shippingdetails from "../shoppingcarpages.js/shippingdetails";
import Paymentoption from "../shoppingcarpages.js/paymentoptions";
import Shoppingcart from "../shoppingcarpages.js/shoppingcart";
import { useState } from "react";
import useFetch from "../useFetch";


const Cart = () => {
  
    const [selectedItems, setSelectedItems] = useState('shoppingcart')
    // const {data:cart}=useFetch('http://localhost:8000/Cart')


    const componentsToUse = (key)=>{
        const itemObj={
            shoppingcart:<Shoppingcart/>,
            shippingdetails:<Shippingdetails/>,
            paymentoptions:<Paymentoption/>

        }
        return itemObj[key]
    }

    const display = (item) =>{
        return componentsToUse(item)
    }


    return(


        <div>
            <Navbar/>
         
        
           <div id="cart">

            
        

            <div id="shoppingcart">
                <ul >
                    <li><span><button onClick={()=>setSelectedItems('shoppingcart')}>1.Shopping Cart</button><br/><hr style={{color:"black"}}/></span>
                    <span><button onClick={()=>setSelectedItems('shippingdetails')} style={{}}>2.Shipping Details</button><br/><hr style={{color:"black"}}/></span>
                    <span><button onClick={()=>setSelectedItems('paymentoptions')} style={{}}>3.Payment Option</button><br/><hr style={{color:"black"}}/></span></li>   

                </ul>
            </div>
            


            {display(selectedItems)}
            {/* {cart.map((carts)=>{
                <div key={carts.id}>

                    <h1>{carts.productname}</h1>
                    {carts.price}
                    </div>

            })} */}

            </div> 
        </div>
        
    )
}

export default Cart