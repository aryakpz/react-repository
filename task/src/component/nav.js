import React from "react";
import { NavLink } from "react-router-dom"
import { Home } from "./home";
import './nav.css'
import award from "../asset/award.svg"
import { Details } from "./details";

export const Navbar = () => {

    return (
        <nav>
            <div>
              <img src={award}></img>
            </div>
            <div className="list">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'details'}>Details</NavLink>
            <NavLink to={'contact'}>Contact</NavLink>
            </div>
        </nav>
    )


}