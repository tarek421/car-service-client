import { Rating } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RelatedProduct = ({ catagory }) => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch(`https://car-services.herokuapp.com/products/catagories/${catagory}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [catagory])




    return (
        <div className='p-5 border h-100'>
            <h5>Related Product's</h5>
            {
                products.map(product => {
                    return <div key={product.id} className="d-flex align-items-center border-bottom mt-3">
                    <div className="image">
                        <img style={{width: '100px'}} src={product?.photoUrl} alt="" />
                    </div>
                    <div className="content mt-3">
                    <Rating style={{fontSize:'16px'}} className='m-auto' name="read-only" value='5' readOnly />
                    <h6><Link to={`/productDetails/${product.id}`} style={{ cursor: 'pointer' }} className='text-black my-3 cursor-pointer'>{product?.title}</Link></h6>
                        <h6>{product?.price}</h6>
                    </div>
                </div>
                })
            }

        </div>
    );
};

export default RelatedProduct;