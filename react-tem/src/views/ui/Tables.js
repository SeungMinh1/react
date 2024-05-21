import ProjectTables from "../../components/dashboard/ProjectTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'


const Tables = () => {
  let [liquors, setLiquors] = useState([]);
  let [loading, setloading] = useState(false);
  let url = 'http://192.168.0.14:8000/liquor/'
  const navigation = useNavigate();

  const callLiquor = async () => {
    setloading(true);
    const result = await axios.get(url);
    setloading(false);
    setLiquors(result.data);
  }
  useEffect(() => { callLiquor(); }, [])

  if (loading) return <div><h2>로딩중...</h2></div>

  function toinsert() {
    navigation(`/forms`);
  }

  return (
    <Row>
      
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Liquor List
          </CardTitle>
          <CardBody className="">
            <Table bordered>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>용량</th>
                  <th>종류</th>
                  <th>국가</th>
                  <th>종류</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                {liquors.map(liquor =>
                  <tr key={liquor.no}>
                    <th scope="row"><Link to={`/grid/${liquor.no}`}>{liquor.name}</Link></th>
                    <td>{liquor.vol}ml</td>
                    <td>{liquor.category}</td>
                    <td>{liquor.origin}</td>
                    <td>{liquor.ABV}</td>
                    <td>{liquor.description}</td>
                  </tr>

                )}

              </tbody>
            </Table>
            <button className="btn btn-info" onClick={toinsert}>등록</button>
          </CardBody>
        </Card>
      </Col>

    </Row>
  );
};

export default Tables;
