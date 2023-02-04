import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';

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
                    console.log(data)
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
        <div id="users" className="mt-3">
            <h2 className="text-center">User's: {users.length}</h2>

            <table>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>role</th>
                    <th>Action</th>
                </tr>
                {
                    users.map(user => {
                        return <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td><button onClick={() => handleClick(user.id)}>delete</button></td>
                        </tr>
                    })
                }
            </table>
        </div>
    );
};

export default UserList;