import { useEffect } from "react";
import { useParams } from "react-router-dom";


function Detail(props) {

  //Lifecycle - Detail 코드가 실행될때 / update 될때 실행 됨.
  useEffect(()=>{
    console.log('test')
  })


  let { id } = useParams(); 
  let realId = props.member.find(function(x){ return x.id == id });//정렬되었을때 아이디 값 바뀌는것 방지
  let memberIndex = parseInt(id, 10); // URL의 id를 숫자로 변환 (이미지가 mem1부터 시작한다.)

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`${process.env.PUBLIC_URL}/mem${memberIndex + 1}.png`} width="100%" alt="상품 이미지" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{realId.name}</h4>
          <p>키 : {realId.height}</p>
          <p>좋아하는 무브 : {realId.detail}</p>
          <button className="btn btn-danger">같이하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;