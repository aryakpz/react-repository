import React from "react";
import { UserCon } from "./usercon";
class Compe extends React.Component{
    render()
    {
        return(
<UserCon>
    {

        name=>{
            return <div> I am   {
                  name
                }
            </div>  
        }
    }

</UserCon>
        )
    }  
}

export default Compe;   