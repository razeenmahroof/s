import React from 'react';
import './LogoContainer.css';
const LogoContainer = ({ logo }) => {
  return (
    <div className="logo-item">
    <img src={logo} alt='UST Logo' className="logo" />
  </div>
  );
};

export default LogoContainer;
