import React, {Component} from "react";
import Follow from "../components/followus";
import Footer from "../components/footer";
import End from "../components/bottom";
import { BrowserRouter as Routes, Router, Route, Link } from "react-router-dom";
import HomeNavbar from "../components/homenav";
import Header from "../components/header";
import Loyalty from "./loyaltycard";
import mainpic from '../pics/mainpic.png'
import mainpic1 from '../pics/mainpic1.png'


const Home = () => {
    return(
        <div id="home">
            <Header/>
            <div id="bannernav">
            <HomeNavbar/>
            </div>
            <div id="headingpic">
            <span >
                <p>New Arrivals</p>
                <p>New Arrivals</p>
                <p>New Arrivals</p>
                <p>New Arrivals</p>
            </span>
            </div>
            <div id="shoppingstrip" style={{padding:"20px", border:"2px solid black", borderRadius:10, backgroundColor:"#ff69b4", fontFamily:"'Alfa Slab One', cursive"}} href="/">View all items on sale here</div>
            <div id="saleitems">
                <span className="leftpic">


                    <p style={{}}>Trending<br/> 
                This Week<br/><span id="salebutton">
                    <button type="button">Shop Now</button></span></p>
                    
                    </span>


                <span className="midpic"><p>Bakini Sale 30% off</p></span>
                <span className="rightpic"><p>New <br/>Date Nite <br/>
                <span id="salebutton">
                <button type="button" style={{ border: "4px solid black", background:"none"}}>shop here</button></span></p></span>

            </div>
            <div id="fav" >
            <p id="favorite" style={{height:"50px", fontSize:"36px"}}> A few of our favorite things</p>
            <ul>
                <li><a href="">Best Sellers</a></li>
                <li><a href="">New Arrivals</a></li>
                <li><a href="">Most Wanted</a></li>
            </ul>
           
            </div>
            <div id="shops">
                <span id="dress1"><p style={{position:"relative", top:"400px"}}><span style={{color:"pink"}} id="homeprice">$100</span><br/><span id="hname">billy dress</span></p></span>
                <span id="dress2"><p style={{position:"relative", top:"400px"}}><span style={{color:"pink"}} id="homeprice">$200</span><br/><span id="hname">flower dress</span></p></span>
                <span id="dress3"><p style={{position:"relative", top:"400px"}}><span style={{color:"pink"}} id="homeprice">$300</span><br/><span id="hname">white dress</span></p></span>
                <span id="dress4"><p style={{position:"relative", top:"400px"}}><span style={{color:"pink"}} id="homeprice">$400</span><br/><span id="hname">snake dress</span></p></span>
            </div>
            <button id="shopbut" type="button"><Link to="/shopAll">Shop All</Link></button>
            
            <div id="subscribe" >
            <div id="signup">
                
                <h1><span id="signup1">Sign up for Discounts and Updates</span></h1>
                <h1><span id="signup2">Find out about upcoming promotions and new release</span></h1>
                <div style={{display:"flex", justifyContent:"right",borderRadius:"3px", height:"40px",width:"90%", backgroundColor:"white", marginLeft:"50px"}}>
                <input style={{}} type="text" placeholder="Phone Number or E-mail"></input> 
                <Link style={{ display:"flex", justifyContent:"center", alignItems:"center"}} to="/loyaltycard"><button style={{height:"30px", width:"30px", borderRadius:"50%"}} type="submit">lc</button></Link>
                </div>
                <p style={{color:"grey", fontFamily:"Helvetica", fontSize:"14px"}}>By signup for email, you agree to Giraffee Poussee's<a href="">terms of service</a> and <a href="">Privacy Policy</a>, By signing up via text, you agree to recieve recurring automated promotional and personalized marketing text messages ex. cart reminders from Giraffee Poussee at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to stop. Messaging frequency may very but data rates definitely apply.</p>
                
            
            </div> 
            <div style={{float:"right", color:"white"}}>
                <div>
                <img id="mainpic"src={mainpic} />
                <img id="mainpic1" src={mainpic1}/>
                </div>


            </div>
            
            </div> 
            <div className="collab">
                <h1 style={{paddingLeft:"100px"}}>Wanna Collab ??</h1>
                <p>By signing up for email, you agree to Giraffe Poussee's Terms of Service and Privacy.
                    Policy. By signing up via text, you agree to receive recurring automated promptional
                    and personalized marketing text messages (ex. cart reminders) from Giraffe Poussee at
                    the cell number used when signing up. Consent is not a condition of any purchase.
                    Reply HELP for help and STOP to stop. Messaging frequency many vary but data rates
                    definitely apply.</p>
            </div>
            <div className="story">
                <span><h1>Our story</h1><br/>Giraffe Pousseeat the cell number used when signing up. Blahh balh jdfdgfg</span>
                <span><h1>The G-Spot</h1><br/>7900 NW 27th ave, Miami, Fl 33157<br/>803-292-7425<br/>GiraffePoussee@gmail.com</span>
            </div>
            <Follow />
            <Footer/>
            <End/>
        </div>
        
    )
}
export default Home