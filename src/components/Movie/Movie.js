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
  const style = { width: '18rem'};

  return (
    <Row xs={1} md={3} className="g-4">

    <Col >

    <div key={props.movielist.id} className='col'>
          <Card style={{ ...style}}>
            <Card.Img variant="top" src={props.movielist.poster_path ? `https://image.tmdb.org/t/p/w500${props.movielist.poster_path}` : "https://via.placeholder.com/500x750"} />
            <Card.Body>
              <Card.Title>{props.movielist.title}</Card.Title>
              <Card.Text>
                {props.movielist.overview}
              </Card.Text>
              <Button variant="light" onClick={() => { handleShow(props.movielist) }}>add favorite</Button>

            </Card.Body>
          </Card>


      <ModalMovie showFlag={showFlag} handleclose={handleclose} Movie={clickedMovie} />

    </div>
    </Col>
</Row>
  );
}

export default Movie;