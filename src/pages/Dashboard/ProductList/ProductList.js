import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import './ProductList.css';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
        // <div id='Product-list'>
        //     <div className="container">
        //         {allProducts.length ? <table className='mt-4'>
        //             <tr className="text-center">
        //                 <th style={{ width: '30%' }}>Image</th>
        //                 <th style={{ width: '50%' }}>Details</th>
        //                 <th style={{ width: '20%' }}>Action</th>
        //             </tr>
        //             {
        //                 allProducts.map((product) => <tr key={product.id}>
        //                     <td><img src={product.photoUrl} alt="" /></td>
        //                     <td>
        //                         <h2>Title: {product.title}</h2>
        //                         <p>Price: {product.price}</p>
        //                         <p>Catagory: {product.catagory}</p>
        //                         <p><Rating name="read-only" value={product.rating} readOnly /></p>
        //                     </td>
        //                     <td>
        // <button onClick={() => handleDelete(product.id)} className="btn btn-primary">Delete</button>
        // <Link to={`/dashboard/update-product/${product.id}`} className="btn btn-primary ms-3">Update</Link>
        //                     </td>
        //                 </tr>)
        //             }
        //         </table> : <ThreeDots width="100" />}
        //     </div>
        // </div>

        <Paper sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
            <TableContainer style={{ height: "100%", width: "100%" }} component={Paper}>
                {
                    allProducts.length ? <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">Detail</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allProducts
                                .map((product) => (
                                    <TableRow
                                        key={product.id}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell align="left"><img src={product.photoUrl} alt="" /></TableCell>
                                        <TableCell align="left">
                                            <div>
                                                <h2>Title: {product.title}</h2>
                                                <p>Price: {product.price}</p>
                                                <p>Catagory: {product.catagory}</p>
                                                <p><Rating name="read-only" value={product.rating} readOnly /></p>
                                            </div>
                                        </TableCell>
                                        <TableCell align="left">
                                            <div className='d-flex'>
                                                <button onClick={() => handleDelete(product.id)} className="btn btn-primary">Delete</button>
                                                <Link to={`/dashboard/update-product/${product.id}`} className="btn btn-primary ms-3">Update</Link>
                                            </div>
                                        </TableCell>

                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table> : <ThreeDots width="100" />
                }
            </TableContainer>
        </Paper>
    );
};

export default ProductList;