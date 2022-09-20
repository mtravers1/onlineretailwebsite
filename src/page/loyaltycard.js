import Navbar from "../components/navbar"

const Loyalty = ()=>{
    return(

        
        <div  style={{backgroundColor:"#f6a2b4"}}>
                    <Navbar/>

                    <form id="loyalinformation" style={{fontFamily:"Helvetica"}}>
                    <div>
                        
                        <p style={{fontSize:"38px", textShadow:"2px 2px 10px"}}>Loyalty Card Memeber Enrollment form</p>
                        <p style={{fontSize:"28px", fontStyle:"italic"}}>All information will be kept confidential and not shared with anyone</p>
                    </div>
                <div id="body">
            <div id="loyal">
                <div>
                <div id="loyalname" style={{height:"60px", alignItems:"center", justifyContent:"center"}} >
                    <span style={{height:"60px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <label for="cardnumber">Loyal Card Number</label>
                    <input type='text' placeholder="0000" style={{}}></input>
                    </span>
                    </div>
                </div>

                
                <div id="loyalname" style={{marginBottom:"50px"}}>
                <h1>Name</h1>
                <div id="center">
                    <span><label>First Name</label>
                    <input required type="text"></input><ion-icon style={{color:"red"}} name="star-outline"></ion-icon></span>
                    
                    <span><label>Last Name</label>
                    <input required type="text"></input><ion-icon style={{color:"red"}} name="star-outline"></ion-icon></span>

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

                   <span style={{marginLeft:"130px"}}>

                     <label style={{marginLeft:"20px"}} for="address">City</label>
                    <input style={{width:"25%"}}type="text" ></input>

                    <label style={{margin:"10px"}}  for="address">State</label>
                    <input style={{width:"10%"}} type="text" ></input>

                    <label for="address">Zip</label>
                    <input style={{width:"11%"}} type="text" ></input>
                    
                    </span>
                    </div>


                    </div>
                </div>







                
                <div id="loyalname" style={{marginBottom:"50px"}}>
                
                <h1>Contact Information</h1>
                <div id="center">
                    <span style={{}}><label style={{ marginLeft:"125px"}}>phone (</label>
                    <input style={{width:"7%", margin:""}} type="text"></input>
                    <label style={{ margin:"5px"}}>)</label>
                    <input style={{width:"7%"}}type="text"></input>
                    <label style={{ margin:"5px"}}>-</label>
                    <input style={{width:"7%"}} type="text"></input><ion-icon style={{color:"red"}} name="star-outline"></ion-icon>
                    </span>
                    
                    <span><label>E-mail</label>
                    <input type="text"></input><ion-icon style={{color:"red"}} name="star-outline"></ion-icon></span>

                    <span style={{marginRight:"70px"}}><label >Confirm E-mail</label>
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
            <p style={{float:"right", marginRight:"230px", marginBottom:"200px", fontWeight:"bold"}}><ion-icon style={{color:"white"}} name="star-outline"></ion-icon>required Field</p>
            
            <button type="Submit">Enroll </button>
            
            
            </form>
        </div>
    )
}

export default Loyalty