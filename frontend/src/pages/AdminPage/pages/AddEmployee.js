// src/pages/AddEmployee.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEmployee({ addEmployee }) {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [hometown, setHometown] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [degree, setDegree] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            id: Date.now(),
            name,
            gender,
            birthDate,
            hometown,
            specialization,
            degree,
            email,
            phone,
            address,
        };
        addEmployee(newEmployee);
        navigate('/employees');
    };

    return (
        <div className="add-employee">
            <h2>Thêm nhân viên</h2>
            <form onSubmit={handleSubmit}>
                <label>Họ tên:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                
                <label>Giới tính:</label>
                <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />

                <label>Ngày sinh:</label>
                <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />

                <label>Quê quán:</label>
                <input type="text" value={hometown} onChange={(e) => setHometown(e.target.value)} required />

                <label>Chuyên ngành:</label>
                <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} required />

                <label>Bằng cấp:</label>
                <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} required />

                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>SĐT:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />

                <label>Địa chỉ:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />

                <button type="submit">Thêm nhân viên</button>
            </form>
        </div>
    );
}

export default AddEmployee;
