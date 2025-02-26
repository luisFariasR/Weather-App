import { useEffect, useState } from "react";
import { getData } from "../public/utils/citiesData";
import ActualWeather from "./ActualWeather"; 

export default function GetCity() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const data = await getData();

        
        if (data.length > 0) {
          setLat(data[0].lat);
          setLon(data[0].lon);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCities();
  }, []);

  return (
    <>    
      {lat && lon && <ActualWeather lat={lat} lon={lon} />}
    </>
  );
}

