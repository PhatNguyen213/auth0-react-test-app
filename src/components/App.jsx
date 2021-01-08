import Login from '@components/auth/Login';
import GlobalStyle from '@/styling/GlobalStyle';
import LandingPage from '@components/Landing/LandingPage';
import { Route, Switch } from 'react-router-dom';
import CallBack from './auth/callback';
import ProtectedRoute from './auth/protected-route';
import Home from './Landing/Home';

/** APP */

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/callback" component={CallBack} />
        <ProtectedRoute path="/home" exact component={Home} />
        <ProtectedRoute exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
