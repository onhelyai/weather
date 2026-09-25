import '../styles/Weather.css'
import HourlyForecast from './HourlyForecast';
import TownDetails from './TownDetails';

function Weather(){

    const elements = ["Feels like", "Humidity", "Wind", "Precipitation"];
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const hours = [3, 4, 5, 6, 7, 8, 9, 10];

    return(
        <div className='weather'>
            <p className='weather-paragraph'>How's the sky looking today?</p>
            <div className='buttons'>
                <input className='search-input' type="text" placeholder="Search for a place..."/>
                <button className="search-button">Search</button>
            </div>
            <div className='second-section'>
                <TownDetails days={days} elements={elements}/>
                <HourlyForecast hours={hours}/>
            </div>
        </div>
    )
}

export default Weather;