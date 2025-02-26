import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY_ONE

const API_KEY = apiKey;

export const getData = async () => {
  
  try {
    const response = await axios.get("/static_json/cities.json");
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error;
  }
};
const [actual, setActualW] = useState(null);

  useEffect(() => {
    if (!lat || !lon) return; 

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&&appid=eb78e0a64fcaccfd72132fc01b719686`;
    
    fetchData(url)
      .then((data) => {
        console.log("Datos del clima:", data);
        setActualW(data);
      })
      .catch((error) => console.error(error));
  }, [lat, lon]); 

