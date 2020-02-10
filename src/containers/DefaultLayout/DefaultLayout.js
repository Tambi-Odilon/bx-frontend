import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import routes from '../../api/constants/Routes';

import {
  AppBreadcrumb
} from '@coreui/react';

class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
            {/* page name */}
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (
                    <Route 
                    key={idx} 
                    path={route.path} 
                    exact={route.exact} 
                    name={route.name} 
                    render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                
                {/* 
                  Si authentifié
                    => redirect /dashboard
                  Sinon login
                */}

                <Redirect exact from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
        </div>
        
      </div>
    );
  }
}

export default DefaultLayout;
