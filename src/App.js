/* eslint-disable */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import memData from './mem.js';
import { useState } from 'react';

function App() {

  let [member] = useState(memData);

  return (
    <div className="App">

      {/* NavBar */}
      <Navbar bg="dark" data-bs-theme="dark" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home">Oh-Coach Climbing Crew</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">MEM</Nav.Link>
            <Nav.Link href="#features">Aaa</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 베너 */}
      <div className='main-bg'></div>

      {/* 가운데 사진3개 */}
      <div className="container">
        <div className="row">
          {/* <Card memData={memData[0]} i={1}></Card>
          <Card memData={memData[1]} i={2}></Card>
          <Card memData={memData[2]} i={3}></Card>  */}
          {/*반복문 map으로 수정 */}
          {
            memData.map((a,i)=>{
              return(
                <Card memData={memData[i]} i={i}></Card>
              )
            })
          }  
        </div>
      </div>

    </div>
  );
}


function Card(props) {

  return (
    <div className="col-md-4">
      {/* 이미지 사진 i번쨰 public 폴더에 있는 것 받아오는 방법 */}
      <img src={`${process.env.PUBLIC_URL}/mem${props.i+1}.png`} width="90%" />
      <h4>{props.memData.name}</h4>
      <p>{props.memData.detail}</p>
    </div>
  );
}

export default App;
