import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">ABC Restaurant </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
          <Nav.Link as={Link} to="/menu">Thực đơn</Nav.Link>
          <Nav.Link as={Link} to="/contact">Liên hệ</Nav.Link>
        </Nav>
        <Button variant="outline-light">
          Book Table
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;


