import React from 'react';
import './NotFound.css';
import notFound from '../../images/not-found.jpg'
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const NotFound = () => {
    return (
        <div>
            <img className="img-fluid" src={notFound} alt="" />

            <div>
                <NavLink to="/home" >
                    <Button variant="success">Back To Home</Button>
                </NavLink>
            </div>

        </div>
    );
};

export default NotFound;