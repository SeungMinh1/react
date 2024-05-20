import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom'

const ProjectTables = () => {
  const { no } = useParams();
    let [reviews, setReview] = useState([]);
    let [loading, setloading] = useState(false);
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

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

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
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
