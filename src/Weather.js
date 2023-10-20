import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Bergen",
    date: "Friday 10:47",
    description: "Light rain",
    units: "°C",
    humidity: 60,
    windspeed: 5,
    imageUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
  };

  return (
    <div className="Weather">
      <div className="weather-app">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city"
                autoComplete="off"
                className="form-control mb-3 enter-city-form"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100 search-button"
              />
            </div>
            <div className="col-3">
              <button className="btn btn-success w-100 current-button">
                Current
              </button>
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li className="sky">{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img src={weatherData.imageUrl} alt={weatherData.description} />
              <div>
                <strong>19</strong>
                <span className="units">{weatherData.units}</span>
              </div>
            </div>
          </div>
          <div className="col-6 description">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Windspeed: {weatherData.windspeed}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
