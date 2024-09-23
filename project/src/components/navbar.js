
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg"

function Navbar(){

    const [menu,setmenu]=useState(false)
    const menuOptions=[
        {
            text:"home",
        },
        {
            text:'about',
        },
        {
            text:'contact'
        },
        {
            text:'Testimonials'
        },
        {
            text:'cart'
        },
        {
            tetx:'work'
        }
    ]
    return(
    <div>
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt=""></img>
            </div>

            <div className="navbar-links-container">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#testimonial">Testimonial</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
                <a href="#cart">
                    Cart
                </a>
                <button className="primary-button">Book Now</button>
            </div>
            <div className="navbar-menu-container">
                {/* <HiOutlineBars3 onClick ={()=>setOpenMenu (true)}/> */}

            </div>
            {/* <Drawer open={openMenu} onClose={()=>setOpenMenu(false)}
            anchor="right">
                <Box sx={{ width:250 }} role="presentation"
                  onClick={()=>setOpenMenu(false)}
                  onKeyDown={()=>setOpenMenu(false)}>
                </Box>
                <List>
                    {menuOptions.map((item)=>(
                        <ListItem key={item.text} diablepadding>
                            <ListItemButton>
                            <ListItemIcon>
                             {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text}></ListItemText>
                            </ListItemButton>

                        </ListItem>
                    ))}
                </List>

            </Drawer> */}
        </nav>
    </div>
)}   

export default Navbar;