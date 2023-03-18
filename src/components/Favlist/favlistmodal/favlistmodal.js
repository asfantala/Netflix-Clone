import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


export default function FavModal(props) {


    const [addFeedback, setAddCom] = useState('');
    function handleFeedback(event) {
        setAddCom(event.target.value);
    }

    const handleSave = async () => {
        const dataToSend = {
            movieTitle: props.MovieData.title,
            release_date: props.MovieData.release_date,
            poster_path: props.MovieData.poster_path,
            overview: props.MovieData.overview,
            comment: addFeedback
        }
        const requestOptions = {
            method: 'PUT',
            body: JSON.stringify(dataToSend)
        };
        
        const res = await fetch(`https://movies-library-coral.vercel.app/updateMovies/${props.MovieData.id}`, requestOptions);
        const Data = await res.json();
       
        props.setNewArr(Data)
    }

    

    

    return (

        <Modal  show={props.showFlag} onHide={props.handleclose}>
            <Modal.Header  closeButton>
                <Modal.Title >{props.MovieData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div >
                    <Image src={`${props.MovieData.poster_path}`} ></Image>
                    <Modal.Title >
                        {props.MovieData.overview}
                    </Modal.Title>
                </div>
                <div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control defaultValue={props.MovieData.comment} as="textarea" onChange={handleFeedback} rows={3} />
                    </Form.Group>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleclose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    handleSave();
                    props.handleclose();


                }}>
                    Update Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}  