import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import "./Movie.css"
import { useState } from 'react'
import ModalMovie from '../ModalMovie/ModalMovie';

function Movie(props) {
  const [showFlag, setShowFlag] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  const handleShow = (item) => {

    setClickedMovie(item);
    setShowFlag(true);
  }

  const handleclose = () => {
    setShowFlag(false);
  }
  return (

    <div key={props.movielist.id} className='col'>
      <Row xs={1} md={2} className="g-4">
        <Col style={{ width: '50%' }} >
          <Card>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movielist.poster_path} `} />
            <Card.Body>
              <Card.Title>{props.movielist.title}</Card.Title>
              <Card.Text>
                {props.movielist.overview}
              </Card.Text>
              <Button variant="light" onClick={() => { handleShow(props.movielist) }}>add favorite</Button>

            </Card.Body>
          </Card>
        </Col>
      </Row>


      <ModalMovie showFlag={showFlag} handleclose={handleclose} Movie={clickedMovie} />

    </div>
  );
}

export default Movie;