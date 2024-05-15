/* eslint-disable */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">

      {/* NavBar */}
      <Navbar bg="dark" data-bs-theme="dark">
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
            <h4>이름</h4>
            <p>설명</p>
          </div>
          <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + '/현호.png'} width="90%"/> 
            <h4>이름</h4>
            <p>설명</p>
          </div>
          <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + '/영인이.png'} width="90%"/> 
            <h4>이름</h4>
            <p>설명</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
