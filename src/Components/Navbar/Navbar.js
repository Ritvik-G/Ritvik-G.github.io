import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function navbar(){
    return(
        <>
                <Navbar key='md' variant="light" expand='md' className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="/">&emsp; Ritvik G</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas 
                    id={`offcanvasNavbar-expand-md`} 
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`} 
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                        Ritvik G
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 ">
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="projects">Projects</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                        &emsp; &emsp; &emsp;
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
                </Navbar>
        </>
    );
}

export default navbar;