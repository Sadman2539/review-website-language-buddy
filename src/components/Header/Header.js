import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Form, FormControl, Nav, Stack } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
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
                                    to="/services"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Services
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
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;