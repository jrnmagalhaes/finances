import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../context';

const PublicOnlyRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export { PublicOnlyRoute };
