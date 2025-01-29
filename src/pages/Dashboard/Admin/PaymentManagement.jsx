import { useState } from 'react';

const PaymentManagement = () => {
  const [payments, setPayments] = useState([
    { id: 1, user: 'John Doe', amount: '$100', status: 'Pending' },
    { id: 2, user: 'Jane Smith', amount: '$150', status: 'Pending' },
    { id: 3, user: 'Michael Lee', amount: '$200', status: 'Paid' },
  ]);

  const handleAcceptPayment = id => {
    setPayments(
      payments.map(payment =>
        payment.id === id ? { ...payment, status: 'Paid' } : payment
      )
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Payment Management</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>User</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment.id}>
                <td>{payment.user}</td>
                <td>{payment.amount}</td>
                <td>
                  <span
                    className={`badge ${
                      payment.status === 'Paid'
                        ? 'badge-success'
                        : 'badge-warning'
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td>
                  {payment.status === 'Pending' && (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleAcceptPayment(payment.id)}
                    >
                      Accept Payment
                    </button>
                  )}
                  {payment.status === 'Paid' && (
                    <span className="text-gray-500">Completed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentManagement;
