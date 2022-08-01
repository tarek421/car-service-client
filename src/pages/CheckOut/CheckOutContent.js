import React, { useState } from 'react';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';


const CheckOutContent = () => {

    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    const [paid, setPaid] = useState(null);
    console.log(paid);
    const markAsPaid = (paymentInfo) => {
        setPaid(paymentInfo)
    }

    const handleOrder = () => {
        console.log('Order compleated')
    }

    return (
        <div id="checkOut" className="my-5">
            <div className="container">
                <h2>Billing Details</h2>
                <div className="p-5 border">
                    <form>
                        <h6>Personal Information</h6>
                        <div className="row mt-3">
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="name">Name</label>
                                <input placeholder="Enter your name" type="text" name="" id="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="name">Email</label>
                                <input placeholder="Enter your Email" type="text" name="" id="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="name">Phone</label>
                                <input placeholder="Enter your phone" type="text" name="" id="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="name">Address</label>
                                <input placeholder="Enter your address" type="text" name="" id="" />
                            </div>
                        </div>

                    </form>
                </div>

                <div className="payment p-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">



                            <div className="p-5">
                                <Elements stripe={stripePromise}>
                                    <Payment markAsPaid={markAsPaid} />
                                </Elements>
                            </div>



                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h3>Total cost</h3>
                            <ul>
                                <li className="d-flex justify-content-between">
                                    <p>Cart Totals Brake Conversion Kit × 2</p>
                                    <p>$298.00</p>
                                </li>

                                <li className="d-flex justify-content-between">
                                    <p>OE Replica Wheels × 2</p>
                                    <p>$170.00</p>
                                </li>

                                <li className="d-flex justify-content-between">
                                    <p>Wheel Bearing Retainer × 2</p>
                                    <p>$150.00</p>
                                </li>

                                <li className="d-flex justify-content-between">
                                    <p>Total</p>
                                    <p>$150.00</p>
                                </li>
                            </ul>
                            {
                                paid ?
                                    <Link to="/order-complete">
                                        <button onClick={() => handleOrder()} className="btn btn-block btn-danger btn-secondary">Check Out Your Food</button>
                                    </Link>
                                    :
                                    <button disabled className="btn btn-block btn-secondary">Check Out Your Food</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutContent;