// src/pages/Transactions.js
import React from 'react';
import { Link } from 'react-router-dom';

function Transactions() {
    const transactions = [
        { id: 101, userId: 1, userName: "John Doe", amount: "$200", date: "2024-10-25" },
        { id: 102, userId: 2, userName: "Jane Smith", amount: "$350", date: "2024-10-24" },
        // Thêm giao dịch khác nếu cần
    ];

    return (
        <div className="transactions">
            <h2>Transactions</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td><Link to={`/users/${transaction.userId}`}>{transaction.userName}</Link></td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Transactions;
