import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import JuegosS from '../JuegosS/JuegosS';
import './NavBar.css';

    const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand as={Link} to="" href="#home" className='logo'>Bienvenidos a Kinetoscope</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Link className='estilosnarvar' to="/" href="#features">Inicio</Link>
                <Link className='estilosnarvar' to="/Nosotros" href="#pricing">Sobre Nosotros</Link>
                <NavDropdown title="Categorias" className='estilosnarvar' id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/category/1">Pelea</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/2">JRPG</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/3">First Person Shooter</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/3">Carreras</NavDropdown.Item>
                <NavDropdown.Divider />
                </NavDropdown>
            </Nav>
            <Nav as={Link} to="cart">
                <CartWidget />
            </Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Mi cuenta</Nav.Link>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
    }

export default NavBar;
