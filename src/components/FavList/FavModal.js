import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default function FavModal(props) {
      const [showFlag, setShowFlag] = useState(false);

  const [comment, setComment] = useState('');
  const handleclose = () => {
    setShowFlag(false);
  }


  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  const handleSubmit = async (event) => {
  try {
    event.preventDefault();
    const dataToSend = {
      comment: comment
    }
    const servUrl = `https://movies-library-coral.vercel.app/updateMovies/${props.Data.id}`;
    const axiosRes = await axios.put(servUrl, dataToSend);
    props.takeNewArr(axiosRes.data);
  }
  catch (error) {
    console.log("Comment update failed");
    alert("Failed to update comment. Please try again later.");
  }
}

const handDelete = async (event) => {
  event.preventDefault();
  try {
    const servUrl = `https://movies-library-coral.vercel.app/getMovies/${props.Data.id}`;
    const axiosRes = await axios.delete(servUrl);
    props.takeNewArr(axiosRes.data);
  }
  catch (error) {
    console.log("Movie deletion failed");
    alert("Failed to delete movie. Please try again later.");
  }
}
  return (
    <div>
      <Modal className='modal' show={props.showFlag} onHide={props.handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.Data.title}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Edit</Form.Label>
            <Form.Control name="comment" type="text" defaultValue={props.Data.comment} onChange={handleCommentChange} />
          </Form.Group>
          <Button variant="success" type="submit" onClick={handleSubmit}>
            Save 
          </Button>
          
          <Button variant="danger" type="button" onClick={handDelete}>
        delete
          </Button>
        </Form>
      </Modal>
    </div>
  )
}