import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Article.css'
const Article = (props) => {
    const { title, writer, body, image } = props.article;
    return (
        <div className="article">
            <Col>
                <Card className="course-card">
                    <Card.Img className="article-img" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title.slice(0, 25)}</Card.Title>
                        <Card.Text>
                            by {writer}
                        </Card.Text>
                        <Card.Text>
                            {body.length === 80 ? body : body.slice(0, 80)}...
                        </Card.Text>
                        <NavLink to="/courses" >
                            <Button className="regular-btn">
                                Read More
                                <i class="fas fa-chevron-right ps-2"></i>
                                <i class="fas fa-chevron-right"></i>
                            </Button>
                        </NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Article;