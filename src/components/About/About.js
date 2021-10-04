import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="container">
            <div>
                <h1>Who are We</h1>
                <h3>Language Buddy is a complete platform where you can learn, practice and share your thoughts about languages with people around the world.</h3>
            </div>

            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/OPOZv4LO8wA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    );
};

export default About;