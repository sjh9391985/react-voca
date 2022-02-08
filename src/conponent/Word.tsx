import { useState } from "react"

interface IProps {
    word : IWord;
}

// 여러개의 property에 각각 다른 타입을 사용할 수 있습니다.
export interface IWord {
    day: string;
    eng: string;
    kor: string;
    isDone: boolean;
    id: number;
}

export default function Word({word} : IProps){
    
    const [words, setWords] = useState(word);
    const [isShow, setIsShow] = useState(false);
    const [text, setText] = useState("뜻 보기");
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow)
        const msg = isShow === false? "뜻 숨기기" : "뜻 보기"
        setText(msg)
    }

    function toggleDone(){
        //setIsDone(!isDone)
        fetch('http://localhost:3002/words/'+word.id, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone
            })
        })
        .then(res => {
            if(res.ok){
                setIsDone(!isDone)
            }
        })
        
    }

    function idDelete(){
        if(isDone &&window.confirm("삭제 하시겠습니까? ")){
        fetch('http://localhost:3002/words/'+words.id, {
            method : 'DELETE'
        })
        .then(res => {
            if(res.ok){
                setWords({ ...word, id : 0 })
            }
        })
    }
        else if(!isDone){
            alert("체크되어있지 않습니다.")
        }
    }
    if(words.id === 0){
        return null;
    }

    return(
        <tr >
                    <td>
                        <input type="checkbox" onChange={toggleDone} checked={isDone}/>
                    </td>
                    <td >{word.eng}</td>
                    <td >{isShow && word.kor}</td>
                    <td>
                        <button onClick={toggleShow}>{text}</button>
                        <button onClick={idDelete}>삭제</button>
                    </td>
                </tr>
    )
}