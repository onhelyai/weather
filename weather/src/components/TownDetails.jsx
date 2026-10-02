import { useEffect, useState } from 'react'
import '../styles/TownDetails.css'
import axios from 'axios';

function TownDetails({days, weather, setweather, city, date, temperature}){

    function select_img(day, weathercode){
        const imgs = [
            [[51, 53, 55, 56, 57], "/assets/images/icon-drizzle.webp"],
            [[45], "/assets/images/icon-fog.webp"],
            [[3], "/assets/images/icon-overcast.webp"],
            [[2], "/assets/images/icon-partly-cloudy.webp"],
            [[61, 63, 65, 66, 67], "/assets/images/icon-rain.webp"],
            [[71, 73, 75, 77], "/assets/images/icon-snow.webp"],
            [[95, 96, 97, 99], "/assets/images/icon-storm.webp"],
            [[0, 1], "/assets/images/icon-sunny.webp"]
        ]
        for (let index = 0; index < imgs.length; index++) {
            for(let i = 0; i < imgs[index][0].length; i++)
                if (weathercode === imgs[index][0][i]){
                    return imgs[index][1]
                }
        }
        return imgs[0][1]
    }

    useEffect(() => {
        const searchWeather = async () => {
            const response = await axios.get(
                'https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current_weather=true&daily=temperature_2m_max,temperature_2m_min&hourly=precipitation,relative_humidity_2m'
            )
            const data = response.data
            console.log(data.daily.temperature_2m_min)
            setweather(data)
        }
        searchWeather();
    }, []);

    return(
        <div>
            {weather ? (
                <div className='town-details'>
            <div>
                <img className='town-weather' src="/assets/images/bg-today-large.svg" alt="" />
                <p className='city-date'>{city} <br />{date}</p>
            </div>
            <div className='added-informations'>
                <div className='element'>
                    <span>Feels like</span>
                    <span>{weather.current_weather.temperature}{weather.current_weather_units.winddirection}</span>
                </div>
                <div className='element'>
                    <span>Humidity</span>
                    <span>46%</span>
                </div>
                <div className='element'>
                    <span>Wind</span>
                    <span>
                        {weather.current_weather.windspeed}{weather.current_weather_units.windspeed}
                    </span>
                </div>
                <div className='element'>
                    <span>Precipitation</span>
                    <span>0mm</span>
                </div>
            </div>
            <div className='daily-forecast'>
                <p>Daily forecast</p>
                <div className='days-container'>
                    {days.map((day) =>(
                        <div className='day' key={day}>
                            {day[0]} 
                            <img className='cloud' src={select_img(day, weather.current_weather.weathercode)} alt="" />
                            <div className='temperature'>
                                <span>{weather.daily.temperature_2m_max[day[1]]}{weather.current_weather_units.winddirection}</span>
                                <span>{weather.daily.temperature_2m_min[day[1]]}{weather.current_weather_units.winddirection}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>) : (
                <div>
                    <p>CCC</p>
                </div>
            )}
        </div>
    )
}

export default TownDetails;