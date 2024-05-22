/* eslint-disable */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import memData from './mem.js';
import Detail from './Pages/Detail.js';
import MainPage from './Pages/MianPage.js';
import { useState } from 'react';


function App() {

  let [member] = useState(memData);
  let navigate = useNavigate(); //페이지 이동

  return (
    <div className="App">

      {/* NavBar */}
      <Navbar bg="dark" data-bs-theme="dark" className="navbar-custom">
        <Container>
          <Navbar.Brand href="/">Oh-Coach Climbing Crew</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => (navigate('/'))}>Home</Nav.Link>
            <Nav.Link onClick={() => (navigate('/detail'))}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      {/* Page 나눠서 띄우기 - main page 일때, 배너랑 나오기 / detail page 일때는 상세 페이지 나오기*/}
      <Routes>
        <Route path="/" element={<MainPage memData={member} />} />
        <Route path="/detail" element={<Detail />} />
        {/* nested routes 사용법 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>맴버임</div>} />
          <Route path="location" element={<div>위치임</div>} />
        </Route>
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>
      </Routes>
      
    </div>
  );
}

//nested router study example
function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
