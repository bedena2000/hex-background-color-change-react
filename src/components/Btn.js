import React from 'react';
import './Btn.css';

const Btn = ({changeColor}) => {
  return (
    <div className="btn" onClick={changeColor}>
      Change Color
    </div>
  )
};

export default Btn;