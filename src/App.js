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

  return (
    <div className="App">

      {/* NavBar */}
      <Navbar bg="dark" data-bs-theme="dark" className="navbar-custom">
        <Container>
          <Navbar.Brand href="/">Oh-Coach Climbing Crew</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      {/* Page 나누기 - main page 일때, 배너랑 나오기 / detail page 일때는 상세 페이지 나오기*/}
      <Routes>
        <Route path="/" element={<MainPage memData={member} />} />
        <Route path="/detail" element={<Detail/>} />
      </Routes>
    </div>
  );
}



export default App;
