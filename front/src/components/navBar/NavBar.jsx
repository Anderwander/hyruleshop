import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { HiMenu } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { GrCart } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import "./NavBar.scss";
import { useState } from "react";

function NavScrollExample() {
  const [loged, setLoged] = useState(localStorage.getItem("infoUser"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("infoUser");
    setLoged(false);
    navigate("/");
  };

  return (
    <Navbar className="barra" expand="lg">
      <Container fluid>
        <NavDropdown title={<HiMenu />} id="navbarScrollingDropdown">
          <NavDropdown.Item as={Link} to="Nintendo">
            Nintendo Switch
          </NavDropdown.Item>
          <NavDropdown.Item href="#action4">Xbox One</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Xbox Series X</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Play Station 4</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Play Station 5</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Sobre Nosotros</NavDropdown.Item>
        </NavDropdown>
        <Navbar.Brand as={Link} to="/">
          eGames
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link  className="perfil" as={Link} to="/profile">
              <VscAccount />
            </Nav.Link>
            <Nav.Link className="carrito" as={Link} to="/orders">
              <GrCart />
            </Nav.Link>
            {loged && (
              <Nav.Link className='logOut' onClick={logout}>
                <HiOutlineLogout />
              </Nav.Link>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="buscador"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
