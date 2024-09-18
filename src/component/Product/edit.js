import { useEffect, useState } from "react";

const EditModal = ({ showEdit, handleClose, product, onUpdateProduct }) => {
    const placeholderImage = "path/to/your/image.jpg";
    const [formData, setFormData] = useState({});
    const [editedProduct, setEditedProduct] = useState(product || {title: '', description: '', category: '' });

    useEffect(() => {
        if (product) {
            setEditedProduct(product);
        }
    },[product])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://fakestoreapi.com/products/${product.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(editedProduct),
        })
        .then(res => res.json())
        .then(json => {  
            onUpdateProduct(json);         
            handleClose();
        })
    };
    
    if (!showEdit) return null;

    return(
         <>
         <div className="modal" style={{ display: 'block' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Product</h5>
                            <button type="button" className="btn-close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="id" className="form-label">Id</label>
                                    <input type="number" className="form-control" id="id" name="id" value={editedProduct.id} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" value={editedProduct.title} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name="description" value={editedProduct.description} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                <label htmlFor="productImage" className="form-label">Product Image</label>
                                <div className="border p-1 rounded text-center">
                                    <img src={placeholderImage} alt="" className="img-fluid" id="productImage" />
                                    <div className="mb-2">
                                        <p className="text-muted">Upload or drag an image here</p>
                                        <input type="file" id="imageUpload" className="form-control-file mt-2" accept="image/*" />
                                    </div>
                                </div>
                            </div>
                                <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <select className="form-select" name="category" aria-label="Default select example">
                                    <option selected>Select Category</option>
                                    <option value="2">jewelery</option>
                                    <option value="3">men's clothing</option>
                                    <option value="3">women's clothing</option>
                                </select>
                            </div>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditModal;
