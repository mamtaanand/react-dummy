import React, { useEffect, useState } from "react";

const Category = (props) => {
    const [category, setcategory] = useState('')
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories').then(res => res.json()).then(data =>{
            setcategory(data);
        })
    }, [])
    
    return(
        <>
         <div style={{ display: "flex", height: "100vh" }}>
                <nav className="navbar bg-light" style={{ width: "180px", flexDirection: "column", padding: "1rem"}}>
                    <ul className="navbar-nav" style={{ width: "100%"}}>
                        {
                            category && category.map((el, index) => (
                                <li className="nav-item" key={index}>
                                    <a className="nav-link text-dark" href="#" style={{ padding: "0.75rem 1rem" }}>{el}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div style={{ flex: 1, padding: "2rem" }}>
                </div>
            </div>
        </>
    )
}

export default Category;