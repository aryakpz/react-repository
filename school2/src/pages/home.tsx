

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { Details } from './details';

export const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className='mainsec'>
            <div className='datasec'>
                 <h1>Begin your Hero's Journey</h1>
                 <button onClick={() => navigate('/Details')}>View More </button>
            </div>
        </div> 
    );       
};    






