import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { products } from '../../../../Data/Data';
import BestDeal from '../../../Home/Products/Product';


const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://tan-glorious-skunk.cyclic.app/products`)
            .then((data) => setProducts(data.data))
    }, [])

    return (
        <div id="best-deal shop" className="py-5">
            <div className="container">
                <div className='row'>
                    {
                        products.map(product => <BestDeal product={product} key={product.id}></BestDeal>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;