import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate 사용
import { Nav } from "react-bootstrap";
import { addMember } from "./../store.js";
import { useDispatch } from "react-redux";
import "./../App.css";

function Detail(props) {
  let { id } = useParams();
  let memberIndex = parseInt(id, 10);
  let realId = props.member.find(x => x.id === memberIndex);
  let [tab, changeTab] = useState(0);
  let [fade2, setFade2] = useState('');
  let navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    setFade2('end');
    return () => {
      setFade2('');
    };
  }, []);

  let dispatch = useDispatch();

  if (!realId) {
    return <div>해당 멤버를 찾을 수 없습니다.</div>;
  }

  const handleAddMember = () => {
    if (window.confirm('횟수권을 추가확인 페이지로 이동하시겠습니까?')) {
      dispatch(addMember({ id: realId.id, name: realId.name, count: 1 }));
      navigate('/together'); // Together 페이지로 이동
    }
  };

  return (
    <div className={'container start ' + fade2}>
      <div className="row">
        <div className="col-md-6">
          <img src={`${process.env.PUBLIC_URL}/mem${memberIndex + 1}.png`} width="100%" alt="상품 이미지" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{realId.name}</h4>
          <p>키 : {realId.height}</p>
          <p>좋아하는 동작 : {realId.detail}</p>
          <button className="btn btn-danger" onClick={handleAddMember}>같이할래요 ?</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { changeTab(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { changeTab(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { changeTab(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} realId={realId} />
    </div>
  );

  function TabContent({ tab, realId }) {
    let [fade, setFade] = useState('');

    useEffect(() => {
      setTimeout(() => { setFade('end'); }, 100);
      return () => {
        setFade('');
      };
    }, [tab]);

    const tabContent = {
      0: <div className="tab-content">안녕하세요. 저는 <span className="tab-text">{realId.name}</span> 입니다.</div>,
      1: <div className="tab-content">제가 좋아하는 무브는 <span className="tab-text">{realId.detail}</span> 입니다.</div>,
      2: <div className="tab-content">저의 키는  <span className="tab-text">{realId.height}</span> 입니다. </div>
    };

    return (
      <div className={'start ' + fade}>
        {tabContent[tab]}
      </div>
    );
  }
}

export default Detail;
