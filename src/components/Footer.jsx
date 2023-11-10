import React from 'react';

const Footer = ({ visible, allVisible, handleIndex, buttonDes }) => {
  const handleEnable = () => {
    if (visible !== '' || allVisible) {
      return true;
    }
  };

  const isEnable = handleEnable();
  return (
    <div className='flex justify-center w-full'>
      <button
        className={`w-full md:w-1/2 mx-6 py-2 px-4 rounded-[18px] mt-6 ${
          isEnable ? 'bg-button-dark-blue' : 'bg-button-grey'
        }`}
        disabled={!isEnable}
        onClick={buttonDes === 'ต่อไป' ? handleIndex : null}
      >
        <p
          className={` font-semibold text-[24px] md:text-[30px] font-anuphan py-2  ${
            isEnable ? 'text-white' : 'text-light-grey'
          }`}
        >
          {buttonDes}
        </p>
      </button>
    </div>
  );
};

export default Footer;
