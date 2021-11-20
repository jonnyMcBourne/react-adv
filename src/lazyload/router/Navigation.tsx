import React from "react"
import { NavLink, useRouteMatch, Switch,Route, Redirect } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const Navigation = () => {
    
const { path, url } = useRouteMatch();
console.log('path',path , 'url', url);
    return (
      <div>
        <h2>Lazy Layout</h2>
        <ul>
          <li>
            <NavLink to={`${url}/lazy1`}>Lazy 1</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/lazy2`}>Lazy 2</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/lazy3`}>Lazy 3</NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path={`${path}/lazy1`}>
            <LazyPage1 />
          </Route>
          <Route exact path={`${path}/lazy2`}>
            <LazyPage2 />
          </Route>
          <Route exact path={`${path}/lazy3`}>
            <LazyPage3 />
          </Route>
          <Redirect to={`${path}/lazy1`} />
        </Switch>
      </div>
    );
}
