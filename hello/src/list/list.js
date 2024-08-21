
import React from "react";
import Label from "./lable";
import './style.css'


function List() {
    return (
      <div className='item'>
        <hr />
        <div className='lt'>
          titles from another
        </div>
        <div className='ld'>
          <Label />
          <Label />
        </div>
      </div>);
  }
  
  export default List;