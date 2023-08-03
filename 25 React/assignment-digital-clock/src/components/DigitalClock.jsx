import { useState } from "react";
import "./styles/DigitalClock.css"

function DigitalClock() {

    console.log("rendering")

    const [hours, setHours] = useState(new Date().getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [seconds, setSeconds] = useState(new Date().getSeconds());

    setInterval(() => {
        setHours(new Date().getHours());
        setMinutes(new Date().getMinutes());
        setSeconds(new Date().getSeconds());
    }, 1000)

    return (
        <div className="DigitalClock">
            <div>
                <span className="hours">
                    {hours < 10 && "0"}
                    {hours}
                </span>{" "}
                {" "}
                <span className="minutes">
                    {minutes < 10 && "0"}
                    {minutes}
                </span>{" "}
                {" "}
                <span className="seconds">
                    {seconds < 10 && "0"}
                    {seconds}
                </span>
            </div>
        </div>
    );
}

export default DigitalClock;