import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {CartWidget} from '../CartWidget/CartWidget.js';
import logoTienda from '../../assets/logoGamer.png';


function NavBar(){
    return(
        <>
        <Navbar bg="dark" variant="dark">

            <Navbar.Brand href="#home">
                <img
                    src={logoTienda}
                    width="79"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Brand href="#home">Tienda Code</Navbar.Brand>
            <Container>

            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#features">Teclados</Nav.Link>
                <Nav.Link href="#pricing">Audifonos</Nav.Link>
                <Nav.Link href="#features">Componentes</Nav.Link>
            </Nav>
            <CartWidget/>
            </Container>
        </Navbar>
         </>
    );
}

export {NavBar};