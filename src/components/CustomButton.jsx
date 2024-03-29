import React from 'react';

const CustomButton = ({
  topPos,
  leftPos,
  width,
  height,
  handleClick,
  visible,
  part,
  partActive,
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
      {visible === part && (
        <div className="relative my-6">
          <img src={part} alt={part.slice(20, -4)} />
          <img
            src={partActive}
            alt={partActive.slice(20, -4)}
            className=" absolute top-0"
          />
        </div>
      )}
    </>
  );
};

export default CustomButton;
