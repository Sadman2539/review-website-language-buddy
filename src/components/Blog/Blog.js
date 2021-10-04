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
                <h3>Latest Blogs</h3>
                <div>
                    <Row xs={1} md={4} className="g-4">
                        {
                            articles.slice(0, 4).map(article => <Article
                                key={article.id}
                                article={article}></Article>)
                        }


                    </Row>
                </div>
                <div className="watch-now mt-5">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uNXrTuYSebA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Blog;