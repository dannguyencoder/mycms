import Home from '../components/pages/Home';
import ReadUsers from '../components/pages/users/ReadUsers';
import EditUsers from '../components/pages/users/EditUser';
import ReadPosts from '../components/pages/posts/ReadPosts';

export const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/users/readUsers",
        component: ReadUsers
    },
    {
        path: "/posts/readPosts",
        component: ReadPosts
    },
    {
        path: "/users/editUser",
        component: EditUsers
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