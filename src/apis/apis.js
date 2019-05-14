import React from 'react';
import axios from 'axios';
import Qs from 'qs';
import http from 'http';
import https from 'https';
import {Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie';

import {globalAxiosConfig} from './axiosConfig'

const axiosInstance = axios.create(globalAxiosConfig);

axiosInstance.interceptors.response.use((response) => {
    // Do something with response data
    if (response.status === 301) {
        return <Redirect to="/login"/>;
    } else {
        return response;
    }
}, (error => {
    // Do something with response error
    return Promise.reject(error);
}));


export function getAllImages() {
    // console.log("axiosInstance=========")
    // console.log(axiosInstance);
    return axiosInstance.get('/images/getAllImages');
    // axiosInstance.get('/images/getAllImages')
    //     .then(response => {
    //         returnData = response.data;
    //         console.log("response-------------");
    //         console.log(returnData);
    //
    //         return returnData;
    //     })
    //     .catch(error => {
    //         returnData = error;
    //         console.log("error-----------------");
    //         console.log(returnData);
    //         return returnData;
    //     });
    // console.log("returnData------------");
    // console.log(returnData);
    // return returnData;
}

export function addPost(postObject) {

    return axiosInstance.post('/post/addPost', postObject);
}

export function getAllPosts() {
    return axiosInstance.get('/post/getPosts');
}

export function getSinglePost(postId) {
    return axiosInstance.get(`/post/getPost/${postId}`);
}

export function updatePost(postData) {
    return axiosInstance.patch(`/post/updatePost/${postData.id}`, postData);
}

export function deletePost(postId) {
    return axiosInstance.delete(`/post/deletePost/${postId}`);
}

export function addCategory(categoryObject) {

    console.log("upload data--------------");
    console.log(categoryObject);

    return axiosInstance.post('/category/addCategory', categoryObject)
}

export function getAllCategories() {
    // try {
    //     const data = ;
    return axiosInstance.get('/category/getCategories');
    // } catch (error) {
    //     throw error;
    // }

    // .then((response) => {
    //     console.log("from backend---------------")
    //     console.log(response);
    //     return response
    // })
    // .catch((error) => {
    //     console.log(error);
    //     return error
    // });
}

export function getSingleCategory(categoryId) {
    return axiosInstance.get(`/category/getCategory/${categoryId}`);
}

export function updateCategory(categoryData) {
    return axiosInstance.patch(`/category/updateCategory/${categoryData.id}`, categoryData);
}

export function deleteCategory(categoryId) {
    return axiosInstance.delete(`/category/deleteCategory/${categoryId}`);
}

export function getAllUsers() {

    return axiosInstance.get(`/user/getUsers`);
}

export function getSingleUser(userId) {
    return axiosInstance.get(`/user/getUser/${userId}`);
}

export function addUser(userData) {
    return axiosInstance.post(`/user/addUser`, userData);
}

export function updateUser(userData) {
    return axiosInstance.patch(`/user/updateUser/${userData.id}`, userData)
}

export function deleteUser(userId) {
    return axiosInstance.delete(`/user/deleteUser/${userId}`)
}

export function login(loginData) {
    return axiosInstance.post('/user/login', loginData);
}

export function logout() {
    return axiosInstance.post('/user/logout');
}

export function addDomain(domainObject) {
    return axiosInstance.post('/domain/addDomain', domainObject);
}

export function getAllDomains() {
    return axiosInstance.get('/domain/getDomains');
}

export function getSingleDomain(domainId) {
    return axiosInstance.get(`/domain/getDomain/${domainId}`);
}

export function updateDomain(domainData) {
    return axiosInstance.patch(`/domain/updateDomain/${domainData.id}`, domainData);
}

export function deleteDomain(domainId) {
    return axiosInstance.delete(`/domain/deleteDomain/${domainId}`);
}

export function addLanguage(languageObject) {
    return axiosInstance.post('/language/addLanguage', languageObject);
}

export function getAllLanguages() {
    return axiosInstance.get('/language/getLanguages');
}

export function getSingleLanguage(languageId) {
    return axiosInstance.get(`/language/getLanguage/${languageId}`);
}

export function updateLanguage(languageData) {
    return axiosInstance.patch(`/language/updateLanguage/${languageData.id}`, languageData);
}

export function deleteLanguage(languageId) {
    return axiosInstance.delete(`/language/deleteLanguage/${languageId}`);
}

export function addObject(objectObject) {
    return axiosInstance.post('/object/addObject', objectObject);
}

export function getAllObjects() {
    return axiosInstance.get('/object/getObjects');
}

export function getSingleObject(objectId) {
    return axiosInstance.get(`/object/getObject/${objectId}`);
}

export function updateObject(objectData) {
    return axiosInstance.patch(`/object/updateObject/${objectData.id}`, objectData);
}

export function deleteObject(objectId) {
    return axiosInstance.delete(`/object/deleteObject/${objectId}`);
}

export function addRole(roleObject) {
    return axiosInstance.post('/role/addRole', roleObject);
}

export function getAllRoles() {
    return axiosInstance.get('/role/getRoles');
}

export function getSingleRole(roleId) {
    return axiosInstance.get(`/role/getRole/${roleId}`);
}

export function updateRole(roleData) {
    return axiosInstance.patch(`/role/updateRole/${roleData.id}`, roleData);
}

export function deleteRole(roleId) {
    return axiosInstance.delete(`/role/deleteRole/${roleId}`);
}

export function addRoleObject(roleObjectObject) {
    return axiosInstance.post('/roleObject/addRoleObject', roleObjectObject);
}

export function getAllRoleObjects() {
    return axiosInstance.get('/roleObject/getRoleObjects');
}

export function getSingleRoleObject(roleObjectId) {
    return axiosInstance.get(`/roleObject/getRoleObject/${roleObjectId}`);
}

export function updateRoleObject(roleObjectData) {
    return axiosInstance.patch(`/roleObject/updateRoleObject/${roleObjectData.id}`, roleObjectData);
}

export function deleteRoleObject(roleObjectId) {
    return axiosInstance.delete(`/roleObject/deleteRoleObject/${roleObjectId}`);
}