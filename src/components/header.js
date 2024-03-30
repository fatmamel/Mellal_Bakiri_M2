import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FaUsers, FaMoneyBillAlt, FaSearch } from 'react-icons/fa';
import { IoHomeOutline, IoHeartOutline, IoPersonOutline  } from "react-icons/io5";

// Composant d'icône personnalisé
function CustomIcon(props) {
  return (
    <props.icon size={25} color="black" style={{ marginRight: '10px' }} />
  );
}

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">SOS'Dar</Navbar.Brand>
        <Form className="d-flex ms-3" style={{ width: '300px' }}>
            <div className="position-relative w-100">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="w-100"
              />
              <FaSearch className="position-absolute top-50 translate-middle-y" style={{ right: '10px' }} />
            </div>
          </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Utilisation du composant d'icône personnalisé pour tous les liens de navigation */}
            <Nav.Link href="#home"><CustomIcon icon={IoHomeOutline} /></Nav.Link>
            {/* <Nav.Link href="#about"><CustomIcon icon={FaInfoCircle} /></Nav.Link>
            <Nav.Link href="#services"><CustomIcon icon={FaTools} /></Nav.Link>
            <Nav.Link href="#works"><CustomIcon icon={FaBriefcase} /></Nav.Link> */}
            <Nav.Link href="#teams"><CustomIcon icon={FaUsers} /></Nav.Link>
            <Nav.Link href="#testimonials"><CustomIcon icon={IoHeartOutline} /></Nav.Link>
            <Nav.Link href="#pricing"><CustomIcon icon={FaMoneyBillAlt} /></Nav.Link>
            {/* <Nav.Link href="#blog"><CustomIcon icon={FaBlog} /></Nav.Link> */}
            <Nav.Link href="#contact"><CustomIcon icon={IoPersonOutline } /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
