import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Lodingspner from '../components/Lodingspner';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Lodingspner />;
  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace="true" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
