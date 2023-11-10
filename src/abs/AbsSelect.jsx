import React, { useState, useEffect } from 'react';
import defaultAbs from '../assets/abdomen/default-abs.png';
import { AddInfo, CustomButton, Footer, Inquire } from '../components';
import { arrayAbsProps } from './absProps';
import { allButton } from '../assets/abdomen';

const AbsSelect = ({ handleIndex }) => {

  const intVis = localStorage.getItem('visible') || '';
  const intAllVis = JSON.parse(localStorage.getItem('allVisible') || false);

  const [visible, setVisible] = useState(intVis);
  const [allVisible, setAllVisible] = useState(intAllVis);
  const [toggleInquire, setToggleInquire] = useState(false);

  const handleClick = (absPart) => {
    setVisible(absPart);
  };

  const handleAllClick = () => {
    setAllVisible(!allVisible);
    setVisible('');
  };

  useEffect(() => {
    localStorage.setItem('visible', visible);
    localStorage.setItem('allVisible', allVisible);
  }, [visible, allVisible]);

  return (
    <div className={`w-full flex justify-center my-[40px]`}>
      <div className="flex flex-col items-center">
        <p className="font-semibold font-anuphan text-[24px] md:text-[30px] text-main-grey md:mt-10">
          ปวดท้องที่บริเวณใดมากที่สุด?
        </p>
        <AddInfo handleInquire={() => setToggleInquire(!toggleInquire)} />

        {toggleInquire && (
          <div className="w-[72%] flex justify-center absolute z-[999]">
            <Inquire
              handleInquire={() => setToggleInquire(!toggleInquire)}
              description="คลิกตำแหน่งที่ปวดที่สุด"
            />
          </div>
        )}
        <div className="relative">
          <img src={defaultAbs} alt="default_abs" className="my-6 z-[-1]" />
          <div className="w-full h-full absolute top-0">
            {arrayAbsProps.map((props, key) => (
              <CustomButton
                topPos={props.topPos}
                leftPos={props.leftPos}
                width={props.width}
                height={props.height}
                handleClick={handleClick}
                visible={visible}
                part={props.absPart}
                partActive={props.absPartActive}
                key={key}
              />
            ))}
            <button
              onClick={() => handleAllClick()}
              className={`absolute bottom-[6.5%] left-[32%] w-[32%] h-[8%] z-[3]`}
            />
            {allVisible && (
              <>
                <img src={allButton} alt="all_button" className="my-6" />
                <div className="absolute top-0 w-full h-full z-[2]">
                  {arrayAbsProps.map((active, key) => (
                    <img
                      src={active.absPart}
                      alt={active.absPart.slice(20, -4)}
                      className="my-6 absolute top-0"
                      key={key}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <Footer
          visible={visible}
          allVisible={allVisible}
          handleIndex={handleIndex}
          buttonDes="ต่อไป"
        />
      </div>
    </div>
  );
};

export default AbsSelect;
