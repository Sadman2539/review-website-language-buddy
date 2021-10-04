import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Course.css'

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
                        <Card.Text> <span><i className="fas fa-user pe-1"></i></span>{enrolled}</Card.Text>
                        {star}<Rating className="ps-2"
                            emptySymbol="fa fa-star-o star-rating"
                            fullSymbol="fa fa-star star-rating"
                            initialRating={star}
                            readonly
                        />


                        <Card.Text>Price:$ {price}</Card.Text>
                        <Button className="regular-btn" >
                            <i className="fas fa-shopping-cart pe-2"></i>
                            Buy Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;