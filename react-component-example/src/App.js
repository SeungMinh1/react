import { BrowserRouter, Route, Routes, NavLink, useParams, useLocation, useNavigate } from 'react-router-dom'
import Comp from "./components/Comp01"
import Comp02 from "./components/Comp02"
import Comp04 from "./components/Comp04"
import Comp05 from "./components/Comp05"
import Comp06 from "./components/Comp06"
//import TodoApp from "./page/TodoApp"
import {Card, CardBody} from 'reactstrap'

function App() {
  const products = [{no:1, pname: "apple", price:100},
                     {no:2, pname: "glen", price:500},
                     {no:3, pname: "sherry", price:700}
                 ];
  //   const DATA = [
  //   { id: "todo-0", name: "Eat", completed: true },
  //   { id: "todo-1", name: "Sleep", completed: false },
  //   { id: "todo-2", name: "Repeat", completed: false },
  // ];

  return (
    <div className="App">
      <div className='navbar bg-body-tertiary'>
        <div className='container-fluid'>
          <h1>React Router DOM Comp로 연습</h1>
        </div>
      </div>
      <div className='row'>

        <div className='col-4'>
          <ul className='nav flex-column'>
            <li className='nav-item'><NavLink className='nav-link' to='/Comp'>Comp</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/Comp02'>Comp02</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/Comp04'>Comp04</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/Comp05'>Comp05</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/Comp06'>Comp06</NavLink></li>
          </ul>
        </div>
        
        <div className='col-8'>
          <Card>
            <CardBody>
              <Routes>
                <Route path='/Comp' element={<Comp />} />;
                <Route path='/Comp02' element={<Comp02 />} />;
                <Route path='/Comp04' element={<Comp04 />} />;
                <Route path='/Comp05' element={<Comp05 />} />;
                <Route path='/Comp06' element={<Comp06 />} />;
              </Routes>
            </CardBody>
          </Card>
        </div>
    
    </div>

    </div>
  );
}

export default App;
