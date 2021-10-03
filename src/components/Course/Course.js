import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css'
const Course = (props) => {
    const { author, courseName, enrolled, image, price, star } = props.course;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{courseName}</Card.Title>
                        <Card.Text>by {author}</Card.Text>
                        <Card.Text>Price: {price}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;