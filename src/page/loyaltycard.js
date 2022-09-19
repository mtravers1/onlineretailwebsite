import Navbar from "../components/navbar"

const Loyalty = ()=>{
    return(

        
        <div  style={{backgroundColor:"#f6a2b4"}}>
                    <Navbar/>


                    <div>
                        <form></form>
                        <h1>Loyalty Enrollment form</h1>
                        <p>All information will be kept confidential and not shared with anyone</p>
                    </div>
                <div id="body">
            <div id="loyal">
                <div>
                <div id="loyalname" style={{height:"60px", alignItems:"center", justifyContent:"center"}} >
                    
                    <label for="cardnumber">Loyal Card Number</label>
                    <input type='text' placeholder="0000"></input>

                    </div>
                </div>

                
                <div id="loyalname" style={{marginBottom:"50px"}}>
                <h1>Name</h1>
                <div id="center">
                    <span><label>First Name</label>
                    <input type="text"></input></span>
                    
                    <span><label>Last Name</label>
                    <input type="text"></input></span>

                    </div>
                </div>

                <div>


                <div id="loyalname" style={{marginBottom:"50px"}}>
                <h1>Address</h1>
                <div id="center">

                    <span><label for="address">Line 1</label>
                    <input type="text" name="Line1" ></input></span>
                    
                    <span><label for="address">Line 2</label>
                    <input type="text" ></input></span>

                   <span> <label for="address">Line 2</label>
                    <input type="text" ></input></span>
                    </div>


                    </div>
                </div>







                
                <div id="loyalname" style={{marginBottom:"50px"}}>
                
                <h1>Contact Information</h1>
                <div id="center">
                    <span><label>phone</label>
                    <input type="text"></input></span>
                    
                    <span><label>E-mail</label>
                    <input type="text"></input></span>

                    <span><label>Confirm E-mail</label>
                    <input type="text"></input></span>
                    
                    </div>
                </div>



               
                <div id="loyalname" style={{marginBottom:"50px"}}>
                
                <h1>Optional</h1>
                <div id="center">
                    <span><label>Gender</label>
                    <input type="text"></input></span>
                    
                    <span><label>Birthday</label>
                    <input type="text"></input></span>

                    </div>
                </div>


                
                
                </div>






            </div>
            <button type="Submit">Submit</button>
        </div>
    )
}

export default Loyalty