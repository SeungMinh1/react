import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom'

const ShowReview = () => {
  const { no } = useParams();
    let [reviews, setReview] = useState([]);
    let [loading, setloading] = useState(false);
    const navigation = useNavigate();
    let url = `http://localhost:8000/review/${no}`

    const callReview = async () => {
        setloading(true);
        const result = await axios.get(url);
        setloading(false);
        setReview(result.data);
        console.log(result.data)
    }
    useEffect(() => { callReview(); }, [])
    if (loading) return <div><h2>로딩중입니다...</h2></div>

    function add1(props){
        navigation(`/reviewforms/${props[0]}`);
    }
    async function update1(){
        
    }
    async function delete1(props){
        const d = await axios.delete(`http://localhost:8000/review/${props[0]}`);
        alert("삭제되었습니다.");
        navigation(`/grid/${props[1]}`);

    }


  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h2">Review</CardTitle>
     

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>리뷰제목</th>
                <th>리뷰작성자</th>
                <th>리뷰내용</th>

              </tr>
            </thead>
            <tbody>
              {reviews.map(r => (
                <tr key={r.reviewNo} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0">{r.title}</h6>
                      </div>
                    </div>
                  </td>
                  <td>{r.writer}</td>
                  <td>{r.content}</td>
                  int num1 = {r.reviewNo};
                  let num2 = {r.liquorNo};
                  <td><button onClick={()=>delete1(num1, num2)} className="btn btn-danger">삭제</button></td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="mt-3">
                  <span><button className="btn btn-primary" onClick={add1(reviews[0].liquorNo)}>등록</button> </span>
                  <span><button className="btn btn-info" onClick={update1}>수정</button> </span>
                  
                </div>
        </CardBody>
      </Card>
    </div>
  );
};




export default ShowReview;


