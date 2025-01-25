import useAuth from '../hooks/useAuth';

const Logout = () => {
  const { logout } = useAuth();
  return logout();
};

export default Logout;
