import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom'

function LiquorInfo(){
    let [liquor, setLiquor] = useState([]);
    let [loading, setloading] = useState(false);
    const {no} = useParams();
    let url = `http://localhost:8000/liquor/${no}`

    const navigation = useNavigate();
    const callLiquor = async() =>{
        setloading(true);
        const result = await axios.get(url);
        setloading(false);
        setLiquor(result.data[0]);
    }
    useEffect(() =>{callLiquor();}, [])

    if(loading) return <div><h2>로딩중입니다...</h2></div>
    
    async function deleteThis(no){
        const d =await axios.delete(`http://localhost:8000/liquor/${no}`);
        alert("삭제되었습니다.");
        navigation("/liquor");
    }
    return(
        <>
        <div>
            <h2>상세 정보</h2>
        <p key={liquor.no}>{liquor.no}/{liquor.name}/ {liquor.description}</p>
        <button onClick={()=>navigation(-1)}>뒤로</button>
        <button onClick={()=>navigation(`/liquor/update/${liquor.no}`)}>수정</button>
        <button onClick={()=>deleteThis(liquor.no)}>삭제</button>
        
        </div>
        </>
    )
}

export default LiquorInfo;