import React from 'react';


import {
  Switch,
  Route,
} from "react-router-dom";

import { Routers } from './routers';


export function AppRouters() {
  return (
    <Switch>
      {
        Routers.map((route, idx) => {
          return (
            <Route
              key={idx}
              exact={route.exact}
              path={route.path}
            >
              <route.component />
            </Route>
          )
        })
      }
    </Switch>
  )
}
