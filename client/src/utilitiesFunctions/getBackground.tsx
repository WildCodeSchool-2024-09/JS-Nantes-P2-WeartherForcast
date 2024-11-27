import { backgroundData } from "../datas/background";

export const getBackground = (
  descriptionData: string,
  callbackBackground: (value: string) => void,
) => {
  const backGroundToFind = backgroundData.find((background) => {
    return background.description === `${descriptionData}`;
  });
  if (backGroundToFind) {
    callbackBackground(backGroundToFind.url);
  } else {
    callbackBackground("/src/assets/images/clouds.jpg");
  }
};

export const getColorCircle = (
  descriptionData: string,
  callbackCircleBackground: (value: string) => void,
) => {
  const colorCircleToFind = backgroundData.find((background) => {
    return background.description === `${descriptionData}`;
  });
  if (colorCircleToFind) {
    callbackCircleBackground(colorCircleToFind.circleBackground);
  }
};
