import React from "react";
import { Button } from "./button";
import './button.css';
import './herosection.css';
import '../App.css'

function Herosection() {
    return (

        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted></video>
            <h1>
                ADVENTURE AWAITS
            </h1>
            <p>
                Whar are you waiting for?
            </p>
            <div className="hero-btns">
                {/* <Button className="btns" buttonSize='btn--large'></Button> */}
                <button className="btn1"> GET STARTED</button>
                <button className="btn2">WATCH TRAILER</button>
            </div>
        </div> 
    )
}

export default Herosection