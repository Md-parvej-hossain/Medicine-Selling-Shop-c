import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useRole from '../../hooks/useRole';
import { CgProfile } from 'react-icons/cg';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { IoHomeOutline } from 'react-icons/io5';
import { GrUserManager } from 'react-icons/gr';
import { TbCategory } from 'react-icons/tb';
import { MdOutlinePayment } from 'react-icons/md';
import { FcSalesPerformance } from 'react-icons/fc';
import { PiFlagBanner } from 'react-icons/pi';
import { FaCartPlus } from 'react-icons/fa';
import { MdRequestPage } from 'react-icons/md';
import { MdManageAccounts } from 'react-icons/md';
import { MdOutlineHistory } from 'react-icons/md';
import { RiAdvertisementLine } from 'react-icons/ri';
import { MdAddCard } from 'react-icons/md';
import useAuth from '../../hooks/useAuth';

const Sidebare = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, isLoading] = useRole();
  const { user, logout } = useAuth();
  const handalelogout = () => {
    logout();
  };
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
            <NavLink
              to={'/'}
              href="#manage-users"
              className="hover:bg-blue-700 flex items-center gap-2"
            >
              <IoHomeOutline /> Home
            </NavLink>
          </li>

          {role === 'customer' && (
            <div>
              <li>
                <NavLink
                  to={'become-seller'}
                  href="#manage-category"
                  className="hover:bg-blue-700 flex items-center gap-2"
                >
                  <MdRequestPage /> Become A Seller!
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'addtocart'}
                  href="#manage-category"
                  className="hover:bg-blue-700 flex items-center gap-2"
                >
                  <FaCartPlus /> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'paymenthistory'}
                  className="hover:bg-blue-700 flex items-center gap-2"
                >
                  <MdOutlineHistory /> Payment History
                </NavLink>
              </li>
            </div>
          )}

          {role === 'seller' && (
            <div>
              <li>
                <NavLink
                  to="manageMedicin"
                  href="#manage-medicines"
                  className="hover:bg-blue-700 flex items-center gap-2"
                >
                  <MdManageAccounts /> Manage Medicines
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'paymenthistory'}
                  className="hover:bg-blue-700 flex items-center gap-2"
                >
                  <MdOutlineHistory /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'advertisementSection'}
                  href="#ask-advertisement"
                  className="hover:bg-blue-700 flex items-center gap-2"
                >
                  <RiAdvertisementLine /> Ask For Advertisement
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="addmedicen"
                  href="#manage-medicines"
                  className="hover:bg-blue-700 flex items-center gap-2"
                >
                  <MdAddCard /> Add Medicines
                </NavLink>
              </li>
            </div>
          )}
          {role === 'admin' && (
            <div>
              <li>
                <NavLink
                  to={'manageusrt'}
                  className="hover:bg-blue-700 flex items-center gap-2"
                >
                  <GrUserManager /> Manage Users
                </NavLink>
              </li>
              <li>
                <Link
                  to={'manageCategore'}
                  href="#manage-category"
                  className="hover:bg-blue-700 flex items-center gap-2"
                >
                  <TbCategory /> Manage Category
                </Link>
              </li>
              <li>
                <NavLink to={"paymentManagement"}
                  href="#payment-management"
                  className="hover:bg-blue-700 flex items-center gap-2"
                >
                  <MdOutlinePayment /> Payment Management
                </NavLink>
              </li>
              <li>
                <a
                  href="#sales-report"
                  className="hover:bg-blue-700 flex items-center gap-2"
                >
                  <FcSalesPerformance /> Sales Report
                </a>
              </li>
              <li>
                <a
                  href="#manage-banner"
                  className="hover:bg-blue-700 flex items-center gap-2"
                >
                  <PiFlagBanner /> Manage Banner Advertise
                </a>
              </li>
            </div>
          )}
          <div className="">
            <li className="border-t-2 border-gray-500 ">
              <Link className="mt-20 hover:bg-blue-700">
                <a
                  href="#sales-report"
                  className="hover:bg-blue-700 flex items-center gap-2"
                >
                  <CgProfile /> Profile
                </a>
              </Link>
            </li>

            <li>
              <a
                onClick={handalelogout}
                href="#sales-report"
                className="hover:bg-blue-700 "
              >
                <RiLogoutCircleLine /> Logout
              </a>
            </li>
          </div>
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
