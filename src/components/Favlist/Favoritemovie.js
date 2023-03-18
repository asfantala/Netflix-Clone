import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


import { useState } from 'react';
import React from 'react'
import FavModal from './favlistmodal/favlistmodal';


export default function FavMov(props) {
    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    const handleShow = (item) => {

        setClickedMovie(item);
        setShowFlag(true);
    }

    const handleclose = () => {
        setShowFlag(false);
    }
    const setNewArr = (Arr) => {
       props.setNewArr(Arr)
    }
   

    const handleDelete = async () => {
       
        const requestOptions = {
            method: 'DELETE',
           
        };
        
        const res = await fetch(`https://movies-library-coral.vercel.app/updateMovies/${props.res.id}`, requestOptions);
        const Data = await res.json();
       
        props.setDELETEDArr(Data)
    }

   

    return (
        <div>


            <Col >
                <Card  >

                    <Card.Body>
                        <Card.Img height={'250px'} variant="top" src={`${props.res.poster_path} `} />

                        <Card.Header  >{props.res.title}</Card.Header>
                        <Card.Text  >
                            {`${props.res.overview}`}
                        </Card.Text>
                        <Card.Text  >
                            {`${props.res.comment}`}
                        </Card.Text>
                        <Button variant="danger" style={{width:'50%'}} onClick={() => { handleDelete(props.res) }}>Delete</Button>
                        <Button variant="success" style={{width:'50%'}} onClick={() => { handleShow(props.res) }}>Update</Button>
                    </Card.Body>
                </Card>
            </Col>



  <FavModal showFlag={showFlag} setNewArr={setNewArr} handleclose={handleclose} MovieData={clickedMovie}/>
        </div>
    )
}