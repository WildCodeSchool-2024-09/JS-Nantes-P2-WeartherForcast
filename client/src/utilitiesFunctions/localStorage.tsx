type newCity = {
  cityId: string;
  cityName: string;
};

export const CITIES_USER_FAV: newCity[] = [];

export const addCityOnCityUserFav = (id: string, name: string) => {
  const newCityUser: newCity = {
    cityId: id,
    cityName: name,
  };
  CITIES_USER_FAV.push(newCityUser);
};

// const arrayOfCityFav =
//   export function addCityInLocalStorage(arrayName:string /*A string representing the key used to save the array to local storage.*/, array: []/* An array to be saved to local storage */) {
//     localStorage.setItem(arrayName, JSON.stringify(array)/*convert the array to a string format that can be stored in local storage.*/ );
//   }

//   // Example usage
//   const myArray = [1, 2, 3];
//   addCityInLocalStorage('myArray', myArray);

// //ON FAV ADDED
// export const setElementFromVariablesinLocalStorage = (
//   property: string,
//   value: string /*property and value of the object)*/,
// ) => {
//   const localStorageData = localStorage.getItem("citiesStored");
//   // if already localstorage data for citiesStored
//   if (localStorageData) {
//     //If localStorage is exist
//     const parsedData = JSON.parse(localStorageData); //Convert the json string in js langage by json.parse
//     parsedData[property] = value;
//     localStorage.setItem("citiesStored", JSON.stringify(parsedData));
//   } else {
//     localStorage.setItem("citiesStored", JSON.stringify({ [property]: value }));
//   }
// };
