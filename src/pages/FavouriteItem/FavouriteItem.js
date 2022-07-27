import React, { useEffect, useState } from 'react';

const FavouriteItem = () => {
    const [products, setProducts] = useState([]);
    // const products = JSON.parse(localStorage.getItem("products"))
    console.log(products)

    useEffect(() => {
        const product = JSON.parse(localStorage.getItem("products"))
        setProducts(product);
    }, [products])



    return (
        <div>
            <h3>Hello, this is favourite Item</h3>
            {
                products?.map(product => <h2>{product}</h2>)
            }
        </div>
    );
};

export default FavouriteItem;