import '../styles/TownDetails.css'

function TownDetails({days, elements}){
    return(
        <div className='town-details'>
            <img className='town-weather' src="/assets/images/bg-today-large.svg" alt="" />
            <div className='added-informations'>
                {elements.map((element) => (
                    <div className='element'>
                        {element}
                    </div>
                ))}
            </div>
            <div className='daily-forecast'>
                <p>Daily forecast</p>
                <div className='days-container'>
                    {days.map((day) =>(
                        <div className='day'>
                            {day}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TownDetails;