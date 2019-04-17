import Home from '../components/pages/Home';
<<<<<<< HEAD
import ReadUser from '../components/pages/users/ReadUsers';
import EditUser from '../components/pages/users/EditUser';
// import AddUser from '../components/pages/users/AddUser';
=======
import ReadUsers from '../components/pages/users/ReadUsers';
import EditUsers from '../components/pages/users/EditUser';
import ReadPosts from '../components/pages/posts/ReadPosts';
>>>>>>> 0f925fb5acdbce2ddba0aa5da4db145ffb0848e4

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
<<<<<<< HEAD
        path: "/users/editUser",
        component: EditUser
=======
        path: "/posts/readPosts",
        component: ReadPosts
    },
    {
        path: "/users/editUser",
        component: EditUsers
>>>>>>> 0f925fb5acdbce2ddba0aa5da4db145ffb0848e4
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