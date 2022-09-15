import React from "react";

const Summary = () =>{
    return(
        <div id="summary" style={{paddingLeft:"100px"}}>
        <h1 >Summary<hr/></h1>
        <input type="text" alt="Enter Coupon code"></input><br/><br/><hr/>
        <div id="summaryinfo">
            
            <span><p>subtotal<span style={{float:"right"}}>100</span></p></span>
            <span><p>shipping <span style={{float:"right"}}>100</span></p></span>
            <span><p>taxes <span style={{float:"right"}}>100</span></p></span>
        </div><hr/>
        <p style={{textAlign:"left"}} >Total <span style={{float:"right"}}>100</span></p>
        
    </div>
    )
}
export default Summary