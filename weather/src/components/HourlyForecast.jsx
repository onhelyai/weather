import '../styles/HourlyForecast.css'

function HourlyForecast({hours , display, displaydays}){
    return(
       <div className='hourly-forecast'>
            <div className='first-line'>
                <p>Hourly forecast</p>
                <button className='days-button' onClick={display}>
                    <img className='imgs' src="/public/assets/images/icon-dropdown.svg" alt="" />
                </button>
                {displaydays && <DaySlider />}
            </div>
            <div className='hours-container'>
                {hours.map((hour) => (
                    <div className='hour' key={hour}>
                        <span>{hour}PM</span>
                        <span>65°</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HourlyForecast;