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
                <span><img/>Billys Jeans</span>
                <span><img/> Freakem Dress</span>
                <span><img/>Like a snake Ma</span>
                <span><img/>Lil black dress</span>
            </div>
            <button type="button">Shop All</button>

        </div>
        
    )
}
export default Home