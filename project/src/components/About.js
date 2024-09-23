

import React from "react";
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"

const About = () => {
    return (
        <div className="about-section-container" id="about">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="ab"></img>
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="abi"></img>
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    food Is an important part of a balanced diet
                </h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>
                <p className="primary-text">
                    Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
                    facilisis at fringilla quam.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button">watch video</button>
                </div>
            </div>
        </div>
    )
}

export default About;