import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'

function LiquorInsert() {
    let [liquors, setLiquors] = useState([]);
    let [loading, setloading] = useState(false);
    let url = 'http://localhost:8000/liquor/'
    const navigation = useNavigate();

    const AddLiquor = () => {
        axios.post(url, liquors);
        alert("등록되었습니다.");
        navigation("/liquor");
    }

    return (
        <>
            <div>
                <h2>LiquorInsert</h2>
                <input type="text" name="name" placeholder="name..."
                    onChange={e => { setLiquors({ ...liquors, name: e.target.value }) }}></input>
                <input type="text" name="vol" placeholder="vol..."
                    onChange={e => { setLiquors({ ...liquors, vol: e.target.value }) }}></input>
                <input type="text" name="origin" placeholder="origin..."
                    onChange={e => { setLiquors({ ...liquors, origin: e.target.value }) }}></input>
                <input type="text" name="ABV" placeholder="ABV..."
                    onChange={e => { setLiquors({ ...liquors, ABV: e.target.value }) }}></input>
                <input type="text" name="category" placeholder="category..."
                    onChange={e => { setLiquors({ ...liquors, category: e.target.value }) }}></input>
                <input type="text" name="description" placeholder="description..."
                    onChange={e => { setLiquors({ ...liquors, description: e.target.value }) }}></input>
                <button onClick={AddLiquor}>등록</button>
            </div>
        </>
    )
}

export default LiquorInsert;