import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import { Container, Button } from 'reactstrap';
import routes from '../../api/constants/Routes';

import {
  AppBreadcrumb
} from '@coreui/react';
import Error404 from '../../views/pages/ErrorPage/Error404';

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
            {/* page name */}
            <AppBreadcrumb appRoutes={routes}/>
            <div id="home">
                    <Button color="info" tag={Link} to="/home">Home</Button>
              </div> 
            <Container fluid>
              <Suspense fallback={this.loading()}>

            {/* <Router><BrowserRouter> */}
            
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
                      )} />
                      )
                      : (null);
                  },
                )}
                
                {/* 
                  Si authentifié
                    => redirect /dashboard
                  Sinon login
                */}
                
                <Redirect exact from="/" to="/dashboard" />
                <Route name="Error 404 Page" component={Error404} /> 
                
              </Switch>
              
              {/* </Router></BrowserRouter> */}
              </Suspense>
            </Container>
          </main>
        </div>
        
      </div>
    );
  }
}

export default DefaultLayout;
