import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import RelatedProduct from '../right/RelatedProduct';
import Reviews from './Reviews';
import { userContext } from '../../../App';
import './ProductDetail.css';

const ProductDetail = ({ id }) => {
    const [products, setProducts] = useState();
    const [quantity, setQuantity] = useContext(userContext);
    const [productDetails, setProductDetails] = useState("description");

    useEffect(() => {
        fetch(`https://tan-glorious-skunk.cyclic.app/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data[0]))
    }, [id])

    const handleClick = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div id='product-detail' className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12 bg-gray">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="py-4">
                                    {products?.photoUrl ? <img className="bg-gray" src={products?.photoUrl} alt="images" /> : <Skeleton height={300} />}
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="py-5">
                                    <Rating className='m-auto' name="read-only" value='5' readOnly />
                                    <br />
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        {products?.title || <Skeleton />}
                                    </Modal.Title>
                                    <h1 className="text-start text-danger m-0">${products?.price || <Skeleton />} <del style={{ fontWeight: '500', fontSize: '35px', marginLeft: '20px' }}>${products?.price || <Skeleton />}</del></h1>
                                    <hr />
                                    <h6>Categories: {products?.catagory || <Skeleton />}</h6>
                                    <hr />
                                    <div className="d-flex justify-content-around">
                                        <div className="d-flex align-items-center">
                                            <button onClick={() => handleClick()} className="btn border-dark px-4 py-1">-</button>

                                            <h3 className='px-3'>{quantity}</h3>

                                            <button onClick={() => setQuantity(quantity + 1)} className="btn border-dark px-4 py-1">+</button>
                                        </div>
                                        <Link to={`/checkout/${id}`} className="btn btn-danger btn-lg"><FontAwesomeIcon icon={faBagShopping} /> Buy Now</Link>

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