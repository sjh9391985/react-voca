import {useState} from 'react';

const Hello = ({age}) => {

    
    let [name, setName] = useState("Mike");
    let msg = age > 19 ? "성인입니다." : "미성년자 입니다."
    
    function changeName(){
        let newName = name === "Mike"? "Jane" : "Mike"
        setName(newName)
    }

    return (
        <>
        <h2>State</h2>
        <p>컴포넌트의 속성값</p>
        <h2>{name}</h2>
        <button onClick={
            changeName
        }>이름 변경</button>
        <p>{name}는 {msg}</p>
        </>
        )
};

export default Hello;