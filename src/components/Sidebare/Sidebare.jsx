import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebare = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#A6CDC6] text-black transform  ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 w-64 z-50 lg:translate-x-0`}
      >
        <div className="p-6 text-lg font-bold mt-50">Dashboard</div>
        <ul className="menu p-4 space-y-2">
          <li>
            <Link to={'/'} href="#manage-users" className="hover:bg-blue-700">
              Home
            </Link>
          </li>
          <li>
            <Link to={'manageusrt'} className="hover:bg-blue-700">
              Manage Users
            </Link>
          </li>
          <li>
            <Link
              to={'manageCategore'}
              href="#manage-category"
              className="hover:bg-blue-700"
            >
              Manage Category
            </Link>
          </li>
          <li>
            <a href="#payment-management" className="hover:bg-blue-700">
              Payment Management
            </a>
          </li>
          <li>
            <a href="#sales-report" className="hover:bg-blue-700">
              Sales Report
            </a>
          </li>
          <li>
            <a href="#manage-banner" className="hover:bg-blue-700">
              Manage Banner Advertise
            </a>
          </li>
          <li>
            <a href="#manage-medicines" className="hover:bg-blue-700">
              Manage Medicines
            </a>
          </li>
          <li>
            <a href="#payment-history" className="hover:bg-blue-700">
              Payment History
            </a>
          </li>
          <li>
            <a href="#ask-advertisement" className="hover:bg-blue-700">
              Ask For Advertisement
            </a>
          </li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between bg-blue-900 text-white px-4 py-3 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none z-50"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebare;
