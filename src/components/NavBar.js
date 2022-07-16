import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import logoTienda from '../assets/logoGamer.png';
// import {Outlet, Link} from 'react-router-dom';
import {CartWidget} from './CartWidget';


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
      <img
              src={logoTienda}
              width="79"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
      </Navbar.Brand>
      <Navbar.Brand href="#home">GAMER CODE</Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Contactanos</Nav.Link>
            <Nav.Link href="#pricing">Ubicación</Nav.Link>
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
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};


export {NavBar};