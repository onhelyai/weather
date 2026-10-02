import { useState } from 'react';
import '../styles/Weather.css'
import HourlyForecast from './HourlyForecast';
import TownDetails from './TownDetails';
import DaySlider from './DaySlider';
import axios from 'axios';
import { useEffect } from 'react';

function Weather(){

    const days = [["Mon", 0], ["Tue", 1], ["Wed", 2], ["Thu", 3], ["Fri", 4], ["Sat", 5], ["Sun", 6]];
    const hours = [3, 4, 5, 6, 7, 8, 9, 10];
    const [displaydays, setdisplay] = useState(false);
    const [city, setCity] = useState('Berlin')
    const [weather, setweather] = useState(null);

    useEffect(() => {
        const getWeatherByCity = async (cityName) => {
            try {
                const geoResponse = await axios.get(
                    `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
                )
                if (geoResponse.data.results.length === 0) {
                    console.log('Ville not found')
                    return
                }
                const { latitude, longitude } = geoResponse.data.results[0]
                console.log(`${cityName}: lat=${latitude}, lon=${longitude}`)
                const weatherResponse = await axios.get(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min`
                )
                const data = weatherResponse.data
                setweather(data)
                console.log(data)
            } catch (error) {
                console.log('Erreur:', error)
            }
        }
        getWeatherByCity(cityName)
    },[])

    const handleSearch = () => {
        if (city.trim()) {
            getWeatherByCity(city)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    const today = new Date()
        const dateStr = today.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        }
    )

    return(
        <div className='weather'>
            <p className='weather-paragraph'>How's the sky looking today?</p>
            <div className='buttons'>
                <input className='search-input' type="text" value={city} 
                placeholder="Search for a place..." onChange={(e) => setCity(e.target.value)}
                onKeyPress={handleKeyPress}/>
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>
            <div className='second-section'>
                <TownDetails days={days} weather={weather} setweather={setweather} city={city} date={dateStr} temperature={weather.current_weather.temperature}/>
                <HourlyForecast hours={hours} display={() => setdisplay(true)}/>
                {displaydays && <DaySlider />}
            </div>
        </div>
    )
}

export default Weather;