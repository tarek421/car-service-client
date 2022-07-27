import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div id='notfound' className="text-center py-3">
            <div className="container">
                <h1 style={{fontSize:'310px', color:'#ff0000d6', margin:'0'}}>404</h1>
                <h1>Page Not Found! Page Not Found!</h1>
                <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                <Link to="/" className="btn btn-outline-danger">Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;