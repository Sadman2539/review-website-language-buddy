import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import banner from '../../images/banner.png'
import './Home.css'
import { NavLink } from 'react-router-dom';


const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div className="container mt-4">
            {/* welcome banner  */}
            <div className="banner ">
                <div className="w-50 banner-text">
                    <h5>Your question is our concern!</h5>
                    <h1>Ready to start learning? </h1>
                    <h1>Sign up now! </h1>
                </div>
                <div className='w-50 banner-img'>
                    <img className="w-75" src={banner} alt="" />
                </div>
            </div>
            {/* video section  */}
            <div className="video-section">
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OPOZv4LO8wA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="videoText w-50">
                    <h1>Learn Apply Ask & Repeat</h1>
                    <p className="m-3">Practice with Language Buddy community by applying what you've learn from our online courses and increase your language skill.</p>
                    <Button className="regular-btn">Join Us</Button>
                </div>
            </div>

            {/* latest courses section  */}
            <div className="courses-section">
                <div className="courses-heading">
                    <h5>Start Now</h5>
                    <h1>Latest Courses</h1>
                </div>
                <div className="latest-courses">
                    <Row xs={1} md={4} className="g-4">
                        {
                            courses.slice(0, 8).map(course => <Course
                                key={course.key}
                                course={course} ></Course>)
                        }


                    </Row>

                </div>
                <div>
                    <NavLink to="/courses" >
                        <Button className="regular-btn">
                            View All Courses
                            <i className="fas fa-arrow-right ps-2"></i>
                        </Button>
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

export default Home;