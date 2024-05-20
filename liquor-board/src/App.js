import { Route, Routes, NavLink } from 'react-router-dom'
import styled from 'styled-components';
import LiquorList from './components/LiquorList';
import Home from './components/Home';
import LiquorInsert from './components/LiquorInsert';
import LiquorInfo from './components/LiquorInfo';
import LiquorUpdate from './components/LiquorUpdate';

function App() {
  return (
    <div className="App">
      <div>
        <h2>시작</h2>
        <p><NavLink to='/'>Homeeeeeeeee</NavLink></p>
        <p><NavLink to='/liquor'>LiquorList</NavLink></p>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/liquor' element={<LiquorList></LiquorList>}></Route>
          <Route path='/liquor/:no' element={<LiquorInfo></LiquorInfo>}></Route>
          <Route path='/liquor/insert' element={<LiquorInsert></LiquorInsert>}></Route>
          <Route path='/liquor/update/:no' element={<LiquorUpdate></LiquorUpdate>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
