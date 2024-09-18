import React, { useEffect, useState } from "react";

const Sort = (props) => {
    const [sort, setSort] = useState([]);

    useEffect(() => {
    fetch('https://fakestoreapi.com/products?sort=desc').then(res => res.json()).then((data) => {
            setSort(data);
        })
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5>Product</h5>
                        <div className="d-flex justify-content-between m-2">
                            <div className="table-responsive">
                                <table className="table table-secondary">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            sort && sort.map(( el, index ) => (
                                                <tr key={index}>
                                                    <>
                                                        <td>{el.id}</td>
                                                        <td>{el.title}</td>
                                                        <td>{el.description}</td>
                                                        <td>{el.category}</td>
                                                        <td>{el.price}</td>
                                                    </>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Sort;