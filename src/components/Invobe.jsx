import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import logo from '../assets/logo.jpg';
import useAuth from './../hooks/useAuth';
import useCart from '../hooks/useCart';

const Invobe = () => {
  const { user } = useAuth();
  const [cart] = useCart();
  const invoiceRef = useRef(null);
  console.log(cart);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
    documentTitle: 'Invoice',
    onBeforeGetContent: () => {
      if (!invoiceRef.current) {
        alert('There is nothing to print!');
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 py-24">
      <div
        ref={invoiceRef} // Attach the ref here
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl"
      >
        {/* Website Logo */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <img src={logo} alt="Website Logo" className="w-24 h-auto" />
          <h2 className="text-xl font-bold text-gray-800">
            Medicine Selling Shop
          </h2>
        </div>

        {/* User Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">
            User Information
          </h3>
          <p className="text-gray-600">Name: {user?.displayName}</p>
          <p className="text-gray-600">Email: {user?.email}</p>
        </div>

        {/* Purchase Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Purchase Details
          </h3>
          <table className="w-full text-left text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2">Item</th>
                <th className="border border-gray-200 px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item._id}>
                  <td className="border border-gray-200 px-4 py-2">
                    {item.itemName}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    $ {item.price}
                  </td>
                </tr>
              ))}

              <tr>
                <td
                  colSpan="3"
                  className="border border-gray-200 py-2 text-right font-bold"
                >
                  Grand Total = $ {totalPrice}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-500 border-t pt-4">
          <p>Thank you for your purchase!</p>
          <p>If you have any questions, please contact support@example.com</p>
        </div>
        <div className="mt-6">
          <button
            onClick={handlePrint} // Trigger the print
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600"
          >
            Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invobe;
