import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css'
const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div className="container mt-4">
            <div >
                <h5>Start Now</h5>
                <h1>Select Your Course </h1>
            </div>
            <div className="latest-courses">
                <Row xs={1} md={4} className="g-4">
                    {
                        courses.map(course => <Course
                            key={course.key}
                            course={course} ></Course>)
                    }


                </Row>

            </div>
        </div>
    );
};

export default Courses;