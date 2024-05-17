import { useState } from 'react';

import axios from "axios";

function BoardInsert() {

    //const id = useParams();

    const [form, setForm] = useState({});

    let url = 'http://localhost:8000/board'



    const clickHandler = () => {
        axios.post(url, form)
        alert("등록되었습니다.");
    }

    return (
        <>
            <div style={{"width":"35rem"}}>
                <h2>등록 페이지</h2>
                <input type="text" name="writer" placeholder="writer" class="form-control"
                    onChange={e => { setForm({ ...form, writer: e.target.value }) }}></input>
                <input type="text" name="title" placeholder="title" class="form-control"
                    onChange={e => { setForm({ ...form, title: e.target.value }) }}></input>
                <input type="text" name="body" placeholder="body" class="form-control"
                    onChange={e => { setForm({ ...form, body: e.target.value }) }}></input>
                <button class="btn btn-outline-info" onClick={clickHandler}>확인</button>
            </div>
        </>
    )
}

export default BoardInsert;