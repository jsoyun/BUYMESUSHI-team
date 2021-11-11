import React, { useState } from "react";
import WeatherApiModalItemSearch from "./WeatherApiModalItemSearch";
import './WeatherApiModalItem.css';

function WeatherApiModalItem() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = "e2ddd3ccbb944e94ac98ce53fe530556";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div className="weather">
      <span className="title">전세계 도시별 날씨</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="도시"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          placeholder="국가"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          검색
        </button>
      </form>

      {weather.data !== undefined ? (
        <div>
          <WeatherApiModalItemSearch data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default WeatherApiModalItem;