import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FavModal from './FavModal';
import './Fav.css'

export default function FavMovList(props) {
    const [showFlag, setShowFlag] = useState(false);
    const [clickedMov, setClickedMov] = useState({});
    

    const handleShow = (item) => {
        console.log(item);
        setClickedMov(item);
        setShowFlag(true);
    }

    const handleclose = () => {
        setShowFlag(false);
    }
    

    return (
        <Row xs={1} md={2} className="g-4">

                   
                        <div>
                            <Col className='col' style={{ width: '50%' }}>
                                <Card>
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movies.poster_path}`}/>
                                    <Card.Body>
                                        <Card.Title>{props.movies.title}</Card.Title>
                                        <Card.Text>{props.movies.comment}</Card.Text>
                                        <Button variant="primary" onClick={() => handleShow(props.movies)}>Edit Comment</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <FavModal showFlag={showFlag} handleclose={handleclose} Data={clickedMov} takeNewArr={props.takeNewArr} />
                        </div>
                   
        
        </Row>

    );

}
