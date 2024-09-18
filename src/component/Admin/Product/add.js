import { Button, Modal } from "react-bootstrap";
import React from "react";
import { useState } from "react";


const AddModal = (props) => {
    const { show, handleClose } = props;
    const placeholderImage = "path/to/your/image.jpg";
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        description: "",
        category: "",
        price: "",
        image: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(() => {
                handleClose();
            });
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="md-3">
                                    <label htmlFor="id" className="form-label">ID</label>
                                    <input
                                        type="number"
                                        name="id"
                                        className="form-control"
                                        value={formData.id}
                                        onChange={handleInputChange}
                                        placeholder="Enter Id"
                                        id="id" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        placeholder="Enter Title"
                                        id="title" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        className="form-control"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        placeholder="Enter Description"
                                        id="description" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-3">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <select
                                        className="form-control"
                                        onChange={handleInputChange}
                                        name="category"
                                        id="category">
                                        <option value="" disabled>Select Category</option>
                                        <option value="electronic">Electronic</option>
                                        <option value="jewelery">Jewelery</option>
                                        <option value="men's clothing">Men's clothing</option>
                                        <option value="women's clothing">Women's clothing</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input 
                                    type="number"
                                    step="0.01"
                                    name="price"
                                    className="form-control"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder="Enter Price"
                                    id="price"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <label htmlFor="Image" className="form-label">Image</label>
                                <div className="border p-1 rounded text-center">
                                    <img 
                                    src={placeholderImage} alt="" 
                                    className="img-fluid" 
                                    id="Image" />
                                    <div className="mb-2">
                                        <p className="text-muted">Upload or drag an image here</p>
                                        <input 
                                        type="file" 
                                        id="imageUpload" 
                                        className="form-control-file mt-2" 
                                        accept="image/*" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal.Footer>
                            <Button variant="primary" type="submit">Submit</Button>
                            <Button variant="secondary" onClick={(e) => handleClose(e)}>Cancel</Button>                        
                        </Modal.Footer>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    )
}
export default AddModal;