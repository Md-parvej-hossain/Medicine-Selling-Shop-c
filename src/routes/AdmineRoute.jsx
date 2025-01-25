import PropTypes from 'prop-types';
import useRole from './../hooks/useRole';
import Lodingspner from '../components/Lodingspner';
import { Navigate } from 'react-router-dom';

const AdmineRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) return <Lodingspner />;
  if (role === 'admin') return children;
  return <Navigate to="/dashbors" state={{ from: location }} replace="true" />;
};

AdmineRoute.propTypes = {
  children: PropTypes.element,
};

export default AdmineRoute;
