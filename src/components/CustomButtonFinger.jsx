import React from 'react';

const CustomButtonFinger = ({
  topPos,
  leftPos,
  width,
  height,
  handleClick,
  part,
}) => {
  const buttonProperties = {
    top: `${topPos}`,
    left: `${leftPos}`,
    width: `${width}`,
    height: `${height}`,
  };

  return (
    <>
      <button
        className="absolute z-[2]"
        onClick={() => handleClick(part)}
        style={buttonProperties}
      ></button>
    </>
  );
};

export default CustomButtonFinger;
