import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";



function Header() {

  return (
    <Navbar className="mb-4" bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Link to="/" className="nav-link" style={{ fontSize: '20px' }}>Agenda</Link>
          <Link to="/form" className="nav-link" style={{ fontSize: '20px' }}>Criar Agendamento</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;