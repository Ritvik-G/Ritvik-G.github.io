import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {FaLinkedinIn,FaGithub,FaOrcid,FaGraduationCap, FaEnvelope, } from 'react-icons/fa';
import { FaBluesky,  FaMoon, FaSun,  } from 'react-icons/fa6';

import './Navbar.css';

const Navbar2 = ({ toggleTheme, theme:globalTheme}) => {
    const [navBackground, setNavBackground] = useState('transparent');
    // Local theme state (optional, not recommended)
  const [localTheme, setLocalTheme] = useState(globalTheme);

  // Sync localTheme with globalTheme whenever it changes
  useEffect(() => {
    setLocalTheme(globalTheme);
  }, [globalTheme]);

  // Handle theme toggle
  const handleThemeToggle = () => {
    const newTheme = localTheme === 'light' ? 'dark' : 'light';
    setLocalTheme(newTheme); // Update local theme
    toggleTheme(); // Call the global toggleTheme function
  };
    

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavBackground('var(--elements-background-color)'); 
            } else {
                setNavBackground('transparent'); 
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <>
                <Navbar  className="navbar" key='md' expand='md' fixed = "top" marginBottom="50px" style={{ backgroundColor: navBackground, transition: 'background-color 0.3s ease-in-out' }} >
                <Container fluid>
                    <Navbar.Brand href="/#" className="navbar-brand"><b>&emsp; Ritvik Garimella</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas 
                    id={`offcanvasNavbar-expand-md`} 
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`} 
                    className="navbar-offcanvas"
                    placement="end"
                    >
                    <Offcanvas.Header className="navbar-offcanvas-header" closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                        Ritvik G
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 ">

                            {/* Pages */}
                            <Nav.Link href="#/cv">Curriculum Vitae</Nav.Link>
                            <Nav.Link href="#/projects">Projects</Nav.Link>
                            <Nav.Link href="#/publications">Publications</Nav.Link>

                            {/* Socials */}
                            <Nav.Link target="_blank" rel="noopener noreferrer" href = 'mailto: ritvik916@gmail.com'><FaEnvelope/></Nav.Link>
                            <Nav.Link target="_blank" rel="noopener noreferrer"  href = 'https://www.linkedin.com/in/ritvikg/'><FaLinkedinIn/></Nav.Link>
                            
                            {/* Dark Mode Toggle Button */}
                            <Nav.Link style={{ color: "red" }} onClick={handleThemeToggle}>{localTheme === 'light' ? <FaSun /> : <FaMoon />}</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
                </Navbar>
        </>
    );
}

export default Navbar2;