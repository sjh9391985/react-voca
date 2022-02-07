import { Link } from "react-router-dom"

export default function EmptyPage(){

    return(
        <>
            <h2>잘못된 접근주소입니다.</h2>
            <Link to="/">홈으로 돌아기기</Link>
        </>
    )

}