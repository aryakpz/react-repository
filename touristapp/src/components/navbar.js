
import React, { useState } from "react"
import './navbar.css'
// import { faSlash } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button } from "./button";
import Products from "./product";

function Navbar() {
    const [click, setclick] = useState(false)
    const [button, setbutton] = useState(true)
    const handleClick = () => setclick(!click);
    const closeMobileMenu = () => setclick(false)
    // const showButton = () => {
    //     if (window.innerWidth <= 960) {
    //         setbutton(false)
    //     }
    //     else {
    //         setbutton(true);
    //     }
    // }
    // window.addEventListener('resize', showButton)

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="#home" className="nav-bar" onClick={closeMobileMenu}>TRVL <i className="fab fa typo3" /></a>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <a href="#home" className="nav-links" onClick={closeMobileMenu}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-links" onClick={closeMobileMenu}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Products" className="nav-links" onClick={closeMobileMenu}>Products</a>
                        </li>
                        <li className="nav-item">
                            <a href="#signup" className="nav-links-mobile" onClick={closeMobileMenu}>Sign Up</a>
                        </li>
                    </ul>
                     {/* <Button b>SIGN UP</Button> */}
                </div>
            </nav>
        </div>
    )
}    

export default Navbar;                         

// <div>
// <nav className="navbar">
//     <div className="navbar-container">
//         <Link to ="#home" className="nav-bar" onClick={closeMobileMenu}>TRVL <i className="fab fa typo3" /></Link>
//         <div className="menu-icon" onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
//         </div>
//         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className="nav-item">
//                 <Link  to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
//             </li>
//             <li className="nav-item">
//                 <Link to="/service" className="nav-links" onClick={closeMobileMenu}>Services</Link>
//             </li>
//             <li className="nav-item">
//                 <Link to="/product" className="nav-links" onClick={closeMobileMenu}>Products</Link>
//             </li>
//             <li className="nav-item">
//                 <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>Sign Up</Link>
//             </li>
//         </ul>
//          {/* <Button b>SIGN UP</Button> */}
//     </div>
// </nav>
// </div>