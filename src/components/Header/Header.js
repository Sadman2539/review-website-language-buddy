import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import { Button, Container, Form, FormControl, Nav, Stack } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand href="#">Language Buddy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Stack direction="horizontal" gap={4}>
                                <NavLink
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/courses"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Courses
                                </NavLink>
                                <NavLink
                                    to="/blog"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Blog
                                </NavLink>
                            </Stack>
                        </Nav>
                        <Form className="d-flex">
                            <Button variant="success">Sign Up</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;