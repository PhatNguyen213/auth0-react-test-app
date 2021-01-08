import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Home from '../Landing/Home';

export default function CallBack() {
  const { isAuthenticated } = useAuth0();
  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated) history.push('/');
  }, [isAuthenticated]);
  return isAuthenticated ? <Home /> : null;
}
