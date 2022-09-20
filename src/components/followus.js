import React from "react";

const Follow = ()=>{
    return(
        <div id="follow" style={{color:"white", backgroundColor:"black"}}>
        <span >
            <span id="foll">
            Follow Us on......</span><br/> 

            
            <ion-icon style={{padding:"30px", }} size="large" name="logo-facebook"><a href=""></a></ion-icon>
            <ion-icon style={{padding:"30px", }} size="large" name="logo-instagram"></ion-icon>
            <ion-icon style={{padding:"30px", }} size="large" name="logo-youtube"></ion-icon>
            <ion-icon style={{padding:"30px", }} size="large" name="logo-snapchat"></ion-icon>
            <ion-icon style={{padding:"30px", }} size="large" name="logo-tiktok"></ion-icon>
            <ion-icon style={{padding:"30px", }} size="large" name="logo-twitter"></ion-icon>
            
        </span>
        </div>
        
    )
}

export default Follow