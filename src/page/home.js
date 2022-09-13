import React, {Component} from "react";
import Follow from "../components/followus";
import Footer from "../components/footer";
import End from "../components/bottom";
import { BrowserRouter as Routes, Router, Route, Link } from "react-router-dom";
import HomeNavbar from "../components/homenav";


const Home = () => {
    return(
        <div id="home">
            <HomeNavbar/>
            <img id="headingpic" scr="./pics/newarr.png"></img>
            <div style={{padding:"20px", border:"2px solid black", borderRadius:10, backgroundColor:"pink", fontWeight:"bold"}} href="/">View all items on sale here</div>
            <div id="saleitems">
                <span className="leftpic"><p style={{float:"left"}}>Trending<br/> This Week<br/><button type="button" style={{float:"left", color:"red", height:"50px" ,width:"300px", fontSize:"24px"}}>shop Now</button></p></span>
                <span className="midpic"><p>Bakini Sale 30% off</p></span>
                <span className="rightpic"><p>New Date Nite <br/><button type="button" style={{float:"left", height:"50px", width:"300px", border: "4px solid black", fontSize:"24px"}}>shop here</button></p></span>

            </div>
            <div>
            <p style={{height:100}}> A few of our favorite things
            <ul>
                <li><a href="">Best Sellers</a></li>
                <li><a href="">New Arrivals</a></li>
                <li><a href="">Most Wanted</a></li>
            </ul>
            </p>
            </div>
            <div id="shop">
                <span id="dress1"><p style={{position:"relative", top:"400px"}}><span style={{color:"pink"}}>$100</span><br/>billy dress</p></span>
                <span id="dress2"><p style={{position:"relative", top:"400px"}}><span style={{color:"pink"}}>$200</span><br/>flower dress</p></span>
                <span id="dress3"><p style={{position:"relative", top:"400px"}}><span style={{color:"pink"}}>$300</span><br/>white dress</p></span>
                <span id="dress4"><p style={{position:"relative", top:"400px"}}><span style={{color:"pink"}}>$400</span><br/>snake dress</p></span>
            </div>
            <button type="button" style={{width:"300px", height:"100px", backgroundColor:"pink", fontWeight:"bold", fontSize:"24px", marginTop:"100px"}}><Link to="/shopAll">Shop All</Link></button>
            
            <div style={{backgroundColor:"black", height:"400px"}}>
            <div id="signup">
                <h1><span style={{color:"pink", fontFamily: "-moz-initial"}}>Sign up for Discounts and Updates</span></h1>
                <h1><span style={{color:"pink", fontFamily: "fantasy"}}>Find out about upcoming promotions and new release</span></h1>
                <input type="text"></input>
                <p style={{color:"grey"}}>By signup for email, you agree to Giraffee Poussee's<a href="">terms of service</a> and <a href="">Privacy Policy</a>, By signing up via text, you agree to recieve recurring automated promotional and personalized marketing text messages ex. cart reminders from Giraffee Poussee at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to stop. Messaging frequency may very but data rates definitely apply.</p>
            </div> 
            </div> 
            <div className="collab">
                <h1>Wanna Collab</h1>
                <p>By signing up for email, you agree to Giraffe Poussee's Terms of Service and Privacy.
                    Policy. By signing up via text, you agree to receive recurring automated promptional
                    and personalized marketing text messages (ex. cart reminders) from Giraffe Poussee at
                    the cell number used when signing up. Consent is not a condition of any purchase.
                    Reply HELP for help and STOP to stop. Messaging frequency many vary but data rates
                    definitely apply.</p>
            </div>
            <div className="story">
                <span><h1>Our story</h1><br/>Giraffe Pousseeat the cell number used when signing up. Blahh balh jdfdgfg</span>
                <span><h1>Their Story</h1><br/>7900 NW 27th ave, Miami, Fl 33157<br/>803-292-7425<br/>GiraffePoussee@gmail.com</span>
            </div>
            <Follow />
            <Footer/>
            <End/>
        </div>
        
    )
}
export default Home