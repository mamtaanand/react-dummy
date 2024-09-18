import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddModal from "./add";
import EditModal from "./edit";
import DeleteModal from "./delete";

const AdminProduct = (props) => {
    const [adminproduct, setAdminProduct] = useState([]);
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [currentProduct, setCurrentProduct] =useState(null);
    const [showDelete , setShowDelete] = useState(false)
    const [productId, setProductId] = useState(null)

    const handleClose=() => setShow(false);
    const handleCloseEdit=() => setShowEdit(false);
    const handleCloseDelete=() => setShowDelete(false)

    const handleShowEdit = (product) =>{
        console.log(product);
        setCurrentProduct(product);
        setShowEdit(true);
    }

    const handleShowDelete = (id) =>{
        setProductId(id)
        setShowDelete(true)
    }

    const handleAddProduct = (newProduct) => {
        setAdminProduct((prevProducts) => 
            [newProduct, ...prevProducts]);
    };
    
    const handleUpdateProduct = (updateProduct) => {
        setAdminProduct((prevProduct) =>
            prevProduct.map((p) => (p.id === updateProduct.id ? updateProduct : p))
        );
    };

    const handleDeleteProduct = (deleteProductId) => {
        setAdminProduct((prevProducts) => 
            prevProducts.filter(product => product.id !== deleteProductId)
        );
    };


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((data) => {
                setAdminProduct(data);
            });
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between m-2">
                            <h4 className="text-center flex-grow-1" style={{ color: "blueviolet" }}>Product Details</h4>
                            <button className="btn btn-secondary" onClick={(e) => setShow(true)}>Add</button>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-primary table-bordered" style={{ textAlign: "center", borderColor: "#dcdcdc" }}>
                                <thead>
                                    <tr style={{ borderColor: '#dcdcdc' }}>
                                        <th style={{ width: '3%' }} scope="col">ID</th>
                                        <th style={{ width: '5%' }} scope="col">Title</th>
                                        <th style={{ width: '30%' }} scope="col">Description</th>
                                        <th style={{ width: '10%' }} scope="col">Category</th>
                                        <th style={{ width: '5%' }} scope="col">Price</th>
                                        <th style={{ width: '5%' }} scope="col">Image</th>
                                        <th style={{ width: '10%' }} scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        adminproduct && adminproduct.map((el) => (
                                            <tr key={el.id} style={{ borderColor: '#dcdcdc' }}>
                                                <td>{el.id}</td>
                                                <td>{el.title}</td>
                                                <td>{el.description}</td>
                                                <td>{el.category}</td>
                                                <td>{el.price}</td>
                                                <td>
                                                    <img src={el.image} alt={el.title} style={{ height: 50, width: 50 }} />
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => handleShowEdit(el)}>Edit</button>
                                                    <button className="btn btn-warning" onClick={(e) => handleShowDelete(el.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <AddModal show={show} handleClose={handleClose} onAddProduct={handleAddProduct}/>
            <EditModal showEdit={showEdit} handleCloseEdit={handleCloseEdit} product={currentProduct} onUpdateProduct={handleUpdateProduct}/>
            <DeleteModal showDelete={showDelete} handleCloseDelete={handleCloseDelete} productId={productId} onDeleteProduct={handleDeleteProduct} />
            </>
    );
}

export default AdminProduct;
