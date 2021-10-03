import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="container mt-4">
            <div className="banner ">
                <div className="w-50">
                    <h5>Your Help Is One Ask Away</h5>
                    <h1>Audio, Photo or Write to ask the biggest language community</h1>
                </div>
                <div className='w-50'>
                    <img src="../../logo.svg" alt="" />
                </div>
            </div>
            <div className="video-section">
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OPOZv4LO8wA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="videoText w-50">
                    <h2>Learn Apply Ask & Repeat</h2>
                    <p>Practice with Language Buddy community by applying what you've learn from our online courses and increase your language skill.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;