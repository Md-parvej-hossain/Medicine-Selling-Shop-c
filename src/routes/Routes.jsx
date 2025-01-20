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
        element: <ManageUser />,
      },
      {
        path: '/dashbors/addtocart',
        element: <AddtoCart />,
      },

      {
        index: true,
        element: <ManageCategore />,
      },
      {
        path: 'manageMedicin',
        element: <ManageMedices />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path: 'update/:id',
        element: <Update />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/medicen/${params.id}`),
      },
      {
        path: 'addmedicen',
        element: <AddMedsin />,
      },
    ],
  },
]);
