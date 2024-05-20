import { Container, Col, Row, Card, CardBody, CardTitle } from "reactstrap";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom'
import ShowReview from "./review";
import ProjectTables from "../../components/dashboard/ProjectTable";


const Grid = () => {
  let [liquor, setLiquor] = useState([]);
  let [loading, setloading] = useState(false);

  const { no } = useParams();
  let url = `http://localhost:8000/liquor/${no}`
  const navigation = useNavigate();
  const callLiquor = async () => {
    setloading(true);
    const result = await axios.get(url);
    setloading(false);
    setLiquor(result.data[0]);
  }
  useEffect(() => { callLiquor(); }, [])

  if (loading) return <div><h2>로딩중입니다...</h2></div>

  async function deleteThis(no) {
    const d = await axios.delete(`http://localhost:8000/liquor/${no}`);
    alert("삭제되었습니다.");
    navigation("/table");
  }


  return (
    <div>

      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          {liquor.name} 상세정보
        </CardTitle>
        <CardBody className="">
          <Container>
            <Col xs="auto">
              <div className="bg-light p-2 border" style={{ textAlign: "center" }} >
                <img src={`/img/` + liquor.name + '.jpg'} alt={liquor.name} width={"300px"} height={"300px"} style={{ margin: "0 auto" }} />
              </div>
            </Col>
            <Row className="mt-3">
              <Col sm="12" md={{ offset: 2, size: 8, }}>

                <div className="bg-light p-2 border mt-3" >
                  <div className="bg-info text-light d-inline-flex p-2">이름</div> <div className="d-inline-flex p-2"> {liquor.name}</div></div>

                <div className="bg-light p-2 border mt-3" >
                  <div className="bg-info text-light d-inline-flex p-2">용량</div> <div className="d-inline-flex p-2"> {liquor.vol}</div></div>

                <div className="bg-light p-2 border mt-3" >
                  <div className="bg-info text-light d-inline-flex p-2">국가</div> <div className="d-inline-flex p-2"> {liquor.origin}</div></div>

                <div className="bg-light p-2 border mt-3" >
                  <div className="bg-info text-light d-inline-flex p-2">도수</div> <div className="d-inline-flex p-2"> {liquor.ABV}</div></div>

                <div className="bg-light p-2 border mt-3" >
                  <div className="bg-info text-light d-inline-flex p-2">종류</div> <div className="d-inline-flex p-2"> {liquor.category}</div></div>

                <div className="bg-light p-2 border mt-3" >
                  <div className="bg-info text-light d-inline-flex p-2">설명</div> <div className="d-inline-flex p-2"> {liquor.description}</div></div>

                <div className="mt-3">
                  <span><button className="btn btn-primary" onClick={() => navigation(-1)}>뒤로</button> </span>
                  <span><button className="btn btn-info" onClick={() => navigation(`/cards/${liquor.no}`)}>수정</button> </span>
                  <button onClick={() => deleteThis(liquor.no)} className="btn btn-danger">삭제</button>

                </div>
              </Col>


            </Row>
          </Container>

        </CardBody>
      </Card>

      <Row>
        <Col lg="12">
        < ShowReview />
        </Col>
      </Row>

     
    </div>
  );
};

export default Grid;
