import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import RelatedProduct from '../right/RelatedProduct';
import Reviews from './Reviews';

const ProductDetail = ({ id }) => {
    const [products, setProducts] = useState();
    const [quantity, setQuantity] = useState(1);
    const [productDetails, setProductDetails] = useState("description");
    useEffect(() => {
        fetch(`https://car-services.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data[0]))
    }, [id])


    const handleClick = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    // const handleFavourite = (id) => {
    //     favouriteItem.push(id)
    //     localStorage.setItem("item" , JSON.stringify(favouriteItem));
    // }




    return (
        <div id='product-detail' className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12 bg-gray">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="py-4">
                                    <img className="bg-gray" src={products?.photoUrl} alt="images" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="py-5">
                                    <Rating className='m-auto' name="read-only" value='5' readOnly />
                                    <br />
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        {products?.title}
                                    </Modal.Title>
                                    <h1 className="text-start text-danger m-0">{products?.price} <del style={{ fontWeight: '500', fontSize: '35px', marginLeft: '20px' }}>{products?.price}</del></h1>
                                    <hr />
                                    <h6>Categories: {products?.catagory}</h6>
                                    <hr />
                                    <div className="d-flex justify-content-around">
                                        <div className="d-flex align-items-center">
                                            <button onClick={() => handleClick()} className="btn border-dark px-4 py-1">-</button>

                                            <h3 className='px-3'>{quantity}</h3>

                                            <button onClick={() => setQuantity(quantity + 1)} className="btn border-dark px-4 py-1">+</button>
                                        </div>
                                        <button className="btn btn-danger btn-lg"><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>



                                    </div>
                                    <div className="d-flex mt-3">
                                        <p><FontAwesomeIcon icon={faHeart} /> Add favorite</p>
                                        <p className='ms-5'><FontAwesomeIcon icon={faHeart} /> Compare</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <RelatedProduct catagory={products?.catagory} />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <ul className='d-flex border-bottom pb-4'>
                            <li
                                style={{ cursor: 'pointer' }}
                                className={productDetails === 'description' ? "active" : ""}
                                onClick={() => setProductDetails("description")}
                            >
                                Description
                            </li>
                            <li
                                style={{ cursor: 'pointer', marginLeft: '30px' }}
                                className={productDetails === 'review' ? "active" : ""}
                                onClick={() => setProductDetails("review")}
                            >
                                Reviews
                            </li>
                        </ul>
                        {
                            productDetails === 'description' && <p>{products?.description}</p>
                        }   
                        {
                            productDetails === 'review' && <Reviews id={id} />
                        } 
                    </div>
                    <div className="col-sm-12 col-md-4"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;