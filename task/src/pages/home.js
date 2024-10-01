
import { useNavigate } from 'react-router-dom'
import './home.css'
import { ClassA } from './classa'

export const Home = () => {
    const navigate =useNavigate()
    return (
        <div className='mainsec'>
            <div className='datasec'>
                <h1>Begin your Hero's Journey</h1>
                <button onClick={navigate('/ClassA')}>Join With Us</button>
            </div>
            
        </div>
    )

}