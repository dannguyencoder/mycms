import Home from '../components/pages/Home';

import Login from '../components/pages/auth/Login';
import AddUser from '../components/pages/users/AddUser';
import EditUser from '../components/pages/users/EditUser';
import ReadUsers from '../components/pages/users/ReadUsers';

import AddPost from '../components/pages/posts/AddPost';
import EditPost from '../components/pages/posts/EditPost';
import ReadPosts from '../components/pages/posts/ReadPosts';


import AddCategory from '../components/pages/category/AddCategory';
import EditCategory from '../components/pages/category/EditCategory';
import ReadCategories from '../components/pages/category/ReadCategories';


import AddDomain from '../components/pages/domains/AddDomain';
import EditDomain from '../components/pages/domains/EditDomain';
import ReadDomains from '../components/pages/domains/ReadDomains';

import AddLanguage from "../components/pages/languages/AddLanguage";
import EditLanguage from "../components/pages/languages/EditLanguage";
import ReadLanguages from "../components/pages/languages/ReadLanguages";

import AddObject from "../components/pages/objects/AddObject";
import EditObject from "../components/pages/objects/EditObject";
import ReadObjects from "../components/pages/objects/ReadObjects";

import AddRole from "../components/pages/roles/AddRole";
import EditRole from "../components/pages/roles/EditRole";
import ReadRoles from "../components/pages/roles/ReadRoles";

import AddRoleObject from "../components/pages/roleObjects/AddRoleObject";
import EditRoleObject from "../components/pages/roleObjects/EditRoleObject";
import ReadRoleObjects from "../components/pages/roleObjects/ReadRoleObjects";



export const adminRoutes = [
    {
        path: "/",
        component: Login
    },
    {
        path: "/admin/home",
        component: Home
    },
    {
        path: "/admin/users/readUsers",
        component: ReadUsers
    },
    {
        path: "/admin/users/editUser",
        component: EditUser
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
    },
    {
        path: "/admin/categories/addCategory",
        component: AddCategory
    },
    {
        path: "/admin/categories/editCategory",
        component: EditCategory
    },
    {
        path: "/admin/categories/readCategories",
        component: ReadCategories
    },
    {
        path: "/admin/domains/addDomain",
        component: AddDomain
    },{
        path: "/admin/domains/editDomain",
        component: EditDomain
    },
    {
        path: "/admin/domains/readDomains",
        component: ReadDomains
    },
    {
        path: "/admin/languages/addLanguage",
        component: AddLanguage
    },{
        path: "/admin/languages/editLanguage",
        component: EditLanguage
    },
    {
        path: "/admin/languages/readLanguages",
        component: ReadLanguages
    },
    {
        path: "/admin/objects/addObject",
        component: AddObject
    },{
        path: "/admin/objects/editObject",
        component: EditObject
    },
    {
        path: "/admin/objects/readObjects",
        component: ReadObjects
    },
    {
        path: "/admin/roles/addRole",
        component: AddRole
    },{
        path: "/admin/roles/editRole",
        component: EditRole
    },
    {
        path: "/admin/roles/readRoles",
        component: ReadRoles
    },
    {
        path: "/admin/roleObjects/addRoleObject",
        component: AddRoleObject
    },{
        path: "/admin/roleObjects/editRoleObject",
        component: EditRoleObject
    },
    {
        path: "/admin/roleObjects/readRoleObjects",
        component: ReadRoleObjects
    }
    // {
    //     path: "/users",
    //     component: ReadUser,
    //     adminRoutes: [
    //         {
    //             path: "/users/readUsers",
    //             component: ReadUser
    //         },
    //         {
    //             path: "/users/addUser",
    //             component: AddRole
    //         },
    //         {
    //             path: "/users/editUser",
    //             component: EditRole
    //         }
    //     ]
    // }
];