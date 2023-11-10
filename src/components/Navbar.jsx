import React from 'react';

const Navbar = ({ progress, length }) => {
  const calculatedPercent = (progress / length) * 100;
  return (
    <div className="bg-gradient-to-t from-light-blue from-[11%] to-dark-blue to-[141%] flex flex-col py-[40px] px-[24px]">
      <p className="text-[24px] md:text-[30px] xl:text-[36px] font-bold text-white font-anuphan text-center mb-[24px]">
        อาการของคุณ
      </p>
      <div>
        <p className="font-medium text-white mb-[10px] text-[16px] md:text-[18px]">
          {calculatedPercent.toFixed(0)} % completed
        </p>
        <div className="w-full h-[10px] bg-dark-blue rounded-full relative">
          <div
            className="absolute h-[10px] bg-bar-yellow rounded-full duration-500"
            style={{ width: `${calculatedPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
