import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [allProducts, setAllProducts] = useState([]);
    const { admin } = useAuth();

    useEffect(() => {
        fetch(`https://tan-glorious-skunk.cyclic.app/products/`)
            .then((res) => res.json())
            .then((data) => setAllProducts(data))
    }, [allProducts])

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://tan-glorious-skunk.cyclic.app/products/${id}`;

                if (admin) {
                    fetch(url, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                    })
                        .then(res => res.json())
                        .then(data => {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Only Admin can delete user!',
                    })
                }
            }
        })
    }

    return (
        <div id='Product-list'>
            <div className="container">
                {allProducts.length ? <table className='mt-4'>
                    <tr className="text-center">
                        <th style={{ width: '30%' }}>Image</th>
                        <th style={{ width: '50%' }}>Details</th>
                        <th style={{ width: '20%' }}>Action</th>
                    </tr>
                    {
                        allProducts.map((product) => <tr key={product.id}>
                            <td><img src={product.photoUrl} alt="" /></td>
                            <td>
                                <h2>Title: {product.title}</h2>
                                <p>Price: {product.price}</p>
                                <p>Catagory: {product.catagory}</p>
                                <p><Rating name="read-only" value={product.rating} readOnly /></p>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(product.id)} className="btn btn-primary">Delete</button>
                                <Link to={`/dashboard/update-product/${product.id}`} className="btn btn-primary ms-3">Update</Link>
                            </td>
                        </tr>)
                    }
                </table> : <ThreeDots width="100" />}
            </div>
        </div>
    );
};

export default ProductList;