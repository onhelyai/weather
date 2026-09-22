import '../styles/Weather.css'

function Weather(){
    return(
        <div className='weather'>
            <p className='weather-paragraph'>How's the sky looking today?</p>
            <div className='buttons'>
                <input className='search-input' type="text" placeholder="Search for a place..."/>
                <button className="search-button">Search</button>
            </div>
            <img src="/assets/images/bg-today-large.svg" alt="" />
        </div>
    )
}

export default Weather;