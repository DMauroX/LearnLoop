import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand href="/">Learn Programming</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/python">Python</Nav.Link>
                        <Nav.Link href="/javascript">JavaScript</Nav.Link>
                        <Nav.Link href="/pythoneEsercizi">Esercizi</Nav.Link>
                        <Nav.Link href="/esercizi">Esercizi</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
