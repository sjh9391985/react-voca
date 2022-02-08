import useFetch from "../hooks/useFetch"
import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { IDay } from "./DayList";

export default function CreateWord(){

    const days : IDay[] = useFetch("http://localhost:3002/days");
    console.log(days)

    const navigate = useNavigate();

    function onSubmit(e : React.FormEvent){
        e.preventDefault();

        console.log(engRef.current.value)
        console.log(korRef.current.value)
        console.log(dayRef.current.value)

        //setIsDone(!isDone)
        fetch('http://localhost:3002/words/', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                id: '',
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false
            })
        })
        .then(res => {
            if(res.ok){
                alert("추가가 성공적으로 되었습니다!");
                navigate("/day/"+dayRef.current.value)
                dayRef.current.value = "";
                engRef.current.value = "";
                korRef.current.value = "";
                
            }
            else if(res.status === 400){
                alert("에러입니다!")
            }
        })
    }

    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);


    return(
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>

                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>    
                        ))}
                </select>
            </div>
            <button>저장</button>
            
        </form>
    )
}