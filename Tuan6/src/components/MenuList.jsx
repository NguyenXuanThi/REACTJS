import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import MenuItem from "../components/MenuItem";
import menuData from "../data/menu.json";

function MenuList() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        setMenu(menuData);
    }, []);

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                {menu.map((item) => (
                    <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <MenuItem item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default MenuList;
