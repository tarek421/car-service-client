import folderImage from '../../../image/folderImage.png';
import './UpdateProduct.css';
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';


const UpdateProduct = () => {
    let { id } = useParams();
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();
    const { admin, token } = useAuth();


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const loading = toast.loading("Please wait...", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });
        const url = `https://tan-glorious-skunk.cyclic.app/products/${id}`;

        const product = {
            title: data.title,
            catagory: data.catagories,
            price: Number(data.price),
            description: data.description,
            photoUrl: imageUrl,
        }

        if (admin) {
            fetch(url, {
                method: 'PATCH',
                body: JSON.stringify(product),
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(data => {
                    toast.dismiss(loading);
                    toast.success("Successfully Updaed Product", data, {
                        style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                        },
                    });
                    navigate('/dashboard/productList');
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Only Admin can Product Updated!',
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
        <div id='updateProduct'>
            <div className="container">
                <h6>Update Product</h6>
                <div className="product-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-12">
                                <label htmlFor="Title">Title:</label>
                                <input {...register("title", { required: true })} type="text" placeholder="Title" />
                                {errors.title && <span>This field is required</span>}
                            </div>
                            <div className="col-12">
                                <label htmlFor="Catagories">Catagories:</label>
                                <select {...register("catagories")}>
                                    <option value="parts">Parts</option>
                                    <option value="wheel">wheel</option>
                                    <option value="seat">Seat</option>
                                    <option value="car">Car</option>
                                </select>
                                {errors.catagories && <span>This field is required</span>}
                            </div>
                            <div className="col-12">
                                <label htmlFor="OldPrice">Price</label>
                                <input {...register("price", { required: true })} type="number" name="price" placeholder="Price" />
                                {errors.price && <span>This field is required</span>}
                            </div>

                            <div className="col-12">
                                <label htmlFor="description">Description</label>
                                <textarea {...register("description", { required: true })} name="description" rows="4"></textarea>
                                {errors.description && <span>This field is required</span>}
                            </div>

                            <div className="col-12">
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

                        <input style={{ background: 'darkgray' }} className='mt-2 text-white bg-darkgray' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;