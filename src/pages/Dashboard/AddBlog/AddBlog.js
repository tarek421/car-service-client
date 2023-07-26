import folderImage from '../../../image/folderImage.png';

import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const AddBlog = () => {


    let imageUrl = [];



    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const image = JSON.parse(localStorage.getItem("image"));

        const loading = toast.loading("Please wait...", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });
        const url = `https://tan-glorious-skunk.cyclic.app/blogs`;

        const blog = {
            title: data.title,
            catagory: data.catagories,
            coverImage: image[1],
            description: data.description,
            subtitle1: data.subtitle1,
            paragraph1: data.paragraph1,
            image1: image[2],
            image2: image[3],
            subtitle2: data.subtitle2,
            paragraph2: data.paragraph2,
            paragraph3: data.paragraph3,
            paragraph4: data.paragraph4,
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.dismiss(loading);
                localStorage.removeItem("image");
                toast.success("Successfully Added Product", data, {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
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
                localStorage.getItem("image");
                imageUrl.push(response.data.data.display_url);
                localStorage.setItem("image", JSON.stringify(imageUrl));
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
                <h6>Add Blog</h6>
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
                                    <option value="business">Business</option>
                                    <option value="consultant">Consultant</option>
                                    <option value="creative">Creative</option>
                                    <option value="UI/UX">UI/UX</option>
                                    <option value="technology">Technology</option>
                                </select>
                                {errors.catagories && <span>This field is required</span>}
                            </div>
                        </div>

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
                                        <h5>Upload cover photo</h5>
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

                        <div className="row mt-4">
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="subtitle1">Subtitle-1</label>
                                <input {...register("subtitle1", { required: true })} name="subtitle1" placeholder="Subtitle-1" />
                                {errors.subtitle1 && <span>This field is required</span>}
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="paragraph1">Paragraph-1</label>
                                <input max="5" {...register("paragraph1", { required: true })} name="paragraph1" placeholder="Paragraph-1" />
                                {errors.paragraph1 && <span>This field is required</span>}
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="subtitle2">Subtitle-2</label>
                                <input {...register("subtitle2", { required: true })} name="subtitle2" placeholder="Subtitle-2" />
                                {errors.subtitle2 && <span>This field is required</span>}
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="paragraph2">Paragraph-2</label>
                                <input max="5" {...register("paragraph2", { required: true })} name="paragraph2" placeholder="Paragraph-2" />
                                {errors.paragraph2 && <span>This field is required</span>}
                            </div>
                        </div>


                        <div className="row mt-4">
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="UploadPhoto">Upload Image-1</label>
                                <div className="image-upload">
                                    <label htmlFor="file-input">
                                        <img src={folderImage} alt='image_1' />
                                        <h5>Upload Image-1</h5>
                                    </label>

                                    <input
                                        name='imageUrl2'
                                        onChange={handleImage}
                                        id="file-input2"
                                        type="file"
                                        required />
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="UploadPhoto">Upload Image-2</label>
                                <div className="image-upload">
                                    <label htmlFor="file-input">
                                        <img src={folderImage} alt='image_2' />
                                        <h5>Upload Image-2</h5>
                                    </label>

                                    <input
                                        name='imageUrl3'
                                        onChange={handleImage}
                                        id="file-input3"
                                        type="file"
                                        required />
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="paragraph3">Paragraph-3</label>
                                <input max="5" {...register("paragraph3", { required: true })} name="paragraph3" placeholder="Paragraph-3" />
                                {errors.paragraph3 && <span>This field is required</span>}
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="paragraph4">Paragraph-4</label>
                                <input max="5" {...register("paragraph4", { required: true })} name="paragraph4" placeholder="Paragraph-4" />
                                {errors.paragraph4 && <span>This field is required</span>}
                            </div>
                        </div>


                        <input style={{ background: 'darkgray' }} className='mt-5 text-white bg-darkgray' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddBlog;