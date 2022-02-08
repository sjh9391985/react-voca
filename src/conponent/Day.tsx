import { useParams } from "react-router-dom";
import Word, { IWord } from "./Word";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export default function Day(){

    const { day } = useParams<{day:string}>();
    // const wordList = dummy.words.filter(word => (
    //     word.day === day
    // ))

    // const [words, setWords] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3002/words?day="+day)
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         return setWords(data)
    //     })
    // },[]);
    const words : IWord[] = useFetch("http://localhost:3002/words?day="+day)


    return (
    <>
    <h2>Day {day}</h2>
    <table>
        <tbody>
            {words.map(word => (
                <Word word={word} key={word.id}/>
            ))}
        </tbody>
    </table>
    </>
    )
}