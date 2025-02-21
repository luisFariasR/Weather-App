import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

export default function ActualWeather() {
  const [actual, setActualW] = useState([]);
  const url = "https://api.openweathermap.org/data/2.5/weather?lat=19.4326&lon=-99.1332&appid=eb78e0a64fcaccfd72132fc01b719686";

  useEffect(() => {
    fetchData(url)
      .then(data => {
        console.log("Datos recibidos de la API:", data); 
        setActualW(data.actual);
      })
      .catch(error => console.error( error));
  }, []);

  

  return (
    <div className="flex flex-col bg-slate-900 text-white gap-10 pt-18">
      <div className="justify-center flex">
        <h1 className="font-[500] text-9xl ">
          21<span className="text-7xl text-gray-500">°C</span>
        </h1>
      </div>
      <div className="flex justify-center">
        <h2 className="text-4xl">Broken clouds</h2>
      </div>
      <div className="0 flex justify-center">
        <span className="text-2xl">Today . Mon, 17Feb</span>
      </div>
      <div className="flex justify-center pb-4">
        <img src="./location_on.svg" alt="" className="w-6 h" />
        <span className="text-sm font-[900] ">Mexico City</span>
      </div>
    </div>
  );
}

