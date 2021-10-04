import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Course.css'
const Course = (props) => {
    const { author, courseName, enrolled, image, price, star } = props.course;
    return (
        <div>
            <Col>
                <Card className="course-card">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{courseName.slice(0, 50)}...</Card.Title>
                        <Card.Text>by {author}</Card.Text>
                        <Card.Text>Price: {price}</Card.Text>
                        <Button variant="success">Buy Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;