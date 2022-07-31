import { faCalendarAlt, faUser } from '@fortawesome/free-regular-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewsFeeds = ({id}) => {
    const [news, setNews] = useState([]);
    useEffect(()=>{
        const url = `https://car-services.herokuapp.com/blogs`;
        fetch(url)
        .then(res => res.json())
        .then(data => setNews(data))
    },[])

    return (
        <div id='news-feed' className='py-5'>
            <div className="container">
                <h1>News Feeds.</h1>
                <div className="row">
                    {
                        news.map(item => {return <div key={item.id} className="col-sm-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src={item.coverImage} alt="" />
                            <div className="card-body">
                                <div className="d-flex">
                                    <span><FontAwesomeIcon style={{color:'red'}} icon={faUser} /> By: Admin</span>
                                    <span className='ms-4'><FontAwesomeIcon style={{color:'red'}} icon={faTags} />{item.catagory}</span>
                                </div>
                                <h5>{item.title}</h5>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <p><FontAwesomeIcon icon={faCalendarAlt} />  {item.createdTime.slice(0, 10)}</p>
                                    <Link to={`/newsDetail/${item.id}`}>READ MORE...</Link>
                                </div>
                            </div>
                        </div>
                    </div>})
                    }
               
                </div>
            </div>
        </div>
    );
};

export default NewsFeeds;