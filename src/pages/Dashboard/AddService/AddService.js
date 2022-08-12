import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';
import folderImage from '../../../image/folderImage.png';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState([]);
    const navigate = useNavigate();

    const onSubmit = data => {
        const loading = toast.loading("Please wait...", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });
        const url = `https://car-services.herokuapp.com/services`;

        const services = {
            title: data.title,
            catagory: data.catagories,
            price: Number(data.price),
            rating: Number(data.rating),
            description: data.description,
            photoUrl: imageUrl,
            
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(services),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.dismiss(loading);
                toast.success("Successfully Added services", data, {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
                navigate('/');
            })
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
                setImageUrl({...imageUrl, [event.target.name] : response.data.data.display_url});
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
                                <select {...register("catagories", { required: true })} name="catagories" id="cars">
                                    <option style={{ display: 'none' }} value="">Catagories</option>
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
                                <label htmlFor="Price">Old Price</label>
                                <input {...register("price", { required: true })} type="number" name="price" placeholder="Price" />
                                {errors.price && <span>This field is required</span>}
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="paragraph">Paragraph</label>
                                <input {...register("paragraph", { required: true })} type="number" name="paragraph" placeholder="Paragraph" />
                                {errors.paragraph && <span>This field is required</span>}
                            </div>
                        </div>

                        <div className="row mt-4">
                            <label htmlFor="description">Description</label>
                            <textarea {...register("description", { required: true })} name="description" rows="8"></textarea>
                            {errors.description && <span>This field is required</span>}
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
                                    name="image-1"
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
                                    name="image-2"
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