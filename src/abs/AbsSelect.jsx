import React, { useState } from 'react';
import defaultAbs from '../assets/abdomen/default-abs.png';
import { AddInfo, CustomButton, Footer } from '../components';
import { arrayProps } from './absProps';
//prettier-ignore
import {
  middleTop,middleBottom, middle, rightBottom, rightTop, leftBottom, leftTop, allButton,
} from '../assets/abdomen';
//prettier-ignore
import {
  middleTop_active, middleBottom_active, middle_active, rightBottom_active, rightTop_active, leftBottom_active, leftTop_active,
} from '../assets/abdomen';

const AbsSelect = ({ handleIndex }) => {
  const [visible, setVisible] = useState('');
  const [allVisible, setAllVisible] = useState(false);

  const handleClick = (absPart) => {
    setVisible(absPart);
  };
  const handleAllClick = () => {
    setAllVisible(!allVisible);
    setVisible('');
  };

  return (
    <div className="w-full flex justify-center my-[40px]">
      <div className="flex flex-col items-center">
        <p className="font-semibold font-anuphan text-[30px] text-main-grey mt-10">
          ปวดท้องที่บริเวณใดมากที่สุด?
        </p>
        <AddInfo />
        <div className="relative">
          <img src={defaultAbs} alt="default_abs" className="my-6 z-[-1]" />
          <div className="w-full h-full absolute top-0">
            {arrayProps.map((el, key) => (
              <CustomButton
                topPos={el.topPos}
                leftPos={el.leftPos}
                width={el.width}
                height={el.height}
                handleClick={() => handleClick(el.absPart)}
                key={key}
              />
            ))}
            {visible === 'middleTop' && (
              <div className="relative my-6 z[]">
                <img src={middleTop} alt="middle_top_abs" />
                <img
                  src={middleTop_active}
                  alt="middle_top_des"
                  className=" absolute top-0"
                />
              </div>
            )}
            {visible === 'middleBottom' && (
              <div className="relative my-6">
                <img src={middleBottom} alt="middle_bottom_abs" />
                <img
                  src={middleBottom_active}
                  alt="middle_Bottom_des"
                  className="absolute top-0"
                />
              </div>
            )}
            {visible === 'middle' && (
              <div className="relative my-6">
                <img src={middle} alt="middle_abs" />
                <img
                  src={middle_active}
                  alt="middle_des"
                  className="absolute top-0"
                />
              </div>
            )}
            {visible === 'rightBottom' && (
              <div className="relative my-6">
                <img
                  src={rightBottom}
                  alt="right_bottom_abs"
                  className="my-6"
                />
                <img
                  src={rightBottom_active}
                  alt="right_buttom_des"
                  className="absolute top-0"
                />
              </div>
            )}
            {visible === 'rightTop' && (
              <div className="relative my-6">
                <img src={rightTop} alt="right_top_abs" className="my-6" />
                <img
                  src={rightTop_active}
                  alt="right_top_des"
                  className="absolute top-0"
                />
              </div>
            )}
            {visible === 'leftTop' && (
              <div className="relative my-6">
                <img src={leftTop} alt="left_top_abs" className="my-6" />
                <img
                  src={leftTop_active}
                  alt="left_top_des"
                  className="absolute top-0"
                />
              </div>
            )}
            {visible === 'leftBottom' && (
              <div className="relative my-6">
                <img src={leftBottom} alt="left_bottom_abs" className="my-6" />
                <img
                  src={leftBottom_active}
                  alt="left_Bottom_des"
                  className="absolute top-0"
                />
              </div>
            )}
          </div>
        </div>
        <Footer
          visible={visible}
          allVisible={allVisible}
          handleIndex={handleIndex}
        />
      </div>
    </div>
  );
};

export default AbsSelect;
