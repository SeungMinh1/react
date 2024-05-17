import { useState, useEffect} from 'react';
import {useNavigate ,useParams} from 'react-router-dom';
import axios from "axios";

function BoardInfo() {
    const navigation = useNavigate();

    const {id} = useParams();

    let [loading, setloading] = useState(false);
    const [form, setForm] = useState( {
        "id" :0,
        "title" : "",
        "body" : "",
        "dt" : "",
        "writer" : ""
    })
    
    let url = `http://localhost:8000/board/${id}`

    const callBoard = async() => { 
        setloading(true);
        const result = await axios.get(url);
        setloading(false);
        setForm(result.data[0]);
        console.log(result.data[0]);
    }


    useEffect(() => {callBoard();}, [])
    if(loading) return <div><h2>로딩중입니다...</h2></div>

    function goHome(){
        navigation("/");
    }
    function goBack(){
        navigation(-1);
    }
    
    async function boardDelete(id){
        //let id = props.id;
        const deleteResult = await axios.delete(`http://localhost:8000/board/`+id);
        navigation("/");

    }
    
    return (
        <>
            <h1>게시글</h1>
            <div className="card" style={{"width":"35rem"}}>
                <div className='card-head'><h2>제목 : {form.title}({form.id})</h2></div>
                <div className="card-body">
                    <p className="card-text">작성자 : {form.writer}</p>
                    <hr></hr>
                    <p className="card-title">내용 : {form.body}</p>
                    <hr></hr>
                    <p className="card-text">작성일자 : {form.dt}</p>
                    <hr></hr>
                    <button className="btn btn-danger" onClick={()=>boardDelete(form.id)}>삭제</button>
                    <button  className="btn btn-success" onClick={goBack}>뒤로</button>
                    <button  className="btn btn-primary" onClick={goHome}>홈으로</button>
                    <button  className="btn btn-light" onClick={()=>navigation("/board")}>목록으로</button>
                    <button  className="btn btn-dark" onClick={()=>navigation(`/board/update/${form.id}`)}>수정</button>
                </div>
            </div>
        </>
    )
}

export default BoardInfo;