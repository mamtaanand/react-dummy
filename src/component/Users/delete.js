import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const DeleteModal = ({ showDelete, handleClose, userId }) => {

    const handleDelete = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(json => {
            console.log("User deleted:", json);
            handleClose();
        })
    };

    return (
        <>
            <Modal show={showDelete} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Delete user details.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;
