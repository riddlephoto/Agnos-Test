import React, { useState, useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { allButton, defaultFinger } from '../assets/fingers';
import { Footer, AddInfo, CustomButtonFinger, Inquire } from '../components';
import { arrayTop, arrayMid, arrayLow } from './fingerProps';
//prettier-ignore
import {topPortion, midPortion, lowPortion } from '../assets/fingers';
//prettier-ignore
import { topPortion_active, midPortion_active, lowPortion_active} from '../assets/fingers';

const FingerSelect = ({ handleIndex }) => {

  const intFingVis = localStorage.getItem('fingVis') || '';
  const intOthers = JSON.parse(localStorage.getItem('others') || false);

  const [fingVis, setfingVis] = useState(intFingVis);
  const [others, setOthers] = useState(intOthers);
  const [toggleInquire, setToggleInquire] = useState(false);

  const handlefingerClick = (fingVis) => {
    setfingVis(fingVis);
    setOthers(false);
  };

  const handleOthersClick = () => {
    setOthers(!others);
    setfingVis('');
  };

  useEffect(() => {
    localStorage.setItem('fingVis', fingVis);
    localStorage.setItem('others', others);
  }, [fingVis, others]);

  return (
    <div className="w-full flex justify-center my-10">
      <div className="flex flex-col items-center">
        <p
          className="font-semibold font-anuphan text-[24px] md:text-[30px] text-main-grey mt-10"
        >
          จุดไหนที่คุณปวดนิ้วมากที่สุด?
        </p>
        <button
          className="absolute mt-10 ml-4 md:my-10 left-0 md:left-[20%] xl:left-[27%] rounded-full shadow-lg p-3"
          onClick={() => handleIndex()}
        >
          <BsArrowLeft className="text-[12px] md:text-[20px]" />
        </button>
        <AddInfo handleInquire={() => setToggleInquire(!toggleInquire)} />
        {toggleInquire && (
          <div className="w-[72%] flex justify-center absolute z-[999]">
            <Inquire
              handleInquire={() => setToggleInquire(!toggleInquire)}
              description="เลือกแนวข้อนิ้วที่ปวดที่สุด"
            />
          </div>
        )}
        <div className="relative shadow-main-shadow rounded-[16px] mx-6">
          <img
            src={defaultFinger}
            alt="default_finger"
            className="my-6 z-[-1]"
          />
          <div className="w-full h-full absolute top-0">
            {arrayTop.map((props, key) => (
              <CustomButtonFinger
                topPos={props.topPos}
                leftPos={props.leftPos}
                width="6%"
                height="3.5%"
                handleClick={handlefingerClick}
                part="Top"
                key={key}
              />
            ))}
            {fingVis === 'Top' && (
              <>
                <img src={topPortion} alt="top_portion" className="my-6" />
                <img
                  src={topPortion_active}
                  alt="top_portion_active"
                  className="my-6 absolute top-0"
                />
              </>
            )}
            {arrayMid.map((props, key) => (
              <CustomButtonFinger
                topPos={props.topPos}
                leftPos={props.leftPos}
                width={props.width}
                height={props.height}
                handleClick={handlefingerClick}
                part="Mid"
                key={key}
              />
            ))}
            {fingVis === 'Mid' && (
              <>
                <img src={midPortion} alt="mid_portion" className="my-6" />
                <img
                  src={midPortion_active}
                  alt="mid_portion_active"
                  className="my-6 absolute top-0"
                />
              </>
            )}
            {arrayLow.map((props, key) => (
              <CustomButtonFinger
                topPos={props.topPos}
                leftPos={props.leftPos}
                width={props.width}
                height={props.height}
                handleClick={handlefingerClick}
                part="Low"
                key={key}
              />
            ))}
            {fingVis === 'Low' && (
              <>
                <img src={lowPortion} alt="low_portion" className="my-6" />
                <img
                  src={lowPortion_active}
                  alt="low_portion_active"
                  className="my-6 absolute top-0"
                />
              </>
            )}
            <button
              className="absolute w-[67%] h-[8%] bottom-[4%] left-[15%]"
              onClick={() => handleOthersClick()}
            />
            {others && <img src={allButton} alt="others" className="my-6" />}
          </div>
        </div>
        <Footer visible={fingVis} allVisible={others} buttonDes="เสร็จสิ้น" />
      </div>
    </div>
  );
};

export default FingerSelect;
