import { useState } from "react";
import days from '../days.json'
import '../styles/DaySlider.css'

function DaySlider(){

    const [slider, setdays] = useState(days);

    const setselected = (day) => {
    setdays((prev) =>
      prev.map((sliderday) =>
        sliderday.day === day ? { day: sliderday.day, selected: !slider.selected } : sliderday
      )
    );
  };

    return(
        <div>
            {
                days.map((day) => (
                    <div>
                        <button onClick={() => setselected(day)} className={day.selected === true ? 'selected' : 'not-selected'}>
                            {day}
                        </button>
                        <h1>Faaaah</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default DaySlider;