// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/transactions">Transactions</Link></li>
                <li><Link to="/employees">Employees</Link></li>
                <li><Link to="/add-employee">Thêm Nhân Viên</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
