import React from 'react';

const Inquire = ({handleInquire, description}) => {
  return (
    <div className="flex items-center flex-col w-full sm:w-1/2 lg:w-[30%] p-10 rounded-[31px] border-2 border-button-dark-blue animate-fadeIn bg-white">
      <p className="text-light-grey font-semibold font-anuphan text-[20px] mb-10">
        {description}
      </p>
        <button className='bg-button-dark-blue w-2/3 rounded-full h-[54px]' onClick={() => handleInquire()}>
          <p className="text-white font-semibold font-anuphan text-[20px]">
            เข้าใจแล้ว
          </p>
        </button>
    </div>
  );
};

export default Inquire;
