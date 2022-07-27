import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
// import CircularProgress from '@material-ui/core/CircularProgress';
import BestDeal from './BestDeal';


const CarBestDeal = () => {

   const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://car-services.herokuapp.com/products`)
        .then((data) => setProducts(data.data))
    }, [])

    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/shop');
    }

    return (
        <div id='best-deal' className='text-center my-5'>
            <div className="container">
                <h1>Our Products</h1>
                <div className="row">
                    {
                       products.length?products.slice(0,4).map(product => <BestDeal product={product} key={product.id}></BestDeal>) : <ThreeCircles color="red" outerCircleColor="green" />
                    }
                    <button onClick={handleClick} style={{width:'150px', margin:'auto'}} className="btn btn-secondary mt-5">All Product</button>
                </div> 
                
                
            </div>
        </div>
    );
};

export default CarBestDeal;