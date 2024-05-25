import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import memData from './mem.js';
import Detail from './Pages/Detail.js';
import Card from './Pages/Card.js';
import Together from './Pages/Together.js';

import { useState } from 'react';

function App() {
  let [member, setMember] = useState(memData);
  let navigate = useNavigate(); // 페이지 이동

  return (
    <div className="App">
      {/* NavBar */}
      <Navbar bg="dark" data-bs-theme="dark" className="navbar-custom">
        <Container>
          <Navbar.Brand href="/">Oh-Coach Climbing Crew</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail/0')}>Together</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Page 나눠서 띄우기 - main page 일때, 배너랑 나오기 / detail page 일때는 상세 페이지 나오기 */}
      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>{/* 배너 */}
            <div className="container">{/* 가운데 사진 3개 */}
              <div className="row">
                {member.map((member, i) => (
                  <Card memData={member} i={i} key={member.id}></Card>
                ))}
              </div>
            </div>
            <button onClick={() => { // 서버에 데이터 요청 (본인은 서버가 없어서 가상데이터로 대체해봄 - public에 data.json)
              fetch("/data.json")
                .then(res => res.json())
                .then(data => {
                  setMember(prev => {
                    // 중복 데이터를 피하기 위해 기존 데이터와 새로운 데이터를 비교하여 중복되지 않는 데이터만 추가
                    const newData = data.data.filter(newMember => !prev.some(existingMember => existingMember.id === newMember.id));
                    return [...prev, ...newData];
                  });
                })
                .catch(() => {
                  console.log('실패했습니다.');
                });
            }}>추가 맴버 더보기</button>
          </>
        } />
        <Route path="/detail/:id" element={<Detail member={member} />} />

        <Route path="/together" element={ <Together/> } />

      </Routes>
    </div>
  );
}

export default App;
