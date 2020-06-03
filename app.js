//  Init weather object
const weather = new Weather('Boston', 'us');

//  Init UI
const ui = new UI();

//  Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Kuopio', 'fi');

function getWeather() {
    weather.getWeather()
      .then(results => {
        ui.paint(results);
      })
      .catch((err) => console.log(err));
}