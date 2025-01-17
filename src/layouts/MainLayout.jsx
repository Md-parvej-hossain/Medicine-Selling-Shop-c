import { Outlet } from 'react-router-dom';
import Nvbar from '../pages/Home/Nabvar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div>
      <Nvbar />

      <div className=" min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
