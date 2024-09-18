import { Modal } from "react-bootstrap";
import React from "react";
import { Button } from "react-bootstrap";

const DeleteModal = ({ showDelete, handleCloseDelete, productId, onDeleteProduct }) =>{

    const handleDelete = () => {
        fetch(`https://fakestoreapi.com/products/${productId}`, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then(json => {
            console.log("Product deleted:", json);
            onDeleteProduct(productId)
            handleCloseDelete()
        })
    }
    return(
        <>
        <Modal show={showDelete} onHide={handleCloseDelete}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete the product details</p>
            </Modal.Body>
            <Modal.Footer>
            <button type="submit" className="btn btn-danger" onClick={handleDelete}>Delete</button>
            <button type="button" className="btn btn-secondary" onClick={handleCloseDelete}>Cancel</button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
export default DeleteModal;