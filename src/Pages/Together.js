import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Together() {
    // Redux store에서 shoes 데이터를 가져옵니다
    let shoes = useSelector((state) => state.shoes);
    console.log(shoes);

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {shoes.map((shoe, index) => (
                        <tr key={shoe.id}>
                            <td>{index + 1}</td>
                            <td>{shoe.name}</td>
                            <td>{shoe.count}</td>
                            <td>
                                <button className="btn btn-primary">수량 증가</button>
                                <button className="btn btn-secondary">수량 감소</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Together;
