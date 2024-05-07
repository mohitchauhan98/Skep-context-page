import { useEffect, useState } from "react"
import './Clock.css'

const Clock = () => {
    const [display,setDisplay] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hours = now.getHours().toString()
            const minutes = now.getMinutes().toString()
            const timeString = `${hours}: ${minutes}`
            setDisplay(timeString)
        },1000)
        return () => clearInterval(interval)
    },[])
  return (
    <>
        <div className="clock-box">
            <div className="clock">{display}</div>
            <div className="clock-dates">Monday, May 6th</div>
        </div>
    </>
  )
}

export default Clock