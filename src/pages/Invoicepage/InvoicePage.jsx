
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const InvoicePage = () => {
  const invoiceRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
    documentTitle: 'Invoice',
  });

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl"
        ref={invoiceRef}
      >
        {/* Website Logo */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-bold text-gray-800">
            Your Website Logo
          </div>
          <div className="text-sm text-gray-500">Invoice #12345</div>
        </div>

        {/* User Information */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Billing Information
          </h2>
          <p className="text-gray-600">John Doe</p>
          <p className="text-gray-600">123 Main Street, City, Country</p>
          <p className="text-gray-600">Email: john.doe@example.com</p>
        </div>

        {/* Purchase Information */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Purchase Details
          </h2>
          <table className="table w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border border-gray-300">Item</th>
                <th className="p-2 border border-gray-300">Quantity</th>
                <th className="p-2 border border-gray-300">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-300">Product 1</td>
                <td className="p-2 border border-gray-300">2</td>
                <td className="p-2 border border-gray-300">$20</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">Product 2</td>
                <td className="p-2 border border-gray-300">1</td>
                <td className="p-2 border border-gray-300">$50</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-gray-100 font-bold">
                <td
                  className="p-2 border border-gray-300 text-right"
                  colSpan="2"
                >
                  Total
                </td>
                <td className="p-2 border border-gray-300">$90</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          Thank you for your purchase!
        </div>
      </div>

      {/* Print Button */}
      <button onClick={handlePrint} className="btn btn-primary mt-4">
        Download Invoice
      </button>
    </div>
  );
};

export default InvoicePage;
