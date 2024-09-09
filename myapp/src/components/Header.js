
import React from "react";
import './Header.css'

function Header(props) {

  const {
    onselect
  }=props

  return (
    <div className='header'>
      <span className='title'>Code malayalam</span>
      <span onClick={()=>{
        onselect('home')
      }}>Home</span>
      <span onClick={()=>{
        onselect('usage')
      }}>Usage</span>
      <span onClick={()=>{
        onselect('settings')
      }}>Setting</span>
      <span onClick={()=>{
        onselect('logouT')
      }}>Logout</span>
    </div>
  )
}

export default Header;