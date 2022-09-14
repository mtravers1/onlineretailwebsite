import React from "react";

const Shoppingcart = () => {
    return(
        <div id="shop">

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
</span><hr style={{color:"black"}}/>


            </span>
            <div id="next">
            <button style={{}}>next</button><button>back</button></div>
            


 


        </div>


        </div>


        <div style={{paddingLeft:"100px"}}>
            <h1 >Summary<hr/></h1>
        </div>

    </div>
    )
}

export default Shoppingcart