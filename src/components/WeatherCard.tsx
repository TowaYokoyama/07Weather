import type { Forecast, Temperature } from "../type"


const WeatherCard:React.FC<{forecast:Forecast}> = ({forecast}) => { //Forecast型のforecastを受け取るよ
    const getTemperature = (temp:Temperature) :string => { //Temperature型のtempっていうProps（文字列型）を受け取る
        return temp && temp.celsius !== null ? `${temp.celsius}℃`:"データなし"; //かつが正しいときに、セルシウス温度を返して、null型ならデータなしを返す
    }

  return (
    <div className="bg-green-50 shadow-md  rounded-lg p-4 m-4 w-full max-w-sm text-center">
        <h2 className="text-lg font-bold">
            {forecast.dateLabel} ({forecast.date})
        </h2>
        <hr className="border-t-2 border-green-500 w-11/12 mx-auto my-2"/>
        <img 
        src={forecast.image.url}
        alt={forecast.image.title}
        className="w-4/5 mx-auto mt-2"
        />
        <p className="text-sm text-gray-600 mt-2">天気:{forecast.telop}</p>
        <p className="text-sm">最高気温: {getTemperature(forecast.temperature.max)}</p>
        <p className="text-sm">最低気温: {getTemperature(forecast.temperature.min)}</p>
    </div>
  );
};

export default WeatherCard;
