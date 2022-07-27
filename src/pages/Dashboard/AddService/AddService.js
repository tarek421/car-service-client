import React from 'react';
import './AddService.css';
import folderImage from '../../../image/folderImage.png';


const AddService = () => {
    return (
        <div id='addProduct'>
            <div className="container">
                <h6>General Information</h6>
                <div className="product-content">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="Title">Title:</label>
                            <input type="text" name="title" placeholder="Title" />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="Catagories">Catagories:</label>
                            <select name="Catagories" id="cars">
                                <option style={{ display: 'none' }} value="">Catagories</option>
                                <option value="parts">Parts</option>
                                <option value="wheel">wheel</option>
                                <option value="seat">Seat</option>
                                <option value="car">Car</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="OldPrice">Old Price</label>
                            <input type="number" name="oldPrice" placeholder="Old Price" />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="newPrice">New Price</label>
                            <input type="number" name="newPrice" placeholder="New Price" />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" rows="8"></textarea>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-12 col-md-6">
                            <div className="image-upload">
                                <label for="file-input">
                                    <img src={folderImage} alt='image_1'/>
                                    <h5>Upload photo</h5>
                                </label>

                                <input id="file-input" type="file" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="image-upload">
                                <label for="file-input">
                                    <img src={folderImage} alt="" />
                                    <h5>Upload cover photo</h5>
                                </label>

                                <input id="file-input" type="file" />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-12 col-md-6">
                            <div className="image-upload">
                                <label for="file-input">
                                    <img src={folderImage} alt='image_1'/>
                                    <h5>Upload photo</h5>
                                </label>

                                <input id="file-input" type="file" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <div className="image-upload">
                                <label for="file-input">
                                    <img src={folderImage} alt='image_1'/>
                                    <h5>Upload Icon</h5>
                                </label>

                                <input id="file-input" type="file" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddService;