import React from "react";
import Navbar from "../components/navbar";
import Shippingdetails from "../shoppingcarpages.js/shippingdetails";
import Paymentoption from "../shoppingcarpages.js/paymentoptions";
import Shoppingcart from "../shoppingcarpages.js/shoppingcart";
import { useState } from "react";

const Cart = () => {
  
    const [selectedItems, setSelectedItems] = useState('shoppingcart')

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
                    <li><button onClick={()=>setSelectedItems('shoppingcart')}>1.Shopping Cart</button></li>
                    <li><button onClick={()=>setSelectedItems('shippingdetails')}>2.Shipping Details</button></li>
                    <li><button onClick={()=>setSelectedItems('paymentoptions')}>3.Payment Option</button></li>   

                </ul>
            </div>
            


            {display(selectedItems)}

            </div> 
        </div>
        
    )
}

export default Cart