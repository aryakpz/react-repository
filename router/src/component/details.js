
import { useParams } from "react-router"

export const Details=()=>{
    const params =useParams()
    const userId=params.userId

    return(
        <div>
            <h2>details about the user {userId}</h2>
        </div>
    )  
}  