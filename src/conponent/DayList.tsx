import dummy from "../db/data.json"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch"

export interface IDay{
    id : number;
    day : number
}

export default function DayList(){
    
    //const [days, setDays] = useState([]);
    // const [count, setCount] = useState(0);
    const days : IDay[] = useFetch('http://localhost:3002/days')

    // useEffect(() => {
    //     fetch('http://localhost:3002/days')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         setDays(data)
    //     })
    // },[])

    // function onClicked(){
    //     setCount(count+1);
    // }

    // function onClicked2(){
    //     setDays([
    //         ...days,
    //         {
    //             id: Math.random(),
    //             day: Math.round(Math.random()+1)
    //         }
    //     ])
    // }

    if(days.length === 0){
        return <span>Loading...</span>
    }
    return (
        <>
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link></li>
            ))}
        </ul>
        {/* <button onClick={onClicked}>{count}</button>
        <button onClick={onClicked2}>Day changed</button> */}
        </>
    )

}