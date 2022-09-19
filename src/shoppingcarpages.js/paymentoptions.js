import React from "react";
import Nextbuttom from "../components/nextbutton";
import Summary from "../components/summary";

const Paymentoption = () => {
    return(
        <div>

        <div id="paymentoptions" >
        <div style={{fontSize:"24px"}}>
        <form >
            <span>
            <h1>Payment method</h1>
            <hr/>

            <div id="creditcard">
                <span>
                    <div>
                    <input type="radio" style={{float:"left", display:"inline-flex"}}/><span><p>Credit card <br/> Lorem ipsum dolor sit</p> <p></p></span>
                    </div>
                    <div id="creditcardinfo">
                        <input placeholder="0000 0000 0000 0000"></input>
                        <input placeholder="month" style={{width:"30%"}}></input>
                        <input placeholder="CVV" style={{width:"30%"}}></input>
                    </div>
                    <input style={{width:"95%", height:"30px", marginTop:"20px"}} placeholder="Name"></input>
                </span>
            

            </div>


            </span>

        </form>
        <hr/>
        <div id="paypal">
            <div>
            
            <input type="radio" style={{float:"left", display:"inline-flex"}}/><span><p>Pay Pal <br/> Lorem ipsum dolor sit</p> <p></p></span>
            </div>
        </div>
        
        <div id="next"><hr style={{color:"black"}}/>
                <button style={{marginRight:"30px", marginLeft:"30px"}}>Pay Now</button>
                <span style={{marginleft:"30px"}}>
                <button>back</button>
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