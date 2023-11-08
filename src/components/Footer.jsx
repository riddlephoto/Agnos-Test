import React, { useState } from 'react';

const Footer = ({ visible, allVisible }) => {
  const handleEnable = () => {
    if (visible !== '' || allVisible) {
      return true;
    }
  };

  const isEnable = handleEnable();
  return (
    <button
      className={`flex justify-center w-1/2 py-2 px-4 rounded-[18px] ${
        isEnable ? 'bg-button-dark-blue' : 'bg-button-grey'
      }`}
      disabled={!isEnable}
    >
      <p
        className={` font-semibold text-[30px] font-anuphan py-2  ${
          isEnable ? 'text-white' : 'text-light-grey'
        }`}
      >
        ต่อไป
      </p>
    </button>
  );
};

export default Footer;
