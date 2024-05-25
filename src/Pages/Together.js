import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Together() {
    // Redux store에서 mem 데이터를 가져옵니다
    let mem = useSelector((state) => state.mem);
    console.log(mem);

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>이름</th>
                        <th>이달의 예약 횟수</th>
                        <th>예약변경</th>
                    </tr>
                </thead>
                <tbody>
                    {mem.map((mem, index) => (
                        <tr key={mem.id}>
                            <td>{index + 1}</td>
                            <td>{mem.name}</td>
                            <td>{mem.count}</td>
                            <td>
                                <button className="btn btn-primary">추가</button>
                                <button className="btn btn-secondary">삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Together;
