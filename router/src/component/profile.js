
import { useNavigate } from './users'
import {useAuth} from './auth'

export const Profile =()=>{

    const auth =useAuth()
    const navigate=useNavigate()

    const handleout=()=>{
        auth.logout()
    }
    return (
        <div>
                welcome {auth.user}
                <button onClick={handleout}>Log out</button>
        </div>
        
    )
}