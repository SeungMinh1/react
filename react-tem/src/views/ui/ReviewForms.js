import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom'

const ReviewForms = () => {

  let [reviews, setReviews] = useState([]);
  let [loading, setloading] = useState(false);
  let url = 'http://localhost:8000/review/'
  const navigation = useNavigate();
  const ThisliquorNo = useParams();

  const AddReview = () => {
      const review = {requroNo:ThisliquorNo, title:reviews.title, writer:reviews.writer, content:reviews.content}
      axios.post(url, reviews);
      alert("등록되었습니다.");
      navigation(`/grid/${ThisliquorNo}`);
  }

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Liquor Insert
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="name..."
                  onChange={e => { setReviews({ ...reviews, title: e.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">vol</Label>
                <Input
                  type="text"
                  name="vol"
                  placeholder="vol..."
                  onChange={e => { setReviews({ ...reviews, writer: e.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">origin</Label>
                <Input
                  type="text"
                  name="origin"
                  placeholder="origin..."
                  onChange={e => { setReviews({ ...reviews, content: e.target.value }) }}
                />
              </FormGroup>

             
  
              <button onClick={AddReview}>등록</button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ReviewForms;
