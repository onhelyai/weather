import '../styles/HourlyForecast.css'

function HourlyForecast({hours}){
    return(
       <div className='hourly-forecast'>
            <div className='first-line'>
                <p>Hourly forecast</p>
                <button className='days-button'>
                    Tuesday
                    <img className='imgs' src="/public/assets/images/icon-dropdown.svg" alt="" />
                </button>
            </div>
            <div className='hours-container'>
                {hours.map((hour) => (
                    <div className='hour'>
                        <span>{hour}PM</span>
                        <span>65°</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HourlyForecast;