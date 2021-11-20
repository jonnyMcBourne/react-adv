import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
import logo from '../logo.svg';
import {routes} from './routes';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<div>loading....</div>} >
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map(({ path, name }, i) => (
              <li key={i}>
                <NavLink to={path}>{name}</NavLink>{" "}
              </li>
            ))}
          </ul>
        </nav>
        <Switch>
          {routes.map(({ path, Component }, i) => (
            <Route
              path={path}
              key={i}
              render={() => {
                return <Component />;
              }}
            />
          ))}
          <Redirect to={routes[0].path} />
        </Switch>
      </div>
    </Router>
    </Suspense>
  );
};