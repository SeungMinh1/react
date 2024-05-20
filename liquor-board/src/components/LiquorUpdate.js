import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom'


function LiquorUpdate(){
    let [liquor, setLiquor] = useState([]);
    let [loading, setloading] = useState(false);
    const navigation = useNavigate();
    const {no} = useParams();
    let url = `http://localhost:8000/liquor/${no}`

    const callLiquor = async ()=>{
        const result = await axios.get(url);
        setLiquor(result.data[0]);
    }
    
    useEffect (()=>{callLiquor();}, [])

    function doUpdate(){
        const change = {name:liquor.name, vol:liquor.vol, origin:liquor.origin, ABV:liquor.ABV, category:liquor.category,description:liquor.description}
        axios.put(`http://localhost:8000/liquor/${liquor.no}`, change);
        alert("수정되었습니다.");
        navigation(`/liquor/${liquor.no}`);
    }
    return (
        <>
            <h2>LiquorUpdate</h2>
            <div>
                <h2>LiquorInsert</h2>
                <input type="text" name="name"  value={liquor.name} placeholder="name"
                    onChange={e => { setLiquor({ ...liquor, name: e.target.value }) }}></input>
                <input type="text" name="vol"  value={liquor.vol} placeholder="vol"
                    onChange={e => { setLiquor({ ...liquor, vol: e.target.value }) }}></input>
                <input type="text" name="origin"  value={liquor.origin} placeholder="origin"
                    onChange={e => { setLiquor({ ...liquor, origin: e.target.value }) }}></input>
                <input type="text" name="ABV"  value={liquor.ABV} placeholder="ABV"
                    onChange={e => { setLiquor({ ...liquor, ABV: e.target.value }) }}></input>
                <input type="text" name="category"  value={liquor.category} placeholder="category"
                    onChange={e => { setLiquor({ ...liquor, category: e.target.value }) }}></input>
                <input type="text" name="description" value={liquor.description} placeholder="description"
                    onChange={e => { setLiquor({ ...liquor, description: e.target.value }) }}></input>
                <button onClick={doUpdate}>수정</button>
            </div>
        </>
    )
}

export default LiquorUpdate;
;
