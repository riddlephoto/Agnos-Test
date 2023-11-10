
class fingerProps {
  constructor(topPos, leftPos, width, height) {
    this.topPos = topPos;
    this.leftPos = leftPos;
    this.width = width;
    this.height = height;
  }
}

//prettier-ignore
const topFinger1 = new fingerProps("25%", "21%", "", "")
//prettier-ignore
const topFinger2 = new fingerProps("15%", "32.5%",  "", "")
//prettier-ignore
const topFinger3 = new fingerProps("11%", "43.5%",  "", "")
//prettier-ignore
const topFinger4 = new fingerProps("13.2%", "55.7%", "", "")

//prettier-ignore
const midFinger1 = new fingerProps("32.3%", "24%", "6%", "3.5%")
//prettier-ignore
const midFinger2 = new fingerProps("24.5%", "33.6%", "6.5%", "4%")
//prettier-ignore
const midFinger3 = new fingerProps("21.4%", "44.5%", "6%", "3.5%")
//prettier-ignore
const midFinger4 = new fingerProps("22.8%", "55%", "7%", "3.5%")
//prettier-ignore
const midFinger5 = new fingerProps("41.8%", "76.5%", "5.5%", "3.5%")

//prettier-ignore
const lowFinger1 = new fingerProps("40.5%", "28%", "7.5%", "5%")
//prettier-ignore
const lowFinger2 = new fingerProps("37.5%", "36%", "7.5%", "4.7%")
//prettier-ignore
const lowFinger3 = new fingerProps("36%", "45%", "7.5%", "4%")
//prettier-ignore
const lowFinger4 = new fingerProps("36%", "54%", "8%", "4%")
//prettier-ignore
const lowFinger5 = new fingerProps("52.5%", "68.5%", "6.5%", "4.5%")

export const arrayTop = [topFinger1, topFinger2, topFinger3, topFinger4];
export const arrayMid = [
  midFinger1,
  midFinger2,
  midFinger3,
  midFinger4,
  midFinger5,
];
export const arrayLow = [
  lowFinger1,
  lowFinger2,
  lowFinger3,
  lowFinger4,
  lowFinger5,
];
