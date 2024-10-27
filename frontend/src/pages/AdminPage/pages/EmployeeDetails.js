// src/pages/EmployeeDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function EmployeeDetails({ employees }) {
    const { id } = useParams();
    const employee = employees.find(emp => emp.id === parseInt(id));

    if (!employee) {
        return <p>Không tìm thấy nhân viên!</p>;
    }

    return (
        <div className="employee-details">
            <h2>Lý lịch nhân viên</h2>
            <ul>
                <li><strong>Họ tên:</strong> {employee.name}</li>
                <li><strong>Giới tính:</strong> {employee.gender}</li>
                <li><strong>Ngày sinh:</strong> {employee.birthDate}</li>
                <li><strong>Quê quán:</strong> {employee.hometown}</li>
                <li><strong>Chuyên ngành:</strong> {employee.specialization}</li>
                <li><strong>Bằng cấp:</strong> {employee.degree}</li>
                <li><strong>Email:</strong> {employee.email}</li>
                <li><strong>SĐT:</strong> {employee.phone}</li>
                <li><strong>Địa chỉ:</strong> {employee.address}</li>
            </ul>
        </div>
    );
}

export default EmployeeDetails;
