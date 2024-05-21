import {Card,Row,Col,CardTitle,CardBody,Button,Form,FormGroup,Label,Input,FormText,Table} from "reactstrap";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom'

const ReviewForms = () => {
  const { no } = useParams();
  let [review, setReview] = useState([]);
  let [loading, setloading] = useState(false);


  const navigation = useNavigate();
  let url = `http://192.168.0.14:8000/review/select/${no}`

  const callReview = async () => {
    setloading(true);
    const result = await axios.get(url);
    setloading(false);
    setReview(result.data[0]);
    console.log(result.data[0])
  }
  useEffect(() => { callReview(); }, [])
  if (loading) return <div><h2>로딩중입니다...</h2></div>


  function UpdateReview() {
    const change = {reviewNo:review.reviewNo, liquorNo:review.liquorNo, title:review.title, writer:review.writer, content:review.content};
    axios.put(`http://192.168.0.14:8000/review/${review.reviewNo}`, change);
    alert("수정되었습니다.");
    navigation(`/grid/${review.liquorNo}`);

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
                  <th>리뷰번호</th>
                  <th>리뷰제목</th>
                  <th>리뷰작성자</th>
                  <th>리뷰내용</th>

                </tr>
              </thead>
              <tbody>
                  <tr key={review.reviewNo} className="border-top">
                    <td>{review.reviewNo}</td>
                    <td>{review.title}</td>
                    <td>{review.writer}</td>
                    <td>{review.content}</td>
                  </tr>
             
              </tbody>
            </Table>
          </CardBody>
        </Card>
      <Row>
        <Col>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Review Update
            </CardTitle>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label >Title</Label>
                  <Input
                    type="text"
                    name="title"
                    placeholder="title..."  value={review.title}
                    onChange={e => { setReview({ ...review, title: e.target.value }) }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Writer</Label>
                  <Input
                    type="text"
                    name="writer"
                    placeholder="writer..."  value={review.writer}
                    onChange={e => { setReview({ ...review, writer: e.target.value }) }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Content</Label>
                  <Input
                    type="text"
                    name="content"
                    placeholder="content..."  value={review.content}
                    onChange={e => { setReview({ ...review, content: e.target.value }) }}
                  />setReview
                </FormGroup>

                <button onClick={UpdateReview} className="btn btn-primary">수정</button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
        

      </div>
      
      
    </>
  )
};

export default ReviewForms;
