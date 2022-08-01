// import { faBagShopping, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductModal = (props) => {
    const {id, title, photoUrl, rating, price, } = props.product;
    const [quantity, setQuantity] = useState(1);
    const handleClick = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div>
            <Modal
                {...props}
                size="lg"

                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="py-4">
                            <img src={photoUrl} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="py-5">
                            <Rating className='m-auto' name="read-only" value={rating} readOnly />
                            <br />
                            <Modal.Title id="contained-modal-title-vcenter">
                                {title}
                            </Modal.Title>
                            <h1 className="text-start text-danger m-0">${price} <del style={{fontWeight:'500', fontSize:'35px', marginLeft:'20px'}}>$170</del></h1>
                            <hr />
                            <h6>Categories: Parts, Car, Seat, Cover</h6>
                            <hr />
                            <div className="d-flex justify-content-around">
                                <div className="d-flex align-items-center">
                                    <button onClick={() => handleClick()} className="btn border-dark px-4 py-1">-</button>

                                    <h3 className='px-3'>{quantity}</h3>

                                    <button onClick={() => setQuantity(quantity + 1)} className="btn border-dark px-4 py-1">+</button>
                                </div>
                                <button as={Link} to={`/checkOut/${id}`} className="btn btn-danger btn-lg"><FontAwesomeIcon icon={faBagShopping} /> Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </Modal>
        </div>
    );
};

export default ProductModal;