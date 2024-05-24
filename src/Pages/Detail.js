import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Detail(props) {

  let { id } = useParams();
  let memberIndex = parseInt(id, 10); // URL의 id를 숫자로 변환 (이미지가 mem1부터 시작함)
  let realId = props.member.find(x => x.id === memberIndex); // id를 숫자로 변환하여 비교
  let [tab, changeTab] = useState(0); // Tab화면 3가지 저장/상태가 3가지니까 숫자로 상태값 설정


  // 데이터가 존재하는지 확인
  if (!realId) { //return 밖에서 if문은 사용 가능하다.
    return <div>해당 멤버를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`${process.env.PUBLIC_URL}/mem${memberIndex + 1}.png`} width="100%" alt="상품 이미지" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{realId.name}</h4>
          <p>키 : {realId.height}</p>
          <p>좋아하는 동작 : {realId.detail}</p>
          <button className="btn btn-danger">같이할래요 ?</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        {/* //defaultActiveKey는 처음 방문했을 때 보여지는 default key */}
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
      <TabContent tab={tab} />



    </div>
  );

  function TabContent({ tab }) { //Detail안에 if 문 쓰기 위해서 component 하나 만들어서 안에다가 넣는다.
    //props 넣는 것 말고 {이름} 넣으면 이렇게 바로 쓸수 있다. props.tab 안쓰고

    let [fade, setFade] = useState('')

    useEffect(() => { //state 변할때 end 부착
      setTimeout(()=> { setFade('end') }, 100) //0.1초 후에 이거 코드 실행
      
      return ()=> { //cleanup Function 임. 이게 동작하기전에 동작하는것
        setFade('') //end 탈부착을 위해 처음에 없앴다가 붙여야 한다.
      }
    }, [tab])

    return (
      //if 문 쓰기 싫으면 이렇게도 구현 가능! [ , , , ][0] 은 앞에array에서 0번째 꺼내 달라는 소리임
      <div className={'start ' + fade}>  {/* 문자 중간에 변수 넣고 싶으면 */}
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
      </div>
    )
  }



}

export default Detail;
