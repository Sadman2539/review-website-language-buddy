import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Course = (props) => {
    const { author, courseName, enrolled, image, price, star } = props.course;
    return (
        <div>
            <Col>
                <Card className="course-card">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{courseName.length === 45 ? courseName : courseName.slice(0, 45)}</Card.Title>
                        <Card.Text>by {author}</Card.Text>
                        <Card.Text>Price:$ {price}</Card.Text>
                        <Button className="regular-btn" >
                            <i class="fas fa-shopping-cart"></i>
                            Buy Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;