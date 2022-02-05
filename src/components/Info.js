import React from 'react';
import './info.css';

const Info = ({colorText}) => {
  return (
    <div className="info-wrapper">
      <span className="info-title">Hex Color: </span>
      <span className="info-color">{colorText}</span>
    </div>
  )
};

export default Info;