import React from "react";
import Nextbuttom from "../components/nextbutton";
import Summary from "../components/summary";

const Shoppingcart = () => {
    return(
        <div id="shopcart">

        <div>
        <h1>payment<hr/></h1>
        
        <div id="payment">
            <span>
                <img scr="/" alt="photo"></img>

                <span style={{float:"right", textAlign:"left"}}>
                <h1>ProductName</h1>
                <p>Lorem ipsum dolor sit amet, consecteour</p>
                <p>$300</p>
                </span>

            </span>

            <span>

            <img scr="/" alt="photo"></img>
            <span style={{float:"right", textAlign:"left"}}>

<h1>ProductName</h1>
<p>Lorem ipsum dolor sit amet, consecteour</p>
<p>$300</p>

</span>


            </span>
            <Nextbuttom/>
            
            


 

        
        </div>
        


        </div>


        {/* <div id="summary" style={{paddingLeft:"100px"}}>
            <h1 >Summary<hr/></h1>
            <input type="text" alt="Enter Coupon code"></input><br/><br/><hr/>
            <div id="summaryinfo">
                
                <span><p>subtotal<span style={{float:"right"}}>100</span></p></span>
                <span><p>shipping <span style={{float:"right"}}>100</span></p></span>
                <span><p>taxes <span style={{float:"right"}}>100</span></p></span>
            </div><hr/>
            <p style={{textAlign:"left"}} >Total <span style={{float:"right"}}>100</span></p>
            
        </div> */}
        <Summary/>

    </div>
    )
}

export default Shoppingcart