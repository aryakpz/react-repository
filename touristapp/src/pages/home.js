import React from "react";
import Navbar from "../components/navbar";
import Herosection from "../components/herosection";
import Cards from "../components/cards";
import Products from "./product";
import Services from "./services";
import Signup from "../components/signup";

function Home(){
    return(
        <div id="home">
           <Herosection/>
           <Cards/>
           {/* <Products/> */}
           {/* <Services/> */}
           {/* <Signup/> */}
        </div>
    )
}

export default Home;  