
import React from "react";
import Label from "./lable";
import './style.css'


function List(props) {
  const {
    title,
    desc,
    active
  } = props;

  return (
    <div className='item'>

      <div className='lt'>
        {title}
      </div>
      <div className='lsub'>
        {desc}
      </div>

      <div className='ld'>
        <Label onAction={() => { (console.log('parent')) }}
          active={active} />
        {/* <Label /> */}
        {/* <Label /> */}
        {/* <Label active/> */}
      </div>


    </div>);
}


export default List;