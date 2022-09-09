import React, {Component} from "react";

const Home = () => {
    return(
        <div id="home">
            <img id="headingpic" scr="./pics/newarr.png"></img>
            <a href="/">View all items on sale here</a>
            <div id="saleitems">
                <span className="leftpic">Trending This Week<button type="button">shop here</button></span>
                <span className="midpic">Bakini Sale 30% off</span>
                <span className="rightpic">New Date Nite <button type="button">shop here</button></span>

            </div>
            <p> A few of our favorite things</p>
            <div id="shop">
                <img style={{backgroundColor:"orange"}} ></img>
                <img style={{backgroundColor: "green"}}></img>
                <img style={{backgroundColor: "blue"}}></img>
                <img style={{backgroundColor: "green"}}></img>
            </div>
            <button type="button">Shop All</button>
            <div id="signup">
                <h1>Sign up for Discounts and Updates</h1>
                <h1>Find out about upcoming promotions and new release</h1>
            </div>

        </div>
        
    )
}
export default Home