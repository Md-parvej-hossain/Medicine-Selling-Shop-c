import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import CategoreTab from '../pages/Home/CatagoreSection/CategoreTab';
import AddtoCart from '../pages/Dashboard/Customer/AddtoCart';
import DahboardLayout from '../layouts/DahboardLayout';
import Shop from '../pages/Shop/Shop';
import ManageUser from '../pages/Dashboard/Admin/ManageUser';
import ManageCategore from '../pages/Dashboard/Admin/ManageCategore';
import ManageMedices from '../pages/Dashboard/Seller/ManageMedices';
import AddMedsin from '../pages/Dashboard/Seller/AddMedsin';
import Update from '../pages/Dashboard/Admin/Update';
import Payment from '../pages/Dashboard/Customer/Payment';
import Contact from '../components/Contact';
import About from '../components/About';
import BecameaSeller from '../pages/Dashboard/Seller/BecameaSeller';
import Profile from '../components/Profile';
import PrivateRoute from './PrivateRoute';
import SellerRoute from './SellerRoute';
import AdmineRoute from './AdmineRoute';
import Invobe from '../components/Invobe';
import PaymentHistory from '../components/PaymentHistory';
import AdvertisementSection from '../components/AdvertisementSection';
import PaymentManagement from '../pages/Dashboard/Admin/PaymentManagement';

// import InvoicePage from '../pages/Invoicepage/InvoicePage';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category/:category',
        element: <CategoreTab />,
      },

      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/invobepage',
        element: <Invobe />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },

  {
    path: '/dashbors',
    element: <DahboardLayout />,
    children: [
      {
        path: 'manageusrt',
        element: (
          <PrivateRoute>
            <AdmineRoute>
              <ManageUser />
            </AdmineRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashbors/addtocart',
        element: (
          <PrivateRoute>
            <AddtoCart />
          </PrivateRoute>
        ),
      },

      {
        path: 'manageCategore',
        element: (
          <PrivateRoute>
            <AdmineRoute>
              <ManageCategore />
            </AdmineRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'manageMedicin',
        element: (
          <PrivateRoute>
            <SellerRoute>
              <ManageMedices />
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'payment',
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: 'become-seller',
        element: (
          <PrivateRoute>
            <BecameaSeller />
          </PrivateRoute>
        ),
      },
      {
        path: 'update/:id',
        element: <Update />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/medicen/${params.id}`),
      },
      {
        path: 'addmedicen',
        element: (
          <PrivateRoute>
            <SellerRoute>
              <AddMedsin />
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'paymenthistory',
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
      {
        path: 'advertisementSection',
        element: (
          <PrivateRoute>
            <AdvertisementSection />
          </PrivateRoute>
        ),
      },
      {
        path: 'paymentManagement',
        element: (
          <PrivateRoute>
            <PaymentManagement />
          </PrivateRoute>
        ),
      },

      {
        index: true,
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
