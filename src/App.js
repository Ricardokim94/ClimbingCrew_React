import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import memData from './mem.js';
import Detail from './Pages/Detail.js';
import Card from './Pages/Card.js';
import Together from './Pages/Together.js';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

function App() {
  //새로고침 방지, 데이터 방지
  useEffect(() => { // app을 실행하면 이 코드가 딱 먼저 실행된다.
    if (!localStorage.getItem('watched')) {
      localStorage.setItem('watched', JSON.stringify([])); // 최근 본 멤버 저장하기
    }
  }, []);

  let [member, setMember] = useState(memData);
  let navigate = useNavigate(); // 페이지 이동

  //react-query로 유저 이름 받아와 보기 (ajax)
  let result = useQuery('userName', () =>
    axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
      return a.data
    })
  )

  


  return (
    <div className="App">
      {/* NavBar */}
      <Navbar bg="light" data-bs-theme="light" className="navbar-custom">
        <Container>
          <Navbar.Brand href="/">Oh-Coach Climbing Crew</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/together')}>Together</Nav.Link>
          </Nav>
          <Nav className="ms-auto"> 
            { result.isLoading && '로딩중'} {/*로딩중일때 '로딩중입니다 보여짐 */}
            { result.error && '에러남' }
            { result.data && result.data.name }
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

        <Route path="/together" element={<Together />} />

      </Routes>
    </div>
  );
}

export default App;
