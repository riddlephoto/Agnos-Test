import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-t from-light-blue from-[11%] to-dark-blue to-[141%] flex flex-col py-[40px] px-[24px]" >
      <p className="text-[36px] font-bold text-white font-anuphan text-center mb-[24px]">
        อาการของคุณ
      </p>
      <div>
        <p className='font-medium text-white mb-[10px] text-[18px]'>0 % completed</p>
        <div className="w-full h-[10px] bg-dark-blue rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
