import folderImage from '../../../image/folderImage.png';

import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';

const AddProduct = () => {

    const [imageUrl, setImageUrl] = useState("");

    const navigate = useNavigate();

    const { admin } = useAuth();




    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const loading = toast.loading("Please wait...", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });
        const url = `https://tan-glorious-skunk.cyclic.app/products`;

        const product = {
            title: data.title,
            catagory: data.catagories,
            price: Number(data.price),
            rating: Number(data.rating),
            description: data.description,
            photoUrl: imageUrl,
        }

        if (admin) {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(product),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then(res => res.json())
                .then(data => {
                    toast.dismiss(loading);
                    toast.success("Successfully Added Product", data, {
                        style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                        },
                    });
                    navigate('/');
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Only Admin can Product added!',
            })
            toast.dismiss(loading);
        }
    }

    const handleImage = (event) => {
        const loading = toast.loading("Please wait...", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });
        const image = event.target.files[0];
        const imageData = new FormData();
        imageData.set("key", "3076d9416252823c2788e18914d271ae");
        imageData.append("image", image);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
                toast.dismiss(loading);
                toast.success("Successfully Image Upload", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };




    return (
        <div id='addProduct'>
            <div className="container">
                <h6>General Information</h6>
                <div className="product-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="Title">Title:</label>
                                <input {...register("title", { required: true })} type="text" placeholder="Title" />
                                {errors.title && <span>This field is required</span>}
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="Catagories">Catagories:</label>
                                <select {...register("catagories")}>
                                    <option value="parts">Parts</option>
                                    <option value="wheel">wheel</option>
                                    <option value="seat">Seat</option>
                                    <option value="car">Car</option>
                                </select>
                                {errors.catagories && <span>This field is required</span>}
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="OldPrice">Price</label>
                                <input {...register("price", { required: true })} type="number" name="price" placeholder="Price" />
                                {errors.price && <span>This field is required</span>}
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="newPrice">Rating</label>
                                <input max="5" {...register("rating", { required: true })} type="number" name="rating" placeholder="Rating" />
                                {errors.rating && <span>This field is required</span>}
                            </div>
                        </div>

                        {/* <div className="row mt-4">
                            <label htmlFor="description">Description</label>
                            <textarea {...register("description", { required: true })} name="description" rows="8"></textarea>
                            {errors.description && <span>This field is required</span>}
                        </div> */}

                        <div className="row mt-4">
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="description">Description</label>
                                <textarea {...register("description", { required: true })} name="description" rows="8"></textarea>
                                {errors.description && <span>This field is required</span>}
                            </div>
                            <div className="col-sm-12 col-md-6">

                                <label htmlFor="UploadPhoto">Upload Photo</label>
                                <div className="image-upload">
                                    <label htmlFor="file-input">
                                        <img src={folderImage} alt='image_1' />
                                        <h5>Upload photo</h5>
                                    </label>

                                    <input
                                        name='imageUrl'
                                        onChange={handleImage}
                                        id="file-input"
                                        type="file"
                                        required />
                                </div>
                            </div>
                        </div>
                        <input style={{ background: 'darkgray' }} className='mt-5 text-white bg-darkgray' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;