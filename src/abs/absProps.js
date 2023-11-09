class absProps {
  constructor(topPos, leftPos, width, height, absPart) {
    this.topPos = topPos;
    this.leftPos = leftPos;
    this.width = width;
    this.height = height;
    this.absPart = absPart;
  }
}
//prettier-ignore
const middleTopProps = new absProps("35%", "42.3%", "12.08%", "12.3%", 'middleTop')
//prettier-ignore
const middleBottomProps = new absProps("58%", "42.8%", "11.08%", "10%", 'middleBottom')
//prettier-ignore
const middleProps = new absProps("48.7%", "43.3%", "10%", "8%", 'middle')
//prettier-ignore
const rightBottomProps = new absProps("53.7%", "53.7%", "10%", "10%", "rightBottom")
//prettier-ignore
const rightTopProps = new absProps("42.7%", "53.2%", "10.5%", "9.6%", 'rightTop')
//prettier-ignore
const leftTopProps = new absProps("42.7%", "33%", "10.5%", "9.6%", 'leftTop')
//prettier-ignore
const leftBottomprops = new absProps("53.7%", "33%", "10%", "10%", 'leftBottom')

export const arrayProps = [
  middleTopProps,
  middleBottomProps,
  middleProps,
  rightBottomProps,
  rightTopProps,
  leftTopProps,
  leftBottomprops,
];
