import { useState, useEffect } from 'react'
import axios from 'axios'
import TownDetails from './TownDetails'
import HourlyForecast from './HourlyForecast'

function Weather(){
    const [city, setCity] = useState('Berlin')
    const [weather, setWeather] = useState(null)
    const [location, setLocation] = useState(null)
    const days = [["Mon", 0], ["Tue", 1], ["Wed", 2], ["Thu", 3], ["Fri", 4], ["Sat", 5], ["Sun", 6]];
    const hours = [3, 4, 5, 6, 7, 8, 9, 10];
    const [displaydays, setdisplay] = useState(false);

    const getWeatherByCity = async (cityName) => {
        try {
            const geoResponse = await axios.get(
                `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
            )
            if (geoResponse.data.results.length === 0) 
                return
            const { latitude, longitude, name, country } = geoResponse.data.results[0]
            setLocation({ name, country })
            const weatherResponse = await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min`
            )
            setWeather(weatherResponse.data)
        } catch (error) {
            console.log('Erreur:', error)
        }
    }

    useEffect(() => {
        getWeatherByCity('Berlin')
    }, [])

    const handleSearch = () => {
        if (city.trim()) {
        getWeatherByCity(city)
    }
    }

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className='weather'>
            <p className='weather-paragraph'>How's the sky looking today?</p>
            <div className='buttons'>
                <input
                    className='search-input' type="text" value={city} 
                    placeholder="Search for a place..." onChange={(e) => setCity(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>

            {weather && location ? (
                <div className='second-section'>
                    <TownDetails weather={weather} location={location} date={today} />
                    <HourlyForecast hours={hours} display={setdisplay} displaydays={displaydays}/>
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    )
}

export default Weather