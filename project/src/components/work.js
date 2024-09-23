import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"

const Work=()=>{
    const workInfoData=[
        {
            image:PickMeals,
            title:"pick meals",
            text:" Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam."
        },
        {
            image:ChooseMeals,
            title:"Choose meals",
            text:" Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam."
        }, {
            image:DeliveryMeals,
            title:"Delivery meals",
            text:" Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam."
        }
    ]
    return(
        <div className="work-section-wrapper" id="work">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How to work</h1>
                <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam."
 
                </p>

            </div>
            <div className="work-section-bottom">
                {
                    workInfoData.map((data) =>(
                        <div className="work-section-info">
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt=""></img>
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Work