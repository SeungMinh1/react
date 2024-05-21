import {Card, Row,Col,CardTitle,CardBody,Button,Form,FormGroup,Label,Input,FormText,} from "reactstrap";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom'

const Cards = () => {  //수정페이지
  let [liquor, setLiquor] = useState([]);
  let [loading, setloading] = useState(false);
  const navigation = useNavigate();
  const {no} = useParams();
  let url = `http://192.168.0.14:8000/liquor/${no}`

  const callLiquor = async ()=>{
      const result = await axios.get(url);
      setLiquor(result.data[0]);
  }
  
  useEffect (()=>{callLiquor();}, [])

  function doUpdate(){
      const change = {name:liquor.name, vol:liquor.vol, origin:liquor.origin, ABV:liquor.ABV, category:liquor.category,description:liquor.description}
      axios.put(`http://192.168.0.14:8000/liquor/${liquor.no}`, change);
      alert("수정되었습니다.");
      navigation(`/grid/${liquor.no}`);
  }
  return (
    <Row>
      <Col>

        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Liquor Update
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="name..."
                  value={liquor.name}
                  onChange={e => { setLiquor({ ...liquor, name: e.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">vol</Label>
                <Input
                  type="text"
                  name="vol"
                  placeholder="vol..."
                  value={liquor.vol}
                  onChange={e => { setLiquor({ ...liquor, vol: e.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">origin</Label>
                <Input
                  type="text"
                  name="origin"
                  placeholder="origin..."
                  value={liquor.origin}
                  onChange={e => { setLiquor({ ...liquor, origin: e.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">ABV</Label>
                <Input
                  type="text"
                  name="ABV"
                  placeholder="ABV..."
                  value={liquor.ABV}
                  onChange={e => { setLiquor({ ...liquor, ABV: e.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">category</Label>
                <Input
                  type="text"
                  name="category"
                  placeholder="category..."
                  value={liquor.category}
                  onChange={e => { setLiquor({ ...liquor, category: e.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">description</Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="description..."
                  value={liquor.description}
                  onChange={e => { setLiquor({ ...liquor, description: e.target.value }) }}
                />
              </FormGroup>
  
              <button  className="btn btn-primary" onClick={doUpdate}>수정</button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Cards;
