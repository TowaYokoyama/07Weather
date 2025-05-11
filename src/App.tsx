import { useEffect, useState } from "react"
import axios from 'axios'; //httpに通信をお願いする
import WeatherCard from "./components/WeatherCard";
import locations from './locations';
import type { Forecast, Locations, WeatherData } from "./type";


const App:React.FC = () => {
  const [location,setLocation] = useState<string>(locations[0].id); //現在表示している都道府県のid
  const [weatherData,setWeatherData] = useState<WeatherData | null>(null); //選択された都道府県の天気データ

  //API呼び出し
  useEffect(()=> {
    const fetchweatherData = async () => {
      try {
        const response = await axios.get(`http://weather.tsukumijima.net/api/forecast/city/${location}`);//urlにloxationを組見込んで取得
        setWeatherData(response.data);
      }catch(error){
        console.error("Weather data fetch error:",error);
      }
    };
    fetchweatherData();
  },[location]); //locationが変わるたびにAPIｗｐ呼び出しにいく

  return (
    <div className="flex flex-col items-center justyfy-center min-h-screen bg-gray-500">
      <div className="w-full max-w-4xl px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-4">天気予報</h1>

        <div className="mb-6">
        <label htmlFor="location-select" className="block mb-2 text-sm font-medium text-gray-700">
          地域を選択
          </label>
          <select
          id="location-select"
          value={location}
          onChange={(e)=> setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
          >
            {locations.map((loc:Locations) => (
              <option
                key={loc.id}
                value={loc.id}>
                  {loc.name}
                </option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {weatherData && weatherData.forecasts ? (
            weatherData.forecasts.slice(0, 3).map((forecast:Forecast, index:number) => (
              <WeatherCard key={index} forecast={forecast} />
            ))
          ) : (
            <p className="text-center col-span-full">天気データを読み込み中...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
