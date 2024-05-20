import { useState, useEffect } from 'react';
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'

function LiquorList(){
    let [liquors, setLiquors] = useState([]);
    let [loading, setloading] = useState(false);
    let url = 'http://localhost:8000/liquor/'
    const navigation = useNavigate();

    const callLiquor = async() =>{
        setloading(true);
        const result = await axios.get(url);
        setloading(false);
        setLiquors(result.data);
    }
    useEffect (()=>{callLiquor();}, [])

    if(loading) return <div><h2>로딩중...</h2></div>

    function toinsert(){
        navigation("/liquor/insert")
    }
    return (
        <>
       <div>
        <h2>LiquorList</h2>
       {liquors.map(liquor =>
        <p key={liquor.no}>{liquor.no}/<Link to={`/liquor/${liquor.no}`}>{liquor.name}</Link> / {liquor.description}</p>
        
       )}

       <button onClick={toinsert}>등록</button>
       </div>
        </>
    )
}

export default LiquorList;