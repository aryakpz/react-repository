
import { Link ,Outlet} from "react-router-dom"

export const Product=()=>{
    return(
        <>
        <div>
            <input type="search" placeholder="search product"></input>
        </div>
        <nav>
            <Link to='feature'>Featured product</Link>
            <Link to='newpro'>New product</Link>  
        </nav>
        <Outlet/>
        </>
    )
} 
       