import { Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';

const ProtectedRoute = ({ component, ...args }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Route component={isAuthenticated ? component : Login} {...args} />
  );
};

export default ProtectedRoute;
