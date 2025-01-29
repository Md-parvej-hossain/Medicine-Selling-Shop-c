import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import Language from '../../components/Language';
import { FaUserAlt } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const Nvbar = () => {
  const { user, logout } = useAuth();
  const [cart] = useCart();

  const handaleLogout = () => {
    logout()
      .then(() => {})
      .catch(error => console.log(error));
    toast.success('Logout Successfull !');
  };
  const navlinks = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/shop'}>Shop</NavLink>
      </li>
      <li>
        <NavLink to={'/login'}>Join Us</NavLink>
      </li>
      <li>
        <NavLink to={'/contact'}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={'/about'}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={'/invobepage'}>Invoice page</NavLink>
      </li>
    </>
  );

  const profaileNablink = (
    <>
      {user ? (
        <>
          {' '}
          <li>
            <Link>Update Profile</Link>
          </li>
          <li>
            <Link to={'/dashbors'}>Dashbord</Link>
          </li>
          <li onClick={handaleLogout}>
            <Link to={'/'}>Logout</Link>
          </li>
        </>
      ) : (
        <li>
          <Link to={'login'}>Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-base-100 fixed z-10 glass">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>

          <img
            height={'80px'}
            width={'80px'}
            className="text-xl rounded-full "
            src={logo}
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 z-10">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          {/* //secens */}

          <div className=" bg-base-100 items-center justify-center">
            <div className="flex items-center justify-center gap-5">
              <div className="z-10">
                <Language />
              </div>
              <div className="dropdown dropdown-end flex items-center gap-5">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <Link to={'/dashbors/addtocart'} className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      +{cart.length}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user && user.photoURL ? user.photoURL : <FaUserAlt />
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                >
                  {profaileNablink}
                </ul>
              </div>
            </div>
          </div>

          {/* secend */}
        </div>
      </div>
    </div>
  );
};

export default Nvbar;
