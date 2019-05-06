import axios from 'axios';
import Qs from 'qs';
import http from 'http';
import https from 'https';
import {globalAxiosConfig} from './axiosConfig'

const axiosInstance = axios.create(globalAxiosConfig);


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

export function getAllDomains() {
    return axiosInstance.get(`/domain/getDomains`);
}

export function getAllLanguages() {
    return axiosInstance.get(`/language/getLanguages`);
}
