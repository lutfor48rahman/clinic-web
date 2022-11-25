import React, { useEffect } from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarComponent = () => {

    useEffect(()=>{
        const main = document.getElementById("main");
        const navbar = document.getElementById("navbar");
        window.onscroll = function (){
            if(window.pageYOffset >= navbar.offsetTop){
                navbar.classList.add("sticky");
            }
            else{
                navbar.classList.remove("sticky");
            }
        }
    },[])
    
    return (
        <div>
            <div id='main' className='main'>
                <div className='navHeading container'>
                    <div className='items'>
                        <p>Call Us : +8801946002600</p>
                        <p>House: 23, Sonargaon Janapath Road, Sector: 12, Uttara, Dhaka</p>
                    </div>
                    <div className='items'>
                        <p>icon</p>
                        <p>icon</p>
                        <p>icon</p>
                        <p>icon</p>
                    </div>
                </div>
            </div>
            <div id='navbar' className=''>
                <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='mainNav'>
                    <Container>
                        <Navbar.Brand href="#home">ZERODEVS</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className='navMenu' id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                {/* <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link> */}

                            </Nav>
                            <Nav>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/team">Our Team</Nav.Link>
                                <Nav.Link href="/service">Services</Nav.Link>
                                <NavDropdown title="Gallery" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/gallery">Our Gallery</NavDropdown.Item>
                                    <NavDropdown.Item href="/work-place">
                                        Work Place
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/paitaint-gallery">Paitient Gallery</NavDropdown.Item>
                                    <NavDropdown.Item href="/flyer">Flyers</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                                <Nav.Link href="/contact">
                                    Contact
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavbarComponent;