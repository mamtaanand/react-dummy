import React, { useEffect, useState } from "react";

const Single = (props) => {
    const [single, setSingle] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1').then(res => res.json()).then((data) => {
            setSingle(data);
        })
    }, [])

    return (
        <>
            <div className="container mt-4">
                <div className="row g-4">
                    {
                        single &&  (
                            <div className="card border m-1" style={{ width: 275 }}>
                                <>
                                    <div className="card-body text-center">
                                        <img src={single.image} alt={single.title} className="mx-auto d-block" style={{ width: 200, height: 200 }} />
                                        <h4 className="card-id">Id: {single.id}</h4>
                                        <h5 className="card-title">Title: {single.title}</h5>
                                        <p className="card-description">Description: {single.description}</p>
                                        <p className="card-category">Category: {single.category}</p>
                                        <div className="card-rating">
                                            <p className="card-rate">Rating: {single.rating?.rate}</p>
                                            <p className="card-count">Count: {single.rating?.count}</p>
                                        </div>
                                        <h6 className="card-price">Price: {single.price}</h6>
                                        <a href="#" className="btn btn-primary">Buy Now</a>
                                    </div>
                                </>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default Single;