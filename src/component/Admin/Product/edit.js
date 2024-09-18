import { Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const EditModal = ({ showEdit, handleCloseEdit, product, onUpdateProduct }) => {
    const [editProduct, setEditProduct] = useState({ id: '', title: '', description: '', category: '', price: '' });

    useEffect(() => {
        if (product) {
            setEditProduct(product);
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://fakestoreapi.com/products/${product.id}`, {
            method: "PUT",
            body: JSON.stringify(editProduct),
            headers: {
                'Content-Type': 'application/json'
            }           
        })
        .then(res => res.json())
        .then((data) => {
            onUpdateProduct(data);
            handleCloseEdit();
        });
    };

    return (
        <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
                <Modal.Title>Update Product</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">ID</label>
                                <input
                                    type="number"
                                    name="id"
                                    className="form-control"
                                    placeholder="Enter Id"
                                    id="id"
                                    value={editProduct.id || ''}
                                    onChange={handleChange} 
                                    disabled />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder="Enter Title"
                                    id="title"
                                    value={editProduct.title || ''}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    placeholder="Enter Description"
                                    id="description"
                                    value={editProduct.description || ''}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    className="form-control"
                                    placeholder="Enter Price"
                                    id="price"
                                    value={editProduct.price || ''}
                                    onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                    <button type="button" className="btn btn-secondary" onClick={handleCloseEdit}>Cancel</button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default EditModal;
