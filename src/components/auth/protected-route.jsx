import { Redirect, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const ProtectedRoute = ({ component: RouteComponent, ...args }) => {
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
  });
  return (
    <Route
      render={() => !isAuthenticated ? <Redirect to="/login" /> : <RouteComponent />}
      {...args}
    />
  );
};

export default ProtectedRoute;
