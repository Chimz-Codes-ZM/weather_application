import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";



function Weather() {
  const router = useRouter();
  const { cityName, temperature, description, windSpeed } = router.query;
  return (
    <div className="p-20 flex justify-center items-center h-screen w-full relative">
      <div className="absolute left-10 top-10 text-lg border-2 px-2 rounded-lg hover:border-white transition duration-300 hover:bg-black hover:text-white">
        
        <Link href="/" className="flex gap-4 items-center">
        <FaLongArrowAltLeft />
          Search again
        </Link>
      </div>
      <div className="text-center flex flex-col gap-6">

        <h1 className="text-6xl">Weather for <i>{cityName}</i></h1>
        <p>Temperature: {temperature} °C</p>
        <p>Weather: {description}</p>
        <p>Wind speed: {windSpeed} m/s</p>
      </div>
    </div>
  );
}

export default Weather;
