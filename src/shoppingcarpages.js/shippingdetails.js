import React from "react";
import Nextbuttom from "../components/nextbutton";
import Summary from "../components/summary";
import { useState } from "react";

const Shippingdetails = () => {

    const [firstName, setFirstName]= useState('')


    const [lastName, setLastName]=useState('')

    const [addres, setAddres]=useState('')

    const [address, setAddress]=useState('')

    const [country, setCountry]=useState('country')

    const [city, setCity]=useState('')
    
    const [zip, setZip]= useState(' ')

    const [phone, setPhone]=useState(' ')


    const submitShipping =(e) =>{
       e.preventDefault()
        const shippingsub = {
            
            firstName,
            lastName,
            addres,
            address,
            city,
            zip,
            phone
           
            
        }
        
        fetch('http://localhost:8000/Shipping',{

        method:'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(shippingsub)
    }).then(()=>{
        console.log('newadddress')
    })

    }

    return(
        <div>

            <div id="shippingdetails">

            
                <span >
                    <h1>Shippingdetails</h1>
                <hr/>
                    <span id="inputinfo">
                        
                <form onSubmit={submitShipping}>
                    <div id="row" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <input type="text" id="smallbox" placeholder="First Name"
                required
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}/>


                <input id="smallbox" placeholder="Last Name" 
                required
                type="text"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}></input>

                </div>
                <input id="bigbox" placeholder="Address 1" 
                value={addres}
                required
                onChange={(e)=>setAddres(e.target.value)}></input>


                <input id="bigbox" placeholder="Address 2" 
                value={address}
                required
                onChange={(e)=>setAddress(e.target.value)}
                style = {{marginTop:"20px"}}></input>
                <br/>
                <div id="row" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <select id="smallbox"
               
                required
                value={country}
                onChange={(e)=>setCountry(e.target.value)}>
                <option value="Country">
                    USA
                </option>
                <option value="Japan">
                    Japan
                </option>
                <option value="Russia">
                    Russia
                </option>

            </select>
                <input id="smallbox" placeholder="City"
                required
                value={city}
                onChange={(e)=>setCity(e.target.value)}></input>
                </div>
                <div id="row" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <input id="smallbox" placeholder="Zip/Postal Code"
                value={zip}
                onChange={(e)=>setZip(e.target.value)}></input>
                <input id="smallbox" placeholder="Phone Number"
                required
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}></input>
                </div>
                <button>submit</button>
                </form>
                
                

                <hr/>
                <div >
                    <div style={{display:"flex", alignItems:"center",justifyContent:"space-around"}}> 
                <span id="radio">
                    <input type="radio" name="standard"></input><div><p style={{textAlign:"left"}}>free shipping</p><p>between 2-5 days</p></div>
                </span>

                <span id="radio">
                    <input type="radio" name="nextday"></input><div><p style={{textAlign:"left"}}>Next day shipping</p><p>24 hours after checkout</p></div>
                </span>
                </div>
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