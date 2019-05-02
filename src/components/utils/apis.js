import axios from 'axios';
import Qs from 'qs';
import http from 'http';
import https from 'https';
import { globalAxiosConfig } from './axiosConfig'

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

export function addCategory(categoryObject) {

    console.log("upload data--------------");
    console.log(categoryObject);

    return axiosInstance.post('/category/addCategory', categoryObject)
}

export function getAllCategories() {
    // try {
    //     const data = ;
    return await axiosInstance.get('/category/getCategories');
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


export function getRoles(userId) {
    var data = new FormData()
    data.append('user_id', '1')
    return axiosInstance.post('/user/getRoles', data);

}

export function login(formData) {
    return axiosInstance.post('/user/login', formData);
}

export function getDomain(formData) {
    return axiosInstance.post('/domain/getDomains', formData)
}
export function getUsersByAdminId(formData) {
    return axiosInstance.get('/user/getUsers', formData)
}

export function getUserInformation(id) {
    return axiosInstance.get('/user/getUser/' + id)
}

export async function getDataImage(data) {
    return axiosInstance.post('/utils/image-upload', data)
}
export function updateCategory(categoryData) {
    return axiosInstance.patch(`/category/updateCategory/${categoryData.id}`, categoryData);
}

export function deleteCategory(categoryId) {
    return axiosInstance.delete(`/category/deleteCategory/${categoryId}`);
}
