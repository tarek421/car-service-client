import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const url = `https://car-services.herokuapp.com/users/`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    const handleClick = (id) => {
        const url = `https://car-services.herokuapp.com/users/${id}`;
        fetch(url, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
        .then(res=> res.json())
        .then(data => {

        })
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
                    users.map(user => {return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td><button onClick={() => handleClick(user.id)}>delete</button></td>
                    </tr>})
                }
            </table>
        </div>
    );
};

export default UserList;