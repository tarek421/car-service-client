import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAuth from '../../../Hooks/useAuth';

const Reviews = ({ id }) => {
    const user = useAuth().user;
    const [rating, setRating] = useState(4.5);
    const [rivews, setRivews] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm();


    useEffect(() => {
        const url = `https://tan-glorious-skunk.cyclic.app/rivews/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setRivews(data))
    }, [id])


    const onSubmit = data => {

        const rivew = {
            name: data.name,
            email: data.email,
            id,
            rivew: data.rivew,
            image: user.photoURL || "https://i.ibb.co/5GzXkwq/user.png",
            rating: rating
        }

        fetch(`https://tan-glorious-skunk.cyclic.app/rivews/`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(rivew)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    toast.success("Successfully Added your Rivew", {
                        style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                        },
                    });
                }
            })

    };

    return (
        <div id="reviews" className="mt-5">
            <h3>Customer Reviews</h3>
            {
                rivews.map(rivew => {
                    return <div className="d-flex mt-5">
                        <div className="image">

                            {
                                rivew?.image ? <img src={rivew.image} alt="" /> : <img src="https://i.ibb.co/5GzXkwq/user.png" alt="" />
                            }
                        </div>
                        <div className="content">
                            <div className="d-flex justify-content-between">
                                <h5>{rivew.name}</h5>
                                <h5>{rivew.createdOn}</h5>
                            </div>
                            <h5><Rating value={rivew.rating} readOnly /></h5>
                            <p>{rivew.rivew}</p>
                        </div>
                    </div>
                })
            }
            <div className="add-review mt-5">
                <h3>Add a Review</h3>
                <h5>Your Ratings: <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                /></h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea {...register("rivew", { required: true })} name="rivew" rows="5" placeholder="Type your comment..."></textarea>
                    {errors.rivew && <span>This field is required</span>}

                    <input defaultValue={user.displayName} {...register("name", { required: true })} type="text" placeholder="Type Your Name..." readonly />

                    <input readonly defaultValue={user.email} {...register("email")} type="email" placeholder="Type Your Email..." />

                    <button className="btn btn-secondary" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Reviews;