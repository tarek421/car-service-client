import React, { useEffect, useState } from 'react';
import './UserList.css';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';


import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ThreeDots } from 'react-loader-spinner';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const { admin } = useAuth();
    useEffect(() => {
        const url = `https://tan-glorious-skunk.cyclic.app/users/`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    const handleClick = (id) => {
        const url = `https://tan-glorious-skunk.cyclic.app/users/${id}`;
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

    return (
        <Paper sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
            <TableContainer style={{ height: "100%", width: "100%" }} component={Paper}>
                {users.length ? <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Id</TableCell>
                            <TableCell align="left">name</TableCell>
                            <TableCell align="left">email</TableCell>
                            <TableCell align="left">role</TableCell>
                            <TableCell align="center">action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users
                            .map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell align="left">{row.id}</TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left">{row.email}</TableCell>
                                    <TableCell align="left">{row.role}</TableCell>
                                    <TableCell align="left"><button className="btn btn-primary" onClick={() => handleClick(row.id)}>delete</button></TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table> : <ThreeDots width="100" />}
            </TableContainer>
        </Paper>
    );
};

export default UserList;