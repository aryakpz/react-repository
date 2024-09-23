import React from "react";
import Logo from "../Assets/Logo.svg"

const Footer=()=>{
    return(
        <div className="footer-wrapper" id="footer">
            <div className="footer-section-one">
                <div>
                    <img src={Logo}></img>
                </div>
            <div className="footer-icons">

            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Career</span>
                <span>Testimonial</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
                <span>244-5333-7783</span>
                <span>hello@food.com</span>
                <span>press@food.com</span>
                <span>contact@food.com</span>
            </div>
            <div className="footer-section-columns">
                <span>Terms & Consitions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
    )
}

export default Footer