import Home from '../components/pages/Home';
import ReadUser from '../components/pages/users/ReadUsers';
import EditUser from '../components/pages/users/EditUser';
// import AddUser from '../components/pages/users/AddUser';

export const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/users/readUsers",
        component: ReadUser
    },
    {
        path: "/users/editUser",
        component: EditUser
    }
    // {
    //     path: "/users",
    //     component: ReadUser,
    //     routes: [
    //         {
    //             path: "/users/readUsers",
    //             component: ReadUser
    //         },
    //         {
    //             path: "/users/addUser",
    //             component: AddUser
    //         },
    //         {
    //             path: "/users/editUser",
    //             component: EditUser
    //         }
    //     ]
    // }
];