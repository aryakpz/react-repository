import React from "react";
import main from "../asset/main.mp4";
import './details.css'
import { useNavigate } from "react-router-dom"
import { ClassA } from "../pages/classa";

export const Details = () => {


    const navigate =useNavigate();
    return (
        <div className="details">
            <div className="subdetail">
                <button onClick={()=>{navigate('/ClassA')}}>Class A</button>
                <button>Class B</button>
                <button>Class C</button>
                <button>Class D</button>
            </div>
        </div>
    );
};