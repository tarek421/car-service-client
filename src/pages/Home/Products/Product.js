import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './BestDeal.css';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductModal from './ProductModal';

const Product = ({ product }) => {
    const [modalShow, setModalShow] = useState(false);
    const { title, photoUrl, rating, price, id } = product;

    // const productFavourite = JSON.parse(localStorage.getItem("products"))

    const addToFavourites = (id) => {
        const productId = localStorage.getItem("products");
        let products = [];
        
        if(productId){
            products = JSON.parse(productId);
        }
             products.push(id);
            localStorage.setItem("products", JSON.stringify(products));
            
    }



    // const addToFavourites = (id) => {

    //     var names = [];
    //     names.push({
    //         id: id,
    //         email: 'tarek mahmud'
    //     });
    //     localStorage.setItem("names", JSON.stringify(names));
    //     console.log(names);

    // };






    return (
        <div className='col-sm-12 col-md-6 mt-3 col-lg-3 text-center'>
            <div className="card">
                <div className="card-image">
                    <img style={{ width: '100%' }} src={photoUrl} alt="" />
                    <div className="product-hover">
                        <ul className='d-flex align-items-center justify-content-center'>
                            <li onClick={() => setModalShow(true)}><a href="#d"><FontAwesomeIcon icon={faEye} /></a></li>
                            <li><a href="#d"><FontAwesomeIcon icon={faCartPlus} /></a></li>
                            <li onClick={() => addToFavourites(id)}><b><FontAwesomeIcon icon={faHeart} /></b></li>
                        </ul>
                    </div>
                </div>
                <div className="card-content">
                    <Rating className='m-auto' name="read-only" value={rating} readOnly />
                    <h6><Link to={`/productDetails/${id}`} style={{ cursor: 'pointer' }} className='text-black my-3 cursor-pointer'>{title}</Link></h6>
                    <h4 className='text-danger'>${price}</h4>
                </div>
            </div>
            <ProductModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                product={product}
            />
        </div>
    );
};

export default Product;