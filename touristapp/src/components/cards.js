
import React from "react";
import Carditem from "./carditem";
import './cards.css'

function Cards() {
    return (
        <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
                        <Carditem src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazone jungle"
                            path=""
                            label="Adventure"
                        />
                        <Carditem
                            src='images/img-2.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            path='#services'
                            label="Excited"
                        />
                        </ul>
                        <ul className="cards__items">
                        <Carditem
                            src='images/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            path='#services'
                            label="Locations"
                        />
                        <Carditem
                            src='images/img-4.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            path='#products'
                            label="Entertainment"
                        />  
                       
                        <Carditem
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            path='#sign-up'
                            label="Atmosphere"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )    
}
export default Cards;