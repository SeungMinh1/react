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
import { Link, useNavigate } from 'react-router-dom'

const Forms = () => {
  let [liquors, setLiquors] = useState([]);
  let [loading, setloading] = useState(false);
  let url = 'http://localhost:8000/liquor/'
  const navigation = useNavigate();

  const AddLiquor = () => {
      axios.post(url, liquors);
      alert("등록되었습니다.");
      navigation("/table");
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
                  onChange={e => { setLiquors({ ...liquors, name: e.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">vol</Label>
                <Input
                  type="text"
                  name="vol"
                  placeholder="vol..."
                  onChange={e => { setLiquors({ ...liquors, vol: e.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">origin</Label>
                <Input
                  type="text"
                  name="origin"
                  placeholder="origin..."
                  onChange={e => { setLiquors({ ...liquors, origin: e.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">ABV</Label>
                <Input
                  type="text"
                  name="ABV"
                  placeholder="ABV..."
                  onChange={e => { setLiquors({ ...liquors, ABV: e.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">category</Label>
                <Input
                  type="text"
                  name="category"
                  placeholder="category..."
                  onChange={e => { setLiquors({ ...liquors, category: e.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">description</Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="description..."
                  onChange={e => { setLiquors({ ...liquors, description: e.target.value }) }}
                />
              </FormGroup>
  
              <button onClick={AddLiquor}>등록</button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
