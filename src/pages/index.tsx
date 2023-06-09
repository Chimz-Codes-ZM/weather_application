import React, { useState } from "react";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import Clock from "@/components/clock";

function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const router = useRouter();

  const handleSearchSubmit = async (cityName: string) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=72e275c2b6c06e0fb3fa35b8dd431cd9&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
      router.push({
        pathname: "/weather",
        query: {
          cityName,
          temperature: data.main.temp,
          description: data.weather[0].description,
          windSpeed: data.wind.speed,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents default form submission behavior
    const formData = new FormData(event.currentTarget);
    const cityName = formData.get("searchTerm");
    if(typeof cityName === "string") {
      handleSearchSubmit(cityName);
    }
  };

  return (
    <div className="p-20 flex flex-col gap-10 justify-center items-center h-screen w-screen">
      <Clock />
      
      <div className="w-full">
        <form onSubmit={handleSubmit}>
          <div className="relative flex">
            <input
              type="text"
              name="searchTerm"
              className="py-2 px-10 rounded-l-xl w-full border"
            />
            <button type="submit" className="border rounded-r-xl py-2 px-10 bg-black text-white">Search</button>
            <div className="absolute inset-y-0 left-0 flex items-center px-2">
              <FiSearch />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
