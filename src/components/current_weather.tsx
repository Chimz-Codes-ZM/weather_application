import React from "react";
import axios from "axios";

export default function Current_weather({ city, country, description, temperature }) {
  return (
    <div>
      <h1>Current weather for {city}, {country}</h1>
      <p>Description: {description}</p>
      <p>Temperature: {temperature}°C</p>
    </div>
  );
}

export async function getServerSideProps() {
  // Get your location using your IP address
  const response = await axios.get("http://ip-api.com/json");
  const location = response.data;

  // Enter your OpenWeatherMap API key
  const API_KEY = "970bed08e008b11a3c2332d420b75f96";

  // Get the current weather for your location using the OpenWeatherMap API
  const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`);
  const weather = weatherResponse.data;

  return {
    props: {
      city: location.city,
      country: location.country,
      description: weather.weather[0].description,
      temperature: weather.main.temp,
    },
  };
}