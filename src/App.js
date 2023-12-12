import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Main from "./paginas/main";

function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              src='https://1000marcas.net/wp-content/uploads/2020/03/shein-logo.png'
              height='60'
              alt="Logo"
            />
          </Navbar.Brand> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="./produtos">Produtos</Nav.Link>
              <Nav.Link href="https://www.instagram.com/mariaborgesn/">Contato</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="./usuario">
                <img
                  src="https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png"
                  height='40'
                  alt="Usuário"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="page content">
        <Main />
      </div>
    </div>
  );
}

export default App;
