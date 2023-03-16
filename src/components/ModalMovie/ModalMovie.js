
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';

function ModalMovie(props) {
    const [addFeedback, setComment] = useState('');
    

    function handleCommentChange(event) {
        setComment(event.target.value);
    }
    const dataToSend = {
        movieTitle: props.Movie.title,
        release_date: props.Movie.release_date,
        poster_path: props.Movie.poster_path,
        overview: props.Movie.overview,
        comment: addFeedback
    }
    const fetchRes = async () => {
        await fetch('https://movies-library-coral.vercel.app/getMovies', {

            method: 'POST',
            body: JSON.stringify(

                dataToSend
            )
        })
    }


    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}>
            <Modal show={props.showFlag} onHide={props.handleclose}>

                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.Movie.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Image height={'560px'} src={`https://image.tmdb.org/t/p/w500${props.Movie.poster_path}`} width='100%'></Image>
                        <textarea onChange={handleCommentChange} placeholder="Add a comment"></textarea>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleclose} >Close</Button>
                        <Button variant="primary" onClick={() => {
                            fetchRes();

                        }}>add favorite</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </div>

    )

}

export default ModalMovie;