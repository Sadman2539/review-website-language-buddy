import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-contact mt-5 p-5">

                <div className="about w-25">
                    <h3>Language Buddy</h3>
                    <p>Language Buddy is a complete platform where you can learn, practice and share your thoughts about languages with people around the world.</p>
                </div>
                {/* contact section  */}
                <div className="contact">
                    <h5>Subscribe to get monthly newsletters</h5>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control className="me-auto" placeholder="your email" />
                        <Button className="regular-btn">Subscribe</Button>
                    </Stack>
                    {/* social links section  */}
                    <div className="social-link mt-5">
                        <h5 className=" mb-3">Connect with us on social medias</h5>
                        <Stack direction="horizontal" gap={4}>
                            <NavLink className="route" to="#">
                                <i class="fab fa-facebook fa-3x"></i>
                            </NavLink>
                            <NavLink className="route" to="#" >
                                <i class="fab fa-twitter fa-3x"></i>
                            </NavLink>
                            <NavLink className="route" to="#">
                                <i class="fab fa-google-plus-g fa-3x"></i>
                            </NavLink>
                            <NavLink className="route" to="#">
                                <i class="fas fa-user fa-3x"></i>
                            </NavLink>
                        </Stack>
                    </div>

                </div>

                <div className="pages p-5">
                    <h4>Explore</h4>
                    <Stack gap={4}>
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
                </div>
            </div>

            {/* copyright section  */}
            <div className="copyright-section">
                <p>Language Buddy <i class="fa fa-copyright" aria-hidden="true">All Rights Reserved - 2021 |  Made With <i class="fas fa-heart"></i> by Sadman Sakib</i></p>
            </div>
        </div>
    );
};

export default Footer;