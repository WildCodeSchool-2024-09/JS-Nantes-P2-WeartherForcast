import { backgroundData } from "../datas/background";

export const getBackground = (
  descriptionData: string,
  callback: (value: string) => void,
) => {
  const backGroundToFind = backgroundData.find((background) => {
    return background.description === `${descriptionData}`;
  });
  if (backGroundToFind) {
    callback(backGroundToFind.url);
  } else {
    callback("/src/assets/images/clouds.jpg");
  }
};
