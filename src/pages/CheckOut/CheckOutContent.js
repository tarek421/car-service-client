import React, { useContext, useEffect, useState } from 'react';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';


const CheckOutContent = ({ id }) => {

    const [data, setData] = useState([]);
    const [product, setProduct] = useState({});
    const { title, price } = product;
    const [quantity] = useContext(userContext)

    const user = useAuth();

    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const total = price * quantity;

    const vat = (total / 100) * 15;
    const delivaryFee = 20.00;
    const totalPrice = total + vat + delivaryFee;


    const handleClick = () => {
        const order = {
            title,
            totalPrice,
            name: data.name || user.user.displayName,
            email: data.email || user.user.email,
            address: data.addres,
            phone: data.phone,
            quantity: quantity,
            status: 'pending'
        }
        const url = `https://tan-glorious-skunk.cyclic.app/orders`;
        const loading = "Please Wait...";
        toast.loading(loading);
        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(result => {
                toast.dismiss();
                toast.success(result.message);
                navigate(`/productDetails/${id}`);
            })
    }


    useEffect(() => {
        const url = `https://tan-glorious-skunk.cyclic.app/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data[0]))
    }, [id])


    const stripePromise = loadStripe('pk_test_qblFNYngBkEdjEZ16jxxoWSM');
    const [paid, setPaid] = useState(null);
    const markAsPaid = (paymentInfo) => {
        setPaid(paymentInfo)
    }


    return (
        <div id="checkOut" className="my-5">
            <div className="container">
                <h2>Billing Details</h2>
                <div className="p-5 border">
                    <form >
                        <h6>Personal Information</h6>
                        <div className="row mt-3">
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="name">Name</label>
                                <input onChange={handleChange} defaultValue={user.user.displayName} placeholder="Enter your name" type="text" name="name" id="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="name">Email</label>
                                <input onChange={handleChange} defaultValue={user.user.email} placeholder="Enter your Email" type="text" name="email" id="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="name">Phone</label>
                                <input onChange={handleChange} placeholder="Enter your phone" type="text" name="phone" id="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="name">Address</label>
                                <input onChange={handleChange} placeholder="Enter your address" type="text" name="address" id="" />
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
                                    <p>{title}</p>
                                    <p>${price}.00</p>
                                </li>

                                <li className="d-flex justify-content-between">
                                    <p>Vat</p>
                                    <p>${vat}</p>
                                </li>

                                <li className="d-flex justify-content-between">
                                    <p>Delivary fee</p>
                                    <p>${delivaryFee}</p>
                                </li>

                                <li className="d-flex justify-content-between">
                                    <p>Total</p>
                                    <p>${totalPrice}</p>
                                </li>
                            </ul>
                            {
                                paid ?
                                    <button onClick={() => handleClick()} type="submit" className="btn btn-block btn-danger btn-secondary">Check Out Your Food</button>
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