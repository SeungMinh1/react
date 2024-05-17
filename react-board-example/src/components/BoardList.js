import { useState, useEffect } from 'react';
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'

function BoardList() {
    let [boards, setBoards] = useState([]);
    let [loading, setloading] = useState(false);
    let url = 'http://localhost:8000/board/'
    const navigation = useNavigate();

    const callBoard = async() => { 
        setloading(true);
        const result = await axios.get(url);
        setloading(false);
        setBoards(result.data);
        /*
        fetch(url)
            .then(response => response.json())
            .then(json => setBoards(json));
            */

    }


    useEffect(() => {callBoard();}, [])

    if(loading) return <div><h2>로딩중입니다...</h2></div>

    function toinsert(){
        navigation("/board/insert")
    }

    return (
        <>
            <h1>boardList</h1>

            <div style={{"width":"40rem"}}>
                <table className='table' border={"1px"} style={{"textAlign":"center"}}>
                    <thead>
                        <tr class="table-primary">
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                            <th>dt</th>
                            <th>writer</th>
                        </tr>
                    </thead>
                    <tbody>

                    {boards.map(board =>
                        <tr key={board.id} class="table-warning">
                            <td>{board.id}</td>
                            <td>{board.title}</td>
                            <td><Link to={`/board/${board.id}`}>{board.body}</Link></td>
                            <td>{board.dt}</td>
                            <td>{board.writer}</td>
                        </tr>
                    )}
        
                    </tbody>
                </table>
                <button className="btn btn-info" onClick={toinsert}>등록</button>


            </div>
        </>

    )
}

export default BoardList;