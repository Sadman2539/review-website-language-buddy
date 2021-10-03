import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Home.css'


const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="container mt-4">
            {/* welcome banner  */}
            <div className="banner ">
                <div className="w-50">
                    <h5>Your Help Is One Ask Away</h5>
                    <h1>Audio, Photo or Write to ask the biggest language community</h1>
                </div>
                <div className='w-50'>
                    <img src="../../logo.svg" alt="" />
                </div>
            </div>
            {/* video section  */}
            <div className="video-section">
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OPOZv4LO8wA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="videoText w-50">
                    <h2>Learn Apply Ask & Repeat</h2>
                    <p>Practice with Language Buddy community by applying what you've learn from our online courses and increase your language skill.</p>
                    <Button variant="outline-success">Join Us</Button>
                </div>
            </div>

            {/* our services section  */}
            <div className="courses-section">
                <div >
                    <h5>Start Now</h5>
                    <h1>Latest Courses</h1>
                </div>
                <div>
                    <Row xs={1} md={4} className="g-4">
                        {
                            courses.map(course => <Course
                                key={course.key}
                                course={course} ></Course>)
                        }


                    </Row>

                </div>
                <p>view more courses</p>
            </div>
        </div>
    );
};

export default Home;