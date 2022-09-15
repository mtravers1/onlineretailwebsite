import React from "react";
import Nextbuttom from "../components/nextbutton";
import Summary from "../components/summary";

const Shippingdetails = () => {
    return(
        <div>

            <div id="shippingdetails">

            
                <span >
                    <h1>Shippingdetails</h1>
                <hr/>
                    <span id="inputinfo">
                        
                <form>
                <input id="smallbox"/>
                <input id="smallbox"></input>
                <input id="bigbox"></input>
                <input id="bigbox" style = {{marginTop:"20px"}}></input>
                <br/>
                <input id="smallbox"></input>
                <input id="smallbox"></input>
                <input id="smallbox"></input>
                <input id="smallbox"></input>

                </form>
                
                

                <hr/>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                <span style = {{display: "flex", width:"200px", height:"100px", border:"3px solid black"}}>
                    <input type="radio"></input><div><p style={{textAlign:"left"}}>free shipping</p><p>between 2-5 days</p></div>
                </span>

                <span style = {{display: "flex", width:"200px", height:"100px", border:"3px solid black", float:""}}>
                    <input type="radio"></input><div><p style={{textAlign:"left"}}>Next day shipping</p><p>24 hours after checkout</p></div>
                </span>
                </div>
                </span>
                <Nextbuttom/>
                </span>

            

            <div>
                <Summary />
                <hr/>
            </div>

            </div>



        </div>
    )
}

export default Shippingdetails