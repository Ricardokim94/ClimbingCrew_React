import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
//import { changeName, increase } from "./../store/userSlice.js";
import { addCount, deleteCount } from "./../store.js";


function Together() {
    let mem = useSelector((state) => state.mem); // Redux store에서 mem 데이터를 가져옵니다
    //console.log(mem);             //let state = useSelector((state) => state.user);
    let dispatch = useDispatch(); //store.js 로 요청보내주는 함수임
    
    const handleDelete = (id) => { //정말로 삭제할 건지 한번더 물어보는 alert
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            dispatch(deleteCount(id));
        }
    };

    
    return (
        <div>
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
                                 <button style={{ marginLeft: '10px' }} className="btn btn-secondary" onClick={() => handleDelete(mem.id)}>삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Together;
