import { useOrder } from "./OrderContext";
import { Container, Row, Col } from "react-bootstrap";

function OrderList() {
    const { order } = useOrder();

    return (
        <Container className="mt-4">
            <h2>🛒 Danh sách Order</h2>
            {order.length === 0 ? <p>Chưa có món nào trong Order.</p> : (
                <Row>
                    {order.map((item, index) => (
                        <Col key={index} xs={12} md={6} lg={4} className="mb-3">
                            <div className="order-item p-3 border rounded">
                                <h4>{item.name}</h4>
                                <p><strong>Giá: {item.gia} VNĐ</strong></p>
                            </div>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default OrderList;
