import Dashboard from './Dashboard/Dashboard';
import { AddUser, ListUser, EditUser } from './Users';
import { Error404, Home, Login } from './pages';
// import with {} is from simple export not default export 
export {
    Dashboard,
    ListUser,
    AddUser,
    EditUser,
    Error404,
    Home,
    Login
}