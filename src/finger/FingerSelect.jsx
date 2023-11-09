import React, { useState } from 'react';
import AddInfo from '../components/AddInfo';
import { BsArrowLeft } from 'react-icons/bs';
//prettier-ignore
import { defaultFinger, topPortion, midPortion, lowPortion } from '../assets/finger';
//prettier-ignore
import { topPortion_active, midPortion_active, lowPortion_active, allButton } from '../assets/finger';
import Footer from '../components/Footer';

const FingerSelect = ({ handleIndex }) => {
  const [fingVis, setfingVis] = useState('');
  const [others, setOthers] = useState(false);

  const handlefingerClick = (fingVis) => {
    setfingVis(fingVis);
    setOthers(false);
  };

  const handleOthersClick = () => {
    setOthers(!others);
    setfingVis('');
  };

  return (
    <div className="w-full flex justify-center my-10">
      <div className="flex flex-col items-center relative">
        <p className="font-semibold font-anuphan text-[30px] text-main-grey mt-10">
          จุดไหนที่คุณปวดนิ้วมากที่สุด?
        </p>
        <button
          className="absolute my-10 left-0 rounded-full shadow-lg p-3"
          onClick={() => handleIndex()}
        >
          <BsArrowLeft size={20} />
        </button>
        <AddInfo />
        <div className="relative">
          <img
            src={defaultFinger}
            alt="default_finger"
            className="my-6 z-[-1]"
          />
          <div className="w-full h-full absolute top-0">
            <button
              className="absolute w-[6%] h-[3.5%] top-[25%] left-[21%] z-[2]"
              onClick={() => handlefingerClick('Top')}
            />
            <button
              className="absolute w-[6%] h-[3.5%] top-[15%] left-[32.5%] z-[2]"
              onClick={() => handlefingerClick('Top')}
            />
            <button
              className="absolute w-[6%] h-[3.5%] top-[11%] left-[43.5%] z-[2]"
              onClick={() => handlefingerClick('Top')}
            />
            <button
              className="absolute w-[6%] h-[3.5%] top-[13.2%] left-[55.7%] z-[2]"
              onClick={() => handlefingerClick('Top')}
            />
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
            <button
              className="absolute w-[6%] h-[3.5%] top-[32.3%] left-[24%] z-[2]"
              onClick={() => handlefingerClick('Mid')}
            />
            <button
              className="absolute w-[6.5%] h-[4%] top-[24.5%] left-[33.6%] z-[2]"
              onClick={() => handlefingerClick('Mid')}
            />
            <button
              className="absolute w-[6%] h-[3.5%] top-[21.4%] left-[44.5%] z-[2]"
              onClick={() => handlefingerClick('Mid')}
            />
            <button
              className="absolute w-[7%] h-[3.5%] top-[22.8%] left-[55%] z-[2]"
              onClick={() => handlefingerClick('Mid')}
            />
            <button
              className="absolute w-[5.5%] h-[3.5%] top-[41.8%] left-[76.5%] z-[2]"
              onClick={() => handlefingerClick('Mid')}
            />
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
            <button
              className="absolute w-[7.5%] h-[5%] top-[40.5%] left-[28%] z-[2]"
              onClick={() => handlefingerClick('Low')}
            />
            <button
              className="absolute w-[7.5%] h-[4.7%] top-[37.5%] left-[36%] z-[2]"
              onClick={() => handlefingerClick('Low')}
            />
            <button
              className="absolute w-[7.5%] h-[4%] top-[36%] left-[45%] z-[2]"
              onClick={() => handlefingerClick('Low')}
            />
            <button
              className="absolute w-[8%] h-[4%] top-[36%] left-[54%] z-[2]"
              onClick={() => handlefingerClick('Low')}
            />
            <button
              className="absolute w-[6.5%] h-[4.5%] top-[52.5%] left-[68.5%] z-[2]"
              onClick={() => handlefingerClick('Low')}
            />
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
        <Footer visible={fingVis} allVisible={others} />
      </div>
    </div>
  );
};

export default FingerSelect;
