
import React from "react";
import Profilepic from "../Assets/john-doe-image.png"


const Testimonial =()=>{
    return<div className="work-section-wrapper" id="testimonial">
        <div className="work-section-top">
            <p className="primary-subheading">
                Testimonial
            </p>
            <h1 className="primary-heading">
                what they are saying
            </h1>
            <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam."

            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={Profilepic}></img>
            <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam."

            </p>
       
        <div className="testimonial-starts-container">
           <h2>John Doe</h2>
           </div>
        </div>
    </div>
}

export default Testimonial