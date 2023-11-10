//prettier-ignore
import {
  middleTop,middleBottom, middle, rightBottom, rightTop, leftBottom, leftTop, allButton,
} from '../assets/abdomen';
//prettier-ignore
import {
  middleTop_active, middleBottom_active, middle_active, rightBottom_active, rightTop_active, leftBottom_active, leftTop_active,
} from '../assets/abdomen';

class absProps {
  constructor(topPos, leftPos, width, height, absPart, absPartActive) {
    this.topPos = topPos;
    this.leftPos = leftPos;
    this.width = width;
    this.height = height;
    this.absPart = absPart;
    this.absPartActive = absPartActive;
  }
}
//prettier-ignore
const middleTopProps = new absProps("35%", "42.3%", "12.08%", "12.3%", middleTop, middleTop_active)
//prettier-ignore
const middleBottomProps = new absProps("58%", "42.8%", "11.08%", "10%", middleBottom, middleBottom_active)
//prettier-ignore
const middleProps = new absProps("48.7%", "43.3%", "10%", "8%", middle, middle_active)
//prettier-ignore
const rightBottomProps = new absProps("53.7%", "53.7%", "10%", "10%", rightBottom, rightBottom_active)
//prettier-ignore
const rightTopProps = new absProps("42.7%", "53.2%", "10.5%", "9.6%", rightTop, rightTop_active)
//prettier-ignore
const leftTopProps = new absProps("42.7%", "33%", "10.5%", "9.6%", leftTop, leftTop_active)
//prettier-ignore
const leftBottomProps = new absProps("53.7%", "33%", "10%", "10%", leftBottom, leftBottom_active)

export const arrayAbsProps = [
  middleTopProps,
  middleBottomProps,
  middleProps,
  rightBottomProps,
  rightTopProps,
  leftTopProps,
  leftBottomProps,
];

