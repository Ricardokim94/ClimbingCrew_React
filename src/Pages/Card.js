
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

export default Card;