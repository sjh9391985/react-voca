import { useState, useEffect } from "react";

export default function useFetch(url){
     const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            return setData(data)
        })
    },[url]);

    return data;
}