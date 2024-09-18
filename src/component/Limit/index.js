import React, { useEffect, useState } from "react";

const Limit = (props) => {
    const [limit, setLimit] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5').then(res => res.json()).then((data) => {
            setLimit(data)
        })
    }, [])

    return (
        <>
            <div className="container mt-4">
                <div className="row g-3">
                    {
                        limit && limit.map((el, index) => (
                            <div className="card border m-1" style={{ width: 200 }} key={index}>
                                <>
                                    <div className="card-body text center">
                                        <img src={el.image} alt="" className="mx-auto d-block" style={{ width: 150, height: 150 }} />
                                        <h6 className="card-id" style={{fontSize: 12}}>Id: {el.id}</h6>
                                        <h6 className="card-title" style={{fontSize: 12}}>Title: {el.title} </h6>
                                        <p className="card-description" style={{fontSize: 12}}>Description: {el.description}</p>
                                        <p className="card-category" style={{fontSize: 12}}>Category: {el.category}</p>
                                        <p className="card-price" style={{fontSize: 12}}>Price: {el.price}</p>
                                        <div className="card-rating">
                                            <p className="card-rate" style={{fontSize: 12}}>Rating: {el.rating?.rate}</p>
                                            <p className="card-count" style={{fontSize: 12}}>Count: {el.rating?.count}</p>
                                        </div>
                                    </div>
                                </>
                            </div>

                        ))
                    }



                </div>

            </div>
        </>
    )
}

export default Limit;