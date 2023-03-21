import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./NavBar.css";

export function NavBar() {
  const { temaEscuro, alternarTema } = useContext(ThemeContext);

  let defaultIcon = "https://cdn-icons-png.flaticon.com/512/3073/3073665.png";

  if (temaEscuro) {
    defaultIcon = "https://cdn-icons-png.flaticon.com/512/581/581601.png";
  }

  return (
    <Navbar
      bg={temaEscuro ? "dark" : "success"}
      variant={temaEscuro ? "dark" : "light"}
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand>App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/perfil">
              Perfil
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Button variant="outline-light" onClick={alternarTema}>
              <img src={defaultIcon} width="16" alt="Icon" /> Alternar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
