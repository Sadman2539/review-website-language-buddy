import React from 'react';
import './NotFound.css';
import notFound from '../../images/not-found.jpg'
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const NotFound = () => {
    return (
        <div>
            <h3 className="mt-4 mb-3">Sorry! Page Not Found!!!</h3>
            <img className="img-fluid" src={notFound} alt="" />

            <div>
                <NavLink to="/home" >
                    <Button className="mt-4 regular-btn" variant="success">
                        <i className="fas fa-arrow-left pe-3"></i>
                        Back To Home</Button>
                </NavLink>
            </div>

        </div>
    );
};

export default NotFound;