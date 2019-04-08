import Home from '../components/pages/Home';
import AddUser from '../components/pages/users/AddUser';
import EditUser from '../components/pages/users/EditUser';
import ReadUser from '../components/pages/users/ReadUsers';

export const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/users",
        component: ReadUser,
        routes: [
            {
                path: "/users/readUsers",
                component: ReadUser
            },
            {
                path: "/users/addUser",
                component: AddUser
            },
            {
                path: "/users/editUser",
                component: EditUser
            }
        ]
    }
];