import axios from "axios"
import { useEffect, useState } from "react";

const Weather = ({city}) => {
    const OPENWEATHER_API_KEY = process.env.REACT_APP_API_KEY;
    const [weather, setWeather] = useState([])
    
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`)
        .then(response => {
            console.log("successful weather data retrieval")
            setWeather(response.data)
        })
    }, [])

    if(weather.main){
        return (
            <div>
                <h1>Weather in {city}</h1>
                <div>
                    temperature {Math.round((weather.main.temp -273.15) * 100)/100} degrees Celsius
                </div>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon"/>
                <div>
                    wind {weather.wind.speed} m/s
                </div>

            </div>
        )
    }
    return(null)
}

export default Weather
