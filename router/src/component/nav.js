import React from "react";
import { NavLink } from "react-router-dom";
import { userAuth } from "./auth";
 
export const Navbar=()=>{           
                  
    const navlinkstyle=({isActive})=>{

        return{                        
            fontWeight:isActive ?'bold':'normal',
            color:isActive ?'blue':'black',
            textDecoration :isActive ?'underline':'none'
        }                 

    }                 
    
    const auth =userAuth
    return(                       
                <nav className="primary">                          
                    <NavLink style={navlinkstyle}  to={'/'}>Home</NavLink>
                    <NavLink style={navlinkstyle}  to={'/about'}>About</NavLink>
                    <NavLink style={navlinkstyle}  to={'/products'}>Products</NavLink>
                    <NavLink style={navlinkstyle}  to={'/contact'}>Contact</NavLink>

                    <NavLink style={navlinkstyle}  to={'/profile'}>profile</NavLink>
                                                            
                    {
                        !auth.user && (
                    <NavLink style={navlinkstyle} to='/login'> login</NavLink>
                 
                    )}
                </nav>                                     
                    
    )           
}    