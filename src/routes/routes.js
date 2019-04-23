import Home from '../components/pages/Home';
import ReadUsers from '../components/pages/users/ReadUsers';
import EditUsers from '../components/pages/users/EditUser';
import AddUser from '../components/pages/users/AddUser';
import ReadPosts from '../components/pages/posts/ReadPosts';
import EditPost from '../components/pages/posts/EditPost';
import AddPost from '../components/pages/posts/AddPost';
import Login from '../components/partials/Login';

export const routes = [
    {
        path: "/admin",
        component: Home
    },
    {
        path: "/login",
        component: Login,
        type: "login"
    },
    {
        path: "/admin/users/readUsers",
        component: ReadUsers
    },
    {
        path: "/admin/users/editUser",
        component: EditUsers
    },
    {
        path: "/admin/users/addUser",
        component: AddUser
    },
    {
        path: "/admin/posts/readPosts",
        component: ReadPosts
    },
    {
        path: "/admin/posts/editPost",
        component: EditPost
    },
    {
        path: "/admin/posts/addPost",
        component: AddPost
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