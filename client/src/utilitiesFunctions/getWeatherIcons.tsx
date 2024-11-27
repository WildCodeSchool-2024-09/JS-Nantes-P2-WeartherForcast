import { weatherIconsData } from "../datas/weather-icons";

export const getWheatherIcons = (
  descriptionData: string,
  callback: (value: string) => void,
) => {
  const weatherIconToFind = weatherIconsData.find((weatherIcon) => {
    return weatherIcon.description === `${descriptionData}`;
  });
  if (weatherIconToFind) {
    callback(weatherIconToFind.url);
  }
};
