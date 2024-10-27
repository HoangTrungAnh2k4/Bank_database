// src/pages/Users.js
import React from 'react';
import { Link } from 'react-router-dom';

function Users() {
    const users = [
        { id: 1, name: "John Doe", email: "john.doe@example.com", balance: "$1,500" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com", balance: "$2,300" },
        // Thêm người dùng khác nếu cần
    ];

    return (
        <div className="users">
            <h2>Danh sách người dùng</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Account Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td><Link to={`/users/${user.name}`}>{user.name}</Link></td>
                            <td>{user.email}</td>
                            <td>{user.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
