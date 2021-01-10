import { Redirect, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ component: RouteComponent, ...args }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <Route
      render={() => {
        if (isLoading) return <div>Loading</div>;
        return !isAuthenticated ? <Redirect to="/login" /> : <RouteComponent />;
      }}
      {...args}
    />
  );
};

export default ProtectedRoute;
