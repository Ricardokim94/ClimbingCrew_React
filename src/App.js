/* eslint-disable */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import memData from './mem.js';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'


function App() {

  let [member] = useState(memData);

  return (
    <div className="App">

      {/* NavBar */}
      <Navbar bg="dark" data-bs-theme="dark" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home">Oh-Coach Climbing Crew</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      {/* Page 나누기 - main page 일때, 배너랑 나오기 / detail page 일때는 상세 페이지 나오기*/}
      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>{/* 베너 */}
            <div className="container">{/* 가운데 사진3개 */}
              <div className="row">
                {
                  memData.map((a, i) => {
                    return (
                      <Card memData={memData[i]} i={i}></Card>
                    )
                  })
                }
              </div>
            </div>
          </>
        } />
        <Route path="/detail" element={<div>상세페이지 입니다.</div>} />
      </Routes>




    </div>
  );
}


function Card(props) {

  return (
    <div className="col-md-4">
      {/* 이미지 사진 i번쨰 public 폴더에 있는 것 받아오는 방법 */}
      <img src={`${process.env.PUBLIC_URL}/mem${props.i + 1}.png`} width="90%" />
      <h4>{props.memData.name}</h4>
      <p>{props.memData.detail}</p>
    </div>
  );
}

export default App;
