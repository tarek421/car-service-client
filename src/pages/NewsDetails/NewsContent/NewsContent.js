// import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewsContent = ({ id }) => {
    const [news, setNews] = useState([]);
    const [blogs, setBlogs] = useState([]);
    // const [catagories, setCatagories] = useState('buisness');
    // console.log(catagories);


    const { title, catagory, coverImage, createdTime, description, image1, image2, subtitle1, subtitle2, paragraph1, paragraph2, paragraph3, paragraph4 } = news;


    useEffect(() => {
        const url = `https://car-services.herokuapp.com/blogs/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setNews(data[0]))
    }, [id])




    useEffect(() => {
        fetch(`https://car-services.herokuapp.com/blogs/`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [catagory])



    // useEffect(() => {
    //     const url = `https://car-services.herokuapp.com/blogs/${catagory}`
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setCatagories(data))
    // },[catagory]);

    return (
        <div id="news-detail">
            <div className="speching">
                <div className="row">
                    <div className="col-sm-12 col-md-8">
                        <div className="news-content">
                            <p className="catagory-btn">{catagory}</p>
                            <h2 className="title">{title}</h2>
                            <div className="title-bottom d-flex">
                                <pre><FontAwesomeIcon icon={faCalendarAlt} /> {createdTime?.slice(0, 10)}</pre>
                            </div>
                            <p className="lead">{description}</p>
                            <img className="cover-image" src={coverImage} alt="Cover" />
                            <div>
                                <h3 className="title">{subtitle1}</h3>
                                <p>{paragraph1}</p>
                            </div>

                            <div className="mt-5">
                                <h3 className="title">{subtitle2}</h3>
                                <p>{paragraph2}</p>
                            </div>

                            <div className="dflex">
                                <img className="image" src={image1} alt="image1" />
                                <img className="image" src={image2} alt="image2" />
                            </div>

                            <div>
                                <p>{paragraph3}</p>
                                <p>{paragraph4}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <div className="right-side">

                                <div className="about-me">
                                    <div className='p-4 border h-100'>
                                        <h3>About Me</h3>
                                        <div className="mt-3 text-center">
                                            <img src="https://i.ibb.co/JpHc7Lr/4.jpg" alt="" />
                                            <h4>Rosalina D. Willaimson</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.</p>
                                            {/* <ul className="icon-list">
                                                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                                <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                                <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>

                            <div className='p-4 border h-100 mt-5'>
                                <h5 className="mb-3">Popular Feed's</h5>
                                {
                                    blogs.map(blog => {
                                        return <div className="d-flex align-item-center mt-2">
                                            <div className="images">
                                                <img className="profile" src={coverImage} alt="" />
                                            </div>
                                            <div>
                                                <Link to={`/blogDetail/${blog.id}`}>{blog.subtitle1}</Link>
                                                <pre><FontAwesomeIcon icon={faCalendarAlt} /> {createdTime?.slice(0, 10)}</pre>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>

                            <div className="catagory mt-5">
                                <div className="p-4 border h-auto">
                                    <h3>Categorie's</h3>
                                    <ul>
                                        <li>
                                            <Link to={`/newsDetail/id`}>Business <span>45</span></Link>
                                        </li>
                                        <li>
                                            <Link to={`/newsDetail/id`}>Consultant <span>45</span></Link>
                                        </li>
                                        <li>
                                            <Link to={`/newsDetail/id`}>Creative <span>45</span></Link>
                                        </li>
                                        <li>
                                            <Link to={`/newsDetail/id`}>UI/UX <span>45</span></Link>
                                        </li>
                                        <li>
                                            <Link to={`/newsDetail/id`}>Technology <span>45</span></Link>
                                      </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="banner mt-5">
                                <div className="border h-auto">
                                     <img src="https://i.ibb.co/mF6n4fG/banner-4.jpg" alt="" />
                                </div>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsContent;