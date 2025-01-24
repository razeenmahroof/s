// src/Loader.js
import React from 'react';
import { Oval } from 'react-loader-spinner';
import './Loader.css';

const Loader = () => (
  <div className="loader-container">
    <Oval
      height={80}
      width={80}
      color="#0097AB"
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
);

export default Loader;
