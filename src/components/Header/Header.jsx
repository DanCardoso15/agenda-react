import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";



function Header() {

  return (
    <Navbar className="mb-2">
      <Container>
        <Nav className="me-auto">
          <Link to="/" className="nav-link" style={{ fontSize: '25px' }}>Agenda</Link>
          <Link to="/form" className="nav-link" style={{ fontSize: '25px' }}>Criar Agendamento</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;