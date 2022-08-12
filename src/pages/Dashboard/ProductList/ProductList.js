import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const ProductList = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(()=>{
        fetch(`https://car-services.herokuapp.com/products/`)
        .then((res) => res.json())
        .then((data) => setAllProducts(data))
    },[allProducts.length])

        const handleDelete = () =>{
            alert("Product Deleted")
        }

    return (
        <div id='Product-list'>
            <div className="container">
                {/* <h2 className='text-center'>Products List</h2> */}
                {allProducts.length?<table className='mt-4'>
                    <tr className="text-center">
                        <th style={{ width: '30%' }}>Image</th>
                        <th style={{ width: '50%' }}>Details</th>
                        <th style={{ width: '20%' }}>Action</th>
                    </tr>
                    {
                        allProducts.map((product) => <tr key={product.id}> 
                            <td><img src={product.photoUrl} alt="" /></td>
                            <td>
                                <h2>Title: {product.title}</h2>
                                <p>Price: {product.price}</p>
                                <p>Catagory: {product.catagory}</p>
                                <p><Rating name="read-only" value={product.rating} readOnly /></p>
                            </td>
                            <td>
                                <button onClick={handleDelete} className="btn btn-primary">Delete</button>
                                <button className="btn btn-primary ms-3">Update</button>
                            </td>
                        </tr>)
                    }
                </table>:<ThreeDots width="100" />}
            </div>
        </div>
    );
};

export default ProductList;