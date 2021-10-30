import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes, TypeRoute } from '../../routes';

const Router = () => {
  return (
    <Switch>
      {routes.map((route: TypeRoute) => {
        return (
          <Route path={route.path} exact={route.exact} key={route.path}>
            {route.component}
          </Route>
        );
      })}
      <Route path="*">
        <>404</>
      </Route>
    </Switch>
  );
};

export default Router;
