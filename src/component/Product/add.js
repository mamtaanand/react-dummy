import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AddModal = (props) => {
    const { showAdd, handleClose } = props;
    const placeholderImage = "path/to/your/image.jpg";
    const [formData, setFormData] = useState({});

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
        fetch(`https://fakestoreapi.com/products`, {
            method: "POST",
            body: JSON.stringify(formData)
        })

            .then(res => res.json())
            .then((data)=> {
                console.log(data);
                handleClose()
            })
    };

    return (
        <>
            <Modal show={showAdd} onHide={handleClose} centered>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <label htmlFor="productId" className="form-label">Product Id</label>
                                <input 
                                type="number" 
                                name="id" 
                                className="form-control" 
                                id="productId"  
                                placeholder="Enter product Id"
                                onChange={handleInputChange} />
                            </div>   

                            <div className="mb-2">
                                <label htmlFor="productTitle" className="form-label">Product Title</label>
                                <input 
                                type="text"                                
                                name="title" 
                                className="form-control" 
                                id="productTitle"
                                placeholder="Enter product Title"
                                onChange={handleInputChange} />
                                 </div>

                            <div className="mb-2">
                                <label htmlFor="productDescription" className="form-label">Product Description</label>
                                <input 
                                type="text"                                 
                                name="description" 
                                className="form-control" 
                                id="productDescription"
                                placeholder="Enter product Description" 
                                onChange={handleInputChange} />
                            </div> 

                            <div className="mb-2">
                                <label htmlFor="productCategory" className="form-label">Product Category</label>
                                <select 
                                className="form-select" 
                                onChange={handleInputChange} 
                                name="category" 
                                id="productCategory">
                                 <option value="" disable selected>Select Category</option>
                                    <option value="electronic">Electronic</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="productImage" className="form-label">Product Image</label>
                                <div className="border p-1 rounded text-center">
                                    <img 
                                    src={placeholderImage} 
                                    alt="" 
                                    className="img-fluid" 
                                    id="productImage" />
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

                            <div className="d-grid"> 
                            <Button variant="primary" onClick={(e) => handleSubmit(e)} >Submit</Button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal>


        </>
    )
}

export default AddModal;