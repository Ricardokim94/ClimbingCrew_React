import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';


// 마우스 올려놓았을 때 스타일 정의
const StyledImage = styled.img`
  width: 100%;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

function Card(props) {
  
  let navigate = useNavigate(); //페이지 이동

  return (
    <div className="col-md-4">
      {/* 이미지 사진 i번쨰 public 폴더에 있는 것 받아오는 방법 */}
      <StyledImage 
        src={`${process.env.PUBLIC_URL}/mem${props.i + 1}.png`} 
        onClick={() => navigate(`/detail/${props.i}`)} 
      />
      <h4>{props.memData.name}</h4>
      <p>{props.memData.detail}</p>
    </div>
  );
}

export default Card;