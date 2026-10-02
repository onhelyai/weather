import '../styles/TownDetails.css'

function TownDetails({ weather, location, date }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  return (
    <div className='town-details'>
        <div>
            <img className='town-weather' src="/assets/images/bg-today-large.svg" alt="" />
            <p className='city-date'>
                {location.name}, {location.country} <br />
                {date}
            </p>
        </div>
        <div className='added-informations'>
            <div className='element'>
                <span>Feels like</span>
                <span>{Math.round(weather.current_weather.temperature - 2)}°</span>
            </div>
            <div className='element'>
                <span>Humidity</span>
                <span>46%</span>
            </div>
            <div className='element'>
                <span>Wind</span>
                <span>{weather.current_weather.windspeed} km/h</span>
            </div>
            <div className='element'>
                <span>Precipitation</span>
                <span>0mm</span>
            </div>
            </div>
            <div className='daily-forecast'>
                <p>Daily forecast</p>
                <div className='days-container'>
                    {days.map((day, index) => (
                        <div className='day' key={index}>
                            <p>{day}</p>
                            <p>{Math.round(weather.daily.temperature_2m_max[index])}°</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TownDetails