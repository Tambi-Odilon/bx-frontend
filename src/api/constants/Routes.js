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

const ListUser = Loadable({
    loader: () => import('../../views/Users/ListUser'),
    loading: Loading,
});

const AddUser = Loadable({
    loader: () => import('../../views/Users/AddUser'),
    loading: Loading,
});

const Error404 = Loadable({
    loader: () => import('../../views/pages/ErrorPage/Error404'),
    loading: Loading,
});

const routes = [
    { path: '/dashboard', name: 'Dashboard Page', component: Dashboard },
    { path: '/home', name: 'Home Page', component: Home },
    { path: '/users', name: 'List User Page', component: ListUser },
    { path: '/user', name: 'Add User Page', component: AddUser },
    { path: '/error404', name: 'Error 404 Page', component: Error404 }
]

export default routes;