import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
//import { changeName, increase } from "./../store/userSlice.js";
import { addCount } from "./../store.js";
import { memo,useState } from "react";


 //자식 컴포넌트 재렌더링 막아보기
 let Child = memo(function(){
    console.log('재렌더링')
    return <div>
        자식임
    </div>
})


function Together() {
    let mem = useSelector((state) => state.mem); // Redux store에서 mem 데이터를 가져옵니다
    //console.log(mem);             //let state = useSelector((state) => state.user);
    let dispatch = useDispatch(); //store.js 로 요청보내주는 함수임
    let [count, setCount] = useState(0) 


    return (
        <div>
            {/* 재렌더링 막아보기 */}
            <Child count={count}></Child>
            <button onClick={()=>{ setCount(count +1) }}> ++ </button>

            {/* <h6> {state.name} {state.age} 의 예약페이지 입니다.</h6>
            
            <button onClick={()=>{
                dispatch((increase(100)))
            }}>age ++
            </button> */}

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>이름</th>
                        <th>이달의 예약 횟수</th>
                        <th>횟수권 추가</th>
                    </tr>
                </thead>
                <tbody>
                    {mem.map((mem, index) => (
                        <tr key={index}>
                            <td>{mem.id}</td>
                            <td>{mem.name}</td>
                            <td>{mem.count}</td>
                            <td>
                                <button onClick={()=>{
                                   dispatch(addCount(mem.id)) //아이디값을 찾아와서 count++해줌
                                }}>+</button>
                                {/* <button className="btn btn-primary">추가</button>
                                <button className="btn btn-secondary">삭제</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Together;
