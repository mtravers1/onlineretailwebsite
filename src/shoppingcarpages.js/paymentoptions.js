import React from "react";
import Nextbuttom from "../components/nextbutton";
import Summary from "../components/summary";

const Paymentoption = () => {
    return(
        <div>

        <div id="paymentoptions">
        <div>
        <form>
            <span>
            <h1>Payment method</h1>
            <hr/>

            <div id="creditcard">
                <span>
                    <div>
                    <input type="radio" style={{float:"left"}}/><span><p>Credit card <br/> Lorem ipsum dolor sit</p> <p></p></span>
                    </div>
                </span>
            <input id="smallbox"></input>
            <input id="exsmallbox"></input>
            <input id="exsmallbox"></input>
            <input id="bigbox"></input>

            </div>


            </span>

        </form>
        <hr/>
        <div id="paypal">
            
            
            <span><p> <input style={{float:"left"}} type="radio"/><span style={{textAlign:"left"}}>Paypal</span><br/>pay with paypal<img style={{float:"right", width:"20px", height:"20px"}}/></p></span>
            
        </div>
        
        <div id="next"><hr style={{color:"black"}}/>
                <button style={{}}>Pay Now</button>
                <span style={{paddingLeft:"30px"}}>
                <button >back</button>
                </span>
        </div>
        </div>

        <div>
            <Summary/>
        </div>

        </div>


    </div>
    )
}

export default Paymentoption