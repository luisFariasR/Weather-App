import { useEffect, useState } from "react";
import { fetchData } from "../public/utils/fetchData";

export default function ActualWeather({ lat, lon }) {
  const [actual, setActualW] = useState(null);

  return (
    <div className="flex flex-col bg-slate-900 text-white gap-10 pt-18">
      <div className="justify-center flex">
        <h1 className="font-[500] text-9xl ">
          {actual?.main?.temp ?? "..."}
          <span className="text-7xl text-gray-500">°C</span>
        </h1>
      </div>
      <div className="flex justify-center">
        <h2 className="text-4xl">{actual?.weather?.[0]?.description ?? "..."}</h2>
      </div>
      <div className="0 flex justify-center">
        <span className="text-2xl">Today . {new Date().toLocaleDateString()}</span>
      </div>
      <div className="flex justify-center pb-4">
        <img src="./location_on.svg" alt="" className="w-6 h" />
        <span className="text-sm font-[900] ">{actual?.name ?? "Ubicación"}</span>
      </div>
    </div>
  );
}
