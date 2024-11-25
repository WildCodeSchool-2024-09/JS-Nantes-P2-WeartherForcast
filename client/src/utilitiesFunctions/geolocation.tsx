import { getBackground } from "./getBackground";

let urlGeo: string;

export const geolocaliseMe = (
  calback1: (value: string) => void,
  callback2: (value: string) => void,
) => {
  if ("geolocation" in navigator) {
    const watch = navigator.geolocation.watchPosition(async (position) => {
      navigator.geolocation.clearWatch(watch);
      urlGeo = `https://api.openweathermap.org/data/2.5/weather?lon=${position.coords.longitude}&lat=${position.coords.latitude}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`;
      await recoverCityDatas(urlGeo, calback1, callback2);
    }, error);
    //if user don't accept geolocation
    function error() {
      alert("You have refused geolocation.");
      calback1("Paris");
      // displayBackground(setBackground);
    }
  } else {
    //if navigator don"t allow the geolocation
    alert("Geolocation cannot be used.");
    calback1("Paris");
  }
};

//TODO: Maybe it could be better to put this function in a specific file in order to use it with all the other datas we will need in all the project for the CITY.
//So we could call it each time we need anywhere in our code. To see with team later.
async function recoverCityDatas(
  url: string,
  calback1: (value: string) => void,
  callback2: (value: string) => void,
) {
  try {
    const request = await fetch(url);
    const datas = await request.json();
    calback1(`${datas.name}`);
    const currentDescriptionData = `${datas.weather[0].main}`;
    getBackground(currentDescriptionData, callback2);
  } catch (error) {
    alert("Sorry, we met a problem. Please, come back later.");
  }
}
