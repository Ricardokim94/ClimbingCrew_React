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
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/창목이.png'} width="90%"/> 
            <h4>{memData[0].name}</h4>
            <p>{memData[0].detail}</p>
          </div>
          <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + '/현호.png'} width="90%"/> 
            <h4>{memData[1].name}</h4>
            <p>{memData[1].detail}</p>
          </div>
          <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + '/영인이.png'} width="90%"/> 
            <h4>{memData[2].name}</h4>
            <p>{memData[2].detail}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
