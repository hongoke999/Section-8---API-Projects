//  Init weather object
const weather = new Weather('Boston', 'us');

//  Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Kuopio', 'fi');

function getWeather() {
    weather.getWeather()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
}