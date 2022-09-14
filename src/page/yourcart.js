import React from "react";
import Navbar from "../components/navbar";
import Shippingdetails from "../shoppingcarpages.js/shippingdetails";
import Paymentoption from "../shoppingcarpages.js/paymentoptions";
import Shoppingcart from "../shoppingcarpages.js/shoppingcart";

const Cart = () => {
    return(
        <div>
            <Navbar/>
        
           <div id="cart">



            <div id="shoppingcart">
                <ul >
                    <li>1.Shopping Cart</li>
                    <li>2.Shipping Details</li>
                    <li>3.Payment Option</li>   

                </ul>
            </div>
            <br/>


            <Paymentoption />

            </div> 
        </div>
        
    )
}

export default Cart