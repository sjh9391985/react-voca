import useFetch from "../hooks/useFetch"
import { useRef } from "react";
import { useNavigate } from "react-router";

export default function CreateDay(){

    const days = useFetch("http://localhost:3002/days")
    const navigate = useNavigate();

    function createDay(){
        
        fetch('http://localhost:3002/days/', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                id: '',
                day: days.length+1,
            })
        })
        .then(res => {
            if(res.ok){
                alert("추가가 성공적으로 되었습니다!");
                navigate("/")
            }
            else if(res.status === "400"){
                alert("에러입니다!")
            }
        })
    }

    return(
        <>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={createDay}>Day 추가</button>
        </>
    );
}