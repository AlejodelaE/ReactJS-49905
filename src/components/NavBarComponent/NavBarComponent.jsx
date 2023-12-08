import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CardWidget from '../CardWidget/CardWidget';

const NavBarComponent = () => {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Kinetoscope</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#home">Mi Lista</Nav.Link>
                    <Nav.Link href="#home">Películas</Nav.Link>
                    <Nav.Link href="#home">Series</Nav.Link>
                    <Nav.Link href="#home">Sobre Nosotros</Nav.Link>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Nav>
            </Navbar.Collapse>
            <CardWidget/>
        </Container>
    </Navbar>
    );
}

export default NavBarComponent