import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import { Button, Container, Form, Nav, Stack } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="navigation ">
            <Navbar expand="lg" >
                <Container >
                    <NavLink className="site-name" to="/">
                        Language Buddy
                    </NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Stack direction="horizontal" gap={4}>
                                <NavLink className="route" to="/home">
                                    Home
                                </NavLink>
                                <NavLink className="route" to="/about" >
                                    About
                                </NavLink>
                                <NavLink className="route" to="/courses">
                                    Courses
                                </NavLink>
                                <NavLink className="route" to="/blog">
                                    Blog
                                </NavLink>
                            </Stack>
                        </Nav>
                        <Form className="d-flex">
                            <Button className="regular-btn">Sign Up</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;