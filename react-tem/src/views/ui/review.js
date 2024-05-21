import { Card, CardBody, CardTitle, CardSubtitle, Table, FormGroup, Label, Input, Row, Col, Form } from "reactstrap";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom'
import ReviewForms from "./ReviewForms";

const ShowReview = () => {
  const { no } = useParams();
  let [reviews, setReview] = useState([]);
  let [loading, setloading] = useState(false);

  let [addreview, setAddreview] = useState({});

  const navigation = useNavigate();
  let url = `http://192.168.0.14:8000/review/${no}`

  const callReview = async () => {
    setloading(true);
    const result = await axios.get(url);
    setloading(false);
    setReview(result.data);
    console.log(result.data)
  }
  useEffect(() => { callReview(); }, [])
  if (loading) return <div><h2>로딩중입니다...</h2></div>

  function AddReview() {
    const addreview2 = { liquorNo: no, title: addreview.title, writer: addreview.writer, content: addreview.content }
    axios.post('http://192.168.0.14:8000/review/', addreview2);
    alert("등록 되었습니다.");
    callReview();

  }
  async function UpdateReview(reviewNo) {
    navigation(`/ReviewForms/${reviewNo}`)
  }



  


  async function deleteReview(reviewNo) {
    await axios.delete(`http://192.168.0.14:8000/review/${reviewNo}`);
    alert("삭제되었습니다.");
    callReview();
  }


  return (
    <>

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

                    <td>
                      <button onClick={() => deleteReview(r.reviewNo)} className="btn btn-danger">삭제</button>
                      <button onClick={() => UpdateReview(r.reviewNo)} className="btn btn-info">수정</button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>

      </div>
      <Row>
        <Col>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Review Insert
            </CardTitle>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label >Title</Label>
                  <Input
                    type="text"
                    name="title"
                    placeholder="title..."  value={addreview.title}
                    onChange={e => { setAddreview({ ...addreview, title: e.target.value }) }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Writer</Label>
                  <Input
                    type="text"
                    name="writer"
                    placeholder="writer..."  value={addreview.writer}
                    onChange={e => { setAddreview({ ...addreview, writer: e.target.value }) }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Content</Label>
                  <Input
                    type="text"
                    name="content"
                    placeholder="content..."  value={addreview.content}
                    onChange={e => { setAddreview({ ...addreview, content: e.target.value }) }}
                  />
                </FormGroup>



                <button onClick={AddReview} className="btn btn-primary">등록</button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      
    </>



  );
};




export default ShowReview;


