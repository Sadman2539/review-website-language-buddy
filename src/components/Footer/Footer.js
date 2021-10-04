import React from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section mt-5 p-5">
            <div className="about w-25">
                <h3>Language Buddy</h3>
                <p>Language Buddy is a complete platform where you can learn, practice and share your thoughts about languages with people around the world.</p>
            </div>
            <div className="social-links">
                <h5>Subscribe to get monthly newsletters</h5>
                <Stack direction="horizontal" gap={3}>
                    <Form.Control className="me-auto" placeholder="your email" />
                    <Button variant="secondary">Submit</Button>
                </Stack>
            </div>
            <div className="pages">
                <Stack gap={4}>
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
            </div>
        </div>
    );
};

export default Footer;