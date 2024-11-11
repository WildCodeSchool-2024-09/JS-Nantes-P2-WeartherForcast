let urlGeo: string;

export const geolocaliseMe = (setCity: (value: string) => void) => {
  if ("geolocation" in navigator) {
    const watch = navigator.geolocation.watchPosition(async (position) => {
      navigator.geolocation.clearWatch(watch);
      urlGeo = `https://api.openweathermap.org/data/2.5/weather?lon=${position.coords.longitude}&lat=${position.coords.latitude}&appid=075e3c803b57e9d25a7e50c00e33a2ff&units=metric`;
      await recoverCityGeolocated(urlGeo, setCity);
    }, error);
    //if user don't accept geolocation
    function error() {
      alert("You have refused geolocation.");
      setCity("Paris");
    }
  } else {
    //if navigator don"t allow the geolocation
    alert("Geolocation cannot be used.");
    setCity("Paris");
  }
};

async function recoverCityGeolocated(
  url: string,
  setCity: (value: string) => void,
) {
  try {
    const request = await fetch(url);
    const datas = await request.json();
    setCity(`${datas.name}`);
  } catch (error) {
    alert("Sorry, we met a problem. Please, come back later.");
  }
}
