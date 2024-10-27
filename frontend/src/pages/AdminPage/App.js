// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import Transactions from './pages/Transactions';
import Employees from './pages/Employees';
import AddEmployee from './pages/AddEmployee';
import EmployeeDetails from './pages/EmployeeDetails';
import './styles/App.css';

function App() {
    const [employees, setEmployees] = useState([]);

    // Hàm để thêm nhân viên mới vào danh sách
    const addEmployee = (employee) => {
        const newEmployee = { ...employee, id: employees.length + 1 };
        setEmployees([...employees, newEmployee]);
    };    

    return (
        <Router>
            <div className="app">
                <Sidebar />
                <div className="main-content">
                    <Navbar />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/users/:id" element={<UserDetails />} />
                            <Route path="/transactions" element={<Transactions />} />
                            <Route path="/employees" element={<Employees employees={employees} />} />
                            <Route path="/add-employee" element={<AddEmployee addEmployee={addEmployee} />} />
                            <Route path="/employees/:id" element={<EmployeeDetails employees={employees} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
