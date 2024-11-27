import { weatherIconsData } from "../datas/weather-icons";

export const getWheatherIcons = (
  descriptionData: string,
  callback: (value: string) => void,
) => {
  const weahterIconToFind = weatherIconsData.find((weatherIcon) => {
    return weatherIcon.description === `${descriptionData}`;
  });
  if (weahterIconToFind) {
    callback(weahterIconToFind.url);
  }
};
