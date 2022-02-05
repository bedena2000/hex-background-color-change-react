import React from 'react';
import Btn from './Btn.js';
import Info from './Info.js';

const Wrapper = ({changeColor, colorText}) => {
  return (
      <div className="wrapper">
        <Info colorText={colorText}/>
        <Btn changeColor={changeColor}/>
      </div>
  )
};

export default Wrapper;