import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import "./SearchBox.css";
import { useState, useEffect } from 'react';

const SearchBox = ({ handleSetData }) => {

  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;


  const getWeatherInfo = async (city) => {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const jsonRes = await response.json();

    return {
      temperature: jsonRes.main.temp,
      feelsLike: jsonRes.main.feels_like,
      minTemp: jsonRes.main.temp_min,
      maxTemp: jsonRes.main.temp_max,
      humidity: jsonRes.main.humidity,
      seaLevel: jsonRes.main.sea_level,
      pressure: jsonRes.main.pressure,
      description: jsonRes.weather[0].description,
      windSpeed: jsonRes.wind.speed,
      latitude: jsonRes.coord.lat,
      longitude: jsonRes.coord.lon,
      cityname: city,
    };
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setError(false);
      const result = await getWeatherInfo(city);
      handleSetData(result);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    async function getMumbaiWeather() {
      const result = await getWeatherInfo("mumbai");
      handleSetData(result);
    }
    getMumbaiWeather();
  }, []);

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Search City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        &nbsp;
        <Button
          variant="contained"
          startIcon={<ManageSearchIcon />}
          size="large"
          type="submit"
        >
          Search
        </Button>
      </form>

      {error && <h2 style={{color:"red",boxShadow:"10px 10px 50px pink"}}>No such place exist in our API</h2>}
    </div>
  );
};

export default SearchBox;
