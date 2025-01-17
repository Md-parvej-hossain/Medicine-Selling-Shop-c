import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import CategoreTab from '../pages/Home/CatagoreSection/CategoreTab';
import AddtoCart from '../pages/Dashboard/Customer/AddtoCart';
import Chakout from '../pages/Dashboard/ChakOut/Chakout';
import DahboardLayout from '../layouts/DahboardLayout';
import Sidebare from '../components/Sidebare/Sidebare';
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
        path: '/category',
        element: <CategoreTab />,
      },
      {
        path: '/addtocart',
        element: <AddtoCart />,
      },
      // {
      //   path: '/invoicepage',
      //   element: <InvoicePage />,
      // },
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
  },
]);
