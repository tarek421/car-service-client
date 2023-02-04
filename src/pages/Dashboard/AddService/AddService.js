import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';
import folderImage from '../../../image/folderImage.png';
import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';


const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState([]);
    // const navigate = useNavigate();

    const { admin } = useAuth();

    const onSubmit = data => {
        const loading = toast.loading("Please wait...", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });


        const services = {
            title: data.title,
            catagory: data.catagory,
            price: Number(data.price),
            paragraph1: data.paragraph1,
            paragraph2: data.paragraph2,
            description: data.description,
            icon: imageUrl.icon,
            coverImage: imageUrl.coverImage,
            image1: imageUrl.image1,
            image2: imageUrl.image2
        }
        const url = `https://tan-glorious-skunk.cyclic.app/services`;
        if (admin) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(services)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.dismiss(loading);
                    toast.success("Successfully Added services", data, {
                        style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                        },
                    });
                    // navigate('/');
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Only Admin can Service added!',
            })
            toast.dismiss(loading);
        }
    };

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
                // setImageUrl(response.data.data.display_url);
                setImageUrl({ ...imageUrl, [event.target.name]: response.data.data.display_url });
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
                                <input {...register("title", { required: true })} type="text" name="title" placeholder="Title" />
                                {errors.title && <span>This field is required</span>}
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="Catagories">Catagories:</label>
                                <select {...register("catagory", { required: true })} name="catagory" id="cars">
                                    <option style={{ display: 'none' }} value="">catagory</option>
                                    <option value="parts">Parts</option>
                                    <option value="wheel">wheel</option>
                                    <option value="seat">Seat</option>
                                    <option value="car">Car</option>
                                </select>
                                {errors.catagory && <span>This field is required</span>}
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="Price">Price</label>
                                <input {...register("price", { required: true })} type="number" name="price" placeholder="Price" />
                                {errors.price && <span>This field is required</span>}
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="paragraph1">Paragraph-1</label>
                                <input {...register("paragraph1", { required: true })} name="paragraph1" placeholder="Paragraph1" />
                                {errors.paragraph1 && <span>This field is required</span>}
                            </div>
                        </div>

                        <div className="row mt-4">
                            <label htmlFor="description">Description</label>
                            <textarea {...register("description", { required: true })} name="description" rows="8"></textarea>
                            {errors.description && <span>This field is required</span>}
                        </div>

                        <div className="row mt-4">
                            <label htmlFor="paragraph2">Paragraph-2</label>
                            <textarea {...register("paragraph2", { required: true })} name="paragraph2" rows="8"></textarea>
                            {errors.paragraph2 && <span>This field is required</span>}
                        </div>

                        <div className="row mt-4">
                            <div className="col-sm-12 col-md-6">
                                <div className="image-upload">
                                    <label htmlFor="file-input">
                                        <img src={folderImage} alt='image_1' />
                                        <h5>Upload Cover photo</h5>
                                    </label>

                                    <input
                                        id="file-input"
                                        type="file"
                                        name="coverImage"
                                        onChange={handleImage}
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="image-upload">
                                    <label htmlFor="file-input">
                                        <img src={folderImage} alt='image_1' />
                                        <h5>Choose a icon</h5>
                                    </label>

                                    <input
                                        id="file-input"
                                        type="file"
                                        name="icon"
                                        onChange={handleImage}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="row mt-4">
                            <div className="col-sm-12 col-md-6">
                                <div className="image-upload">
                                    <label htmlFor="file-input">
                                        <img src={folderImage} alt='image_1' />
                                        <h5>Upload Image-1</h5>
                                    </label>

                                    <input
                                        name="image1"
                                        onChange={handleImage}
                                        id="file-input"
                                        type="file"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="image-upload">
                                    <label htmlFor="file-input">
                                        <img src={folderImage} alt='image_1' />
                                        <h5>Upload Image-2</h5>
                                    </label>

                                    <input
                                        id="file-input"
                                        type="file"
                                        name="image2"
                                        onChange={handleImage}
                                    />
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

export default AddService;