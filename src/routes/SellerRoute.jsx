import PropTypes from 'prop-types';
import useRole from './../hooks/useRole';
import Lodingspner from '../components/Lodingspner';
import { Navigate } from 'react-router-dom';

const SellerRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) return <Lodingspner />;
  if (role === 'seller') return children;
  return <Navigate to="/dashbors" state={{ from: location }} replace="true" />;
};

SellerRoute.propTypes = {
  children: PropTypes.element,
};

export default SellerRoute;
