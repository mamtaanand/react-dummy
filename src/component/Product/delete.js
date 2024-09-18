import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteModal = ({ showDelete, handleClose, productId }) => {

    const handleDelete = () => {
        fetch(`https://fakestoreapi.com/products/${productId}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then((json) => {            
            
            handleClose();
                   })
    }

    return (
        <>
            <Modal show={showDelete} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Delete the product details</p>
                </Modal.Body>
                <Modal.Footer>              
                <Button variant="danger" onClick={handleDelete} >Delete</Button>                    
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;



