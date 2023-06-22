import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import imgBrand from "../assets/img/brand.png";

export const Navi = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="mainNav" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="navBrand">
            <img src={imgBrand} width={250} height={50} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#ActiveCargo" className="navLink">
                Cargo in process
              </Nav.Link>
              <Nav.Link href="#newTracking" className="navLink">
                Create new tracking
              </Nav.Link>
              <Nav.Link href="#Login" className="navLink">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
