import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import useAuth from '../../../Hooks/useAuth';


const Orders = () => {
    const [OrderData, setOrderData] = useState([]);
    const { token } = useAuth();
    const [orderStatus, setOrderStatus] = useState({});

    const color = (status) => {
        if (status === 'approved') {
            return 'green';
        } else if (status === 'rejected') {
            return 'red'
        } else {
            return '#6c757d'
        }
    }

    useEffect(() => {
        const url = `https://tan-glorious-skunk.cyclic.app/orders`;
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrderData(data);
            })
    }, [token])

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChange = (e, id) => {
        const state = {
            id: id,
            value: e.target.value
        }
        setOrderStatus(state)
    }

    useEffect(() => {
        const url = `https://tan-glorious-skunk.cyclic.app/orders/status/`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(orderStatus)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }, [token, orderStatus])

    return (
        <Paper sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
            <TableContainer style={{ height: 600, width: "100%" }} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">email</TableCell>
                            <TableCell align="left">phone</TableCell>
                            <TableCell align="left">Total Price</TableCell>
                            <TableCell align="center">action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {OrderData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.title}</TableCell>
                                    <TableCell align="left">{row.email}</TableCell>
                                    <TableCell align="left">{row.phone}</TableCell>
                                    <TableCell align="left">{row.price}</TableCell>
                                    <TableCell align="center">

                                        <select style={{
                                            backgroundColor: `${color(row.status)}`, padding: "5px 12px",
                                            borderRadius: "6px",
                                            color: "white"
                                        }} onChange={(e) => handleChange(e, row._id)} name="option" id="option">
                                            <option value="" selected disabled hidden>{row.status}</option>
                                            <option value="approved">Approve</option>
                                            <option value="rejected">Reject</option>
                                        </select>

                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 50]}
                component="div"
                count={OrderData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default Orders;