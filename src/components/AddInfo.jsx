import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const AddInfo = () => {
  return (
    <button className="bg-button-blue py-4 px-2 rounded-full my-4">
      <div className='flex items-center justify-center'>
        <AiOutlineInfoCircle size={20} className='ml-4 text-dark-blue'/>
        <p className="font-anuphan text-dark-blue text-[18px] mx-4">
          กดดูคำอธิบายเพิ่มเติม
        </p>
      </div>
    </button>
  );
};

export default AddInfo;
