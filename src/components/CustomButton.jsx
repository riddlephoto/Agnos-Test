import React from 'react';

const CustomButton = ({ topPos, leftPos, width, height, handleClick }) => {
  const buttonProperties = `absolute top-[${topPos}] left-[${leftPos}] w-[${width}] h-[${height}] z-[2] `;

  return (
    <>
      <button
        className={buttonProperties}
        onClick={() => handleClick()}
      ></button>
    </>
  );
};

export default CustomButton;
