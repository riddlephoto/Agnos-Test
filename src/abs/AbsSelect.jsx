import React, { useState } from 'react';
import defaultAbs from '../assets/abdomen/default-abs.png';
import AddInfo from '../components/AddInfo';
import Footer from '../components/Footer';
//prettier-ignore
import {
  middleTop,middleBottom, middle, rightBottom, rightTop, leftBottom, leftTop, allButton,
} from '../assets/abdomen';
//prettier-ignore
import {
  middleTop_active, middleBottom_active, middle_active, rightBottom_active, rightTop_active, leftBottom_active, leftTop_active,
} from '../assets/abdomen';

const AbsSelect = () => {
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
            <button
              className={`absolute top-[35%] left-[42.3%] w-[12.08%] h-[12.3%] z-[2]`}
              onClick={() => handleClick('middleTop')}
            ></button>
            {visible === 'middleTop' && (
              <div className="relative my-6">
                <img src={middleTop} alt="middle_top_abs" />
                <img
                  src={middleTop_active}
                  alt="middle_top_des"
                  className=" absolute top-0"
                />
              </div>
            )}
            <button
              className={`absolute top-[58%] left-[42.8%] w-[11.08%] h-[10%] z-[2]`}
              onClick={() => handleClick('middleBottom')}
            ></button>
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
            <button
              className={`absolute top-[48.7%] left-[43.3%] w-[10%] h-[8%] z-[2]`}
              onClick={() => handleClick('middle')}
            ></button>
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
            <button
              className={`absolute top-[53.7%] left-[53.7%] w-[10%] h-[10%] z-[2]`}
              onClick={() => handleClick('rightBottom')}
            ></button>
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
            <button
              className={`absolute top-[42.7%] left-[53.2%] w-[10.5%] h-[9.6%] z-[2]`}
              onClick={() => handleClick('rightTop')}
            ></button>
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
            <button
              className={`absolute top-[42.7%] left-[33%] w-[10.5%] h-[9.6%] z-[2]`}
              onClick={() => handleClick('leftTop')}
            ></button>
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
            <button
              className={`absolute top-[53.7%] left-[33%] w-[10%] h-[10%] z-[2]`}
              onClick={() => handleClick('leftBottom')}
            ></button>
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
            <button
              onClick={() => handleAllClick()}
              className={`absolute bottom-[6.5%] left-[32%] w-[32%] h-[8%] z-[3]`}
            ></button>
            {allVisible && (
              <>
                <img src={allButton} alt="all_button" className="my-6" />
                <div className="absolute top-0 w-full h-full z-[2]">
                  <img
                    src={middleTop}
                    alt="middle_top_abs"
                    className="my-6 absolute top-0"
                  />
                  <img
                    src={middleBottom}
                    alt="middle_bottom_abs"
                    className="my-6 absolute top-0"
                  />
                  <img
                    src={middle}
                    alt="middle_abs"
                    className="my-6 absolute top-0"
                  />
                  <img
                    src={rightBottom}
                    alt="right_bottom_abs"
                    className="my-6 absolute top-0"
                  />
                  <img
                    src={rightTop}
                    alt="right_top_abs"
                    className="my-6 absolute top-0"
                  />
                  <img
                    src={leftTop}
                    alt="left_top_abs"
                    className="my-6 absolute top-0"
                  />
                  <img
                    src={leftBottom}
                    alt="left_bottom_abs"
                    className="my-6 absolute top-0"
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <Footer visible={visible} allVisible={allVisible}/>
      </div>
    </div>
  );
};

export default AbsSelect;
