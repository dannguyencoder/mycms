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
    return axiosInstance.get('/getAllImages');
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

    return axiosInstance.post('/posts', postObject);
}

export function getAllPosts() {
    return axiosInstance.get('/posts');
}

export function getSinglePost(postId) {
    return axiosInstance.get(`/posts/${postId}`);
}

export function updatePost(postData) {
    return axiosInstance.patch(`/posts`, postData);
}

export function deletePost(postId) {
    return axiosInstance.delete(`/posts/${postId}`);
}

export function addCategory(categoryObject) {

    console.log("upload data--------------");
    console.log(categoryObject);

    return axiosInstance.post('/categories', categoryObject)
}

export function getAllCategories() {
    // try {
    //     const data = ;
    return axiosInstance.get('/categories');
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
    return axiosInstance.get(`/categories/${categoryId}`);
}

export function updateCategory(categoryData) {
    return axiosInstance.patch(`/categories`, categoryData);
}

export function deleteCategory(categoryId) {
    return axiosInstance.delete(`/categories/${categoryId}`);
}

export function getAllUsers() {

    return axiosInstance.get(`/users`);
}

export function getSingleUser(userId) {
    return axiosInstance.get(`/users/${userId}`);
}

export function addUser(userData) {
    return axiosInstance.post(`/users`, userData);
}

export function updateUser(userData) {
    return axiosInstance.patch(`/users`, userData)
}

export function deleteUser(userId) {
    return axiosInstance.delete(`/users/${userId}`)
}

export function login(loginData) {
    return axiosInstance.post('/users/login', loginData);
}

export function logout() {
    return axiosInstance.post('/users/logout');
}

export function addDomain(domainObject) {
    return axiosInstance.post('/domains', domainObject);
}

export function getAllDomains() {
    return axiosInstance.get('/domains');
}

export function getSingleDomain(domainId) {
    return axiosInstance.get(`/domains/${domainId}`);
}

export function updateDomain(domainData) {
    return axiosInstance.patch(`/domains`, domainData);
}

export function deleteDomain(domainId) {
    return axiosInstance.delete(`/domains/${domainId}`);
}

export function addLanguage(languageObject) {
    return axiosInstance.post('/languages', languageObject);
}

export function getAllLanguages() {
    return axiosInstance.get('/languages');
}

export function getSingleLanguage(languageId) {
    return axiosInstance.get(`/languages/${languageId}`);
}

export function updateLanguage(languageData) {
    return axiosInstance.patch(`/languages`, languageData);
}

export function deleteLanguage(languageId) {
    return axiosInstance.delete(`/languages/${languageId}`);
}

export function addObject(objectObject) {
    return axiosInstance.post('/objects', objectObject);
}

export function getAllObjects() {
    return axiosInstance.get('/objects');
}

export function getSingleObject(objectId) {
    return axiosInstance.get(`/objects/${objectId}`);
}

export function updateObject(objectData) {
    return axiosInstance.patch(`/objects`, objectData);
}

export function deleteObject(objectId) {
    return axiosInstance.delete(`/objects/${objectId}`);
}

export function addRole(roleObject) {
    return axiosInstance.post('/roles', roleObject);
}

export function getAllRoles() {
    return axiosInstance.get('/roles');
}

export function getSingleRole(roleId) {
    return axiosInstance.get(`/roles/${roleId}`);
}

export function updateRole(roleData) {
    return axiosInstance.patch(`/roles`, roleData);
}

export function deleteRole(roleId) {
    return axiosInstance.delete(`/roles/${roleId}`);
}

export function addRoleObject(roleObjectObject) {
    return axiosInstance.post('/roleObjects', roleObjectObject);
}

export function getAllRoleObjects() {
    return axiosInstance.get('/roleObjects');
}

export function getSingleRoleObject(roleObjectId) {
    return axiosInstance.get(`/roleObjects/${roleObjectId}`);
}

export function updateRoleObject(roleObjectData) {
    return axiosInstance.patch(`/roleObjects`, roleObjectData);
}

export function deleteRoleObject(roleObjectId) {
    return axiosInstance.delete(`/roleObjects/${roleObjectId}`);
}