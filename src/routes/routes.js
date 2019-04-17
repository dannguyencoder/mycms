import Home from '../components/pages/Home';
import ReadUsers from '../components/pages/users/ReadUsers';
import EditUsers from '../components/pages/users/EditUser';
import AddUser from '../components/pages/users/AddUser';
import ReadPosts from '../components/pages/posts/ReadPosts';
import EditPost from '../components/pages/posts/EditPost';
import AddPost from '../components/pages/posts/AddPost';

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
        path: "/users/editUser",
        component: EditUsers
    },
    {
        path: "/users/addUser",
        component: AddUser
    },
    {
        path: "/posts/readPosts",
        component: ReadPosts
    },
    {
        path: "/posts/editPost",
        component: EditPost
    },
    {
        path: "/posts/addPost",
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