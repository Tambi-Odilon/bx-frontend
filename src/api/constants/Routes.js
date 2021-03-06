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
    loader: () => import('../../views/pages/Home/Home'),
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

const EditUser = Loadable({
    loader: () => import('../../views/Users/EditUser'),
    loading: Loading,
});

const Error404 = Loadable({
    loader: () => import('../../views/pages/ErrorPage/Error404'),
    loading: Loading,
});

// Test Edit
const EditTest = Loadable({
    loader: () => import('../../views/Users/EditTest'),
    loading: Loading,
});

const routes = [
    { path: '/dashboard', name: 'Dashboard Page', component: Dashboard },
    { path: '/home', name: 'Home Page', component: Home },
    { path: '/users', name: 'List User Page', component: ListUser },
    { path: '/user/add', name: 'Add User Page', component: AddUser },
    { path: '/user/edit/:idUser', name: 'Add User Page', component: EditUser },
    { path: '/error404', name: 'Error 404 Page', component: Error404 },
    //Test Edit
    { path: '/test', name: 'Edit Test Page', component: EditTest }
];

export default routes;