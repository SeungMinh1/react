import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

function BoardUpdate() {
    const navigation = useNavigate();
    const { id } = useParams();
    let url = `http://localhost:8000/board/${id}`
    const [form, setForm] = useState({
        "id": 0,
        "title": "",
        "body": "",
        "dt": "",
        "writer": ""
    })

    const callBoard = async () => {

        const result = await axios.get(url);
        setForm(result.data[0]);

    }
    useEffect(() => { callBoard(); }, [])

    function doUpdate(id) {
        let change = {title:form.title, body:form.body, writer:form.writer}
        axios.put(`http://localhost:8000/board/${form.id}`, change)
        alert("수정되었습니다..");
        navigation(`/board/${id}`);
    }


    return (
        <>
            <h2>수정</h2>
            <input type="text" name="writer" placeholder="writer" value={form.writer} class="form-control"
                onChange={e => { setForm({ ...form, writer: e.target.value }) }}></input>
            <input type="text" name="title" placeholder="title" value={form.title} class="form-control"
                onChange={e => { setForm({ ...form, title: e.target.value }) }}></input>
            <input type="text" name="body" placeholder="body" value={form.body} class="form-control"
                onChange={e => { setForm({ ...form, body: e.target.value }) }}></input>
            <button className="btn btn-primary" onClick={() => doUpdate(form.id)}>수정</button>
        </>
    )
}

export default BoardUpdate;