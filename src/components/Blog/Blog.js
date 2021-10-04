import React, { useEffect, useState } from 'react';

import { Row } from 'react-bootstrap';
import Article from '../Article/Article';
import './Blog.css'
const Blog = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('./articles.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])
    return (
        <div className="blog-section container">
            <div className="latest-blogs">
                <h1 className="mt-3 mb-4">Latest Blogs</h1>
                <div>
                    <Row xs={1} md={4} className="g-4">
                        {
                            articles.slice(0, 4).map(article => <Article
                                key={article.id}
                                article={article}></Article>)
                        }


                    </Row>
                </div>
            </div>
            {/* watch now video section   */}
            <div className="watch-now-section">
                <h1 className="mt-5 mb-2">
                    Watch Now
                    <i class="fas fa-chevron-right ps-2"></i>
                    <i class="fas fa-chevron-right"></i>
                </h1>
                <div className="watch-now ">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uNXrTuYSebA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            {/* language tips section  */}
            <div className="language-tips">
                <h1 className="mt-3 mb-4">Language Tips</h1>
                <div>
                    <Row xs={1} md={4} className="g-4">
                        {
                            articles.slice(0, 4).map(article => <Article
                                key={article.id}
                                article={article}></Article>)
                        }
                    </Row>
                </div>

            </div>


        </div>
    );
};

export default Blog;