import Login from '@components/auth/Login';
import GlobalStyle from '@/styling/GlobalStyle';
import LandingPage from '@components/Landing/LandingPage';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './auth/protected-route';

/** APP */

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/login" exact component={Login} />
        <ProtectedRoute exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
