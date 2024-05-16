import { BrowserRouter, Route, Routes, NavLink, useParams, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import {Card, CardBody} from 'reactstrap'

const contents = [
  { id: 1, title: 'HTML', description: 'HTML is...' },
  { id: 2, title: 'JS', description: 'JS is...' },
  { id: 3, title: 'React', description: 'React is...' }
]
const SimpleButton = styled.button`
  color: white;
  background-color: purple;
  `;

const LargeButton = styled(SimpleButton)`
  font-size: 2rem;
  margin: 1rem`

function ReactButton(props){
  return <button className={props.className}>{props.childern}</button>
}

const ReactLargeButton = styled(ReactButton)`
  background-color: yaellowgreen;
  color:white;`

function Topic() {
  const navigation = useNavigate();
  var params = useParams();
  var topic_id = Number(params.topic_id);
  console.log(params);
  const result = contents.find(c => c.id === topic_id)

  function goHome(){ // const goHome()=>{}
    navigation("/topics")
  }
  function goBack(){
    navigation(-1)
  }

  return (
    <div>
      <h3>{result.title}</h3>
      {result.description}
      <div className='mx-auto'>
        <button onClick={goBack} className='btn btn-success me-3'>뒤로가기</button>
        <button onClick={goHome} className='btn btn-info'>홈으로</button>
      </div>
    </div>
  )
}

function Topics() {

  return (
    <div>
      <h2>Topics</h2>
      <ul className='nav nav-tabs'>
        {contents.map((content) => 
          <li key={content.id} className='nav-item'>
            <NavLink to={"/topics/" + content.id} className='nav-link'>{content.title}</NavLink>
          </li>
        )}

      </ul>
      <Routes>
        <Route path='/:topic_id' element={<Topic />}></Route>
      </Routes>
    </div>
  )
}
function Home() {
  const style = {fontSize:"3rem", color:"skyblue"}
  return (
    <div>
      <h2>Home</h2>
      <div style={style}>Home...</div>
      <SimpleButton>스타일드컴포넌트</SimpleButton>
      <LargeButton>상속</LargeButton>
      <ReactButton>등록</ReactButton>
      <ReactButton>삭제</ReactButton>
      <ReactLargeButton>ReactLargeButton</ReactLargeButton>
    </div>
  )
}

function Contact() {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  return (
    <div>
      <h2>Contact</h2>
      Contact...
      <div>이름{search.get("name")}</div>
      <div>나이{search.get("age")}</div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className='navbar bg-body-tertiary'>
        <div className='container-fluid'>
          <h1>Hello React Router DOM</h1>
        </div>
      </div>
      <div className='row'>

        <div className='col-4'>
          <ul className='nav flex-column'>
            <li className='nav-item'><NavLink className='nav-link' to='/'>Home</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/Topics'>Topics</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/Contact'>Contact</NavLink></li>
          </ul>
        </div>

        <div className='col-8'>
          <Card>
            <CardBody>
              <Routes>
                <Route path='/' element={<Home />} />;
                <Route path='/topics/*' element={<Topics />} />;
                <Route path='/Contact' element={<Contact />} />;
              </Routes>
            </CardBody>
          </Card>
        </div>

      </div>
    </div>
  );
}

export default App;
