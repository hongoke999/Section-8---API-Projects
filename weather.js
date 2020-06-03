class Weather {
    constructor(city, country) {
        this.key = '1b5a5ff40467553fa919392619bcf74f';
        this.city = city;
        this.country = country;
    }

    //  Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.key}`);

        const responseData = await response.json();

        return responseData;
    }

    //  Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}