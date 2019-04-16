import Home from '../components/pages/Home';
import ReadUser from '../components/pages/users/ReadUsers';

export const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/users/readUsers",
        component: ReadUser
    },
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