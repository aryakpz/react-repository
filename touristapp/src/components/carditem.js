
import React from "react";
import './cards.css'
function Carditem(props) {
    return (
        <>
            <li className="cards__item">
                <a className="cards__item__link" href={props.path}>
                    <figure className="cards__item__pic-wrap " data-category ={props.label}>
                        <img src={props.src} alt="travel images" className="cards__item__img"></img>
                          </figure>
                               <div className="cards_item_info">
                               <h5 className="cards__item__text">
                            {props.text}  
                        </h5>
                    </div>                  
                </a>   
            </li>
        </>
    )   
}

export default Carditem;                                           