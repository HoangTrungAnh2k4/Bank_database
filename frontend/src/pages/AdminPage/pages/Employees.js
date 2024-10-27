// src/pages/Employees.js
import React from 'react';
import { Link } from 'react-router-dom';

function Employees({ employees }) {
    return (
        <div className="employees">
            <h2>Danh sách nhân viên</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Chuyên ngành</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td><Link to={`/employees/${employee.id}`}>{employee.name}</Link></td>
                            <td>{employee.email}</td>
                            <td>{employee.specialization}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/add-employee" className="add-employee-link">+ Thêm nhân viên mới</Link>
        </div>
    );
}

export default Employees;
