import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AddModal = ({ show, handleClose }) => {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        username: "",
        email: "",
        website: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST",
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(() => {
                handleClose();
            });
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="id" className="form-label">ID</label>
                                    <input type="text" name="id" className="form-control" value={formData.id} onChange={handleInputChange} placeholder="Enter ID" id="id" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" name="name" className="form-control" value={formData.name} onChange={handleInputChange} placeholder="Enter Name" id="name" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" name="username" className="form-control" value={formData.username} onChange={handleInputChange} placeholder="Enter Username" id="username" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleInputChange} placeholder="Enter Email" id="email" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="website" className="form-label">Website</label>
                            <input type="text" name="website" className="form-control" value={formData.website} onChange={handleInputChange} placeholder="Enter Website URL" id="website" />
                        </div>
                        <div className="d-flex justify-content-end">
                        <Button type="submit" variant="primary">Submit</Button>
                        <Button variant="secondary" onClick={handleClose} className="me-2">Cancel</Button> 
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddModal;
