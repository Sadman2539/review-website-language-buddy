import { Card, Col } from 'react-bootstrap';
import './Article.css'
const Article = (props) => {
    const { title, writer, body, image } = props.article;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            by {writer}
                        </Card.Text>
                        <Card.Text>
                            {body.slice(0, 100)}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Article;