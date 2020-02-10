import React from 'react';
import Loadable from 'react-loadable';

function Loading() {
    return <div>Loading...</div>;
  }

const Dashboard = Loadable({
    loader: () => import('../../views/Dashboard/Dashboard'),
    loading: Loading,
});

const Home = Loadable({
    loader: () => import('../../views/Home/Home'),
    loading: Loading,
});

const User = Loadable({
    loader: () => import('../../views/Users/ListUser'),
    loading: Loading,
});

const routes = [
    { path: '/dashboard', name: 'Dashboard Page', component: Dashboard },
    { path: '/home', name: 'Home Page', component: Home },
    { path: '/user', name: 'User Page', component: User }
]

export default routes;