import { getBackground, getColorCircle } from "./getBackground";

let urlGeo: string;

export const geolocaliseMe = (
  calbackCity: (value: string) => void,
  callbackBackground: (value: string) => void,
  callbackCircleBackground: (value: string) => void,
) => {
  if ("geolocation" in navigator) {
    const watch = navigator.geolocation.watchPosition(async (position) => {
      navigator.geolocation.clearWatch(watch);
      urlGeo = `https://api.openweathermap.org/data/2.5/weather?lon=${position.coords.longitude}&lat=${position.coords.latitude}&appid=075e3c803b57e9d25a7e50c00e33a2ff&units=metric`;
      await recoverCityDatas(
        urlGeo,
        calbackCity,
        callbackBackground,
        callbackCircleBackground,
      );
    }, error);
    //if user don't accept geolocation
    function error() {
      alert("You have refused geolocation.");
      calbackCity("Paris");
    }
  } else {
    //if navigator don"t allow the geolocation
    alert("Geolocation cannot be used.");
    calbackCity("Paris");
  }
};

//TODO: Maybe it could be better to put this function in a specific file in order to use it with all the other datas we will need in all the project for the CITY.
//So we could call it each time we need anywhere in our code. To see with team later.
async function recoverCityDatas(
  url: string,
  callbackCity: (value: string) => void,
  callbackBackground: (value: string) => void,
  callbackCircleBackground: (value: string) => void,
) {
  try {
    const request = await fetch(url);
    const datas = await request.json();
    callbackCity(`${datas.name}`);
    const currentDescriptionData = `${datas.weather[0].main}`;
    getBackground(currentDescriptionData, callbackBackground);
    getColorCircle(currentDescriptionData, callbackCircleBackground);
  } catch (error) {
    alert("Sorry, we met a problem. Please, come back later.");
  }
}
