import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoTienda from '../assets/logoGamer.png';



function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
      </Navbar.Brand>
      <img
              src={logoTienda}
              width="79"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        <Navbar.Brand href="#home">GAMER CODE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Contactanos</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mangas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Funkos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Componentes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Promociones
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Ubicacion</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Carrito
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};


export {NavBar};