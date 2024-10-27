// src/pages/UserDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
    const { id } = useParams();

    // Thông tin người dùng mẫu. Trong thực tế, bạn nên lấy thông tin này từ API hoặc cơ sở dữ liệu
    const userInfo = {
        id,
        name: "John Doe",
        gender: "Nam",
        birthDate: "1995-08-15",
        hometown: "Hà Nội",
        major: "Công nghệ thông tin",
        degree: "Cử nhân",
        email: "john.doe@example.com",
        phone: "0123456789",
        address: "123 Đường ABC, Hà Nội",
    };

    return (
        <div className="user-details">
            <h2>Chi tiết thông tin cá nhân</h2>
            <ul>
                <li><strong>Họ tên:</strong> {userInfo.name}</li>
                <li><strong>Giới tính:</strong> {userInfo.gender}</li>
                <li><strong>Ngày sinh:</strong> {userInfo.birthDate}</li>
                <li><strong>Quê quán:</strong> {userInfo.hometown}</li>
                <li><strong>Chuyên ngành:</strong> {userInfo.major}</li>
                <li><strong>Bằng cấp:</strong> {userInfo.degree}</li>
                <li><strong>Email:</strong> {userInfo.email}</li>
                <li><strong>SĐT:</strong> {userInfo.phone}</li>
                <li><strong>Địa chỉ:</strong> {userInfo.address}</li>
            </ul>
        </div>
    );
}

export default UserDetails;
