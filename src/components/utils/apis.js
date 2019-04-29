import axios from 'axios';
import Qs from 'qs';
import http from 'http';
import https from 'https';
import { globalAxiosConfig } from './axiosConfig'

const axiosInstance = axios.create(globalAxiosConfig);


export async function getAllImages() {
    // console.log("axiosInstance=========")
    // console.log(axiosInstance);
    let returnData;
    try {
        const response = await axiosInstance.get('/images/getAllImages');
        returnData = response.data;
        return returnData;
    } catch (error) {
        return error;
    }
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
    console.log("returnData------------");
    console.log(returnData);
    return returnData;
}

export async function addPost(postObject) {

    const postData = {
        title: postObject.title,
        category: postObject.category,
        avatar: postObject.avatar,
        htmlBody: postObject.htmlBody,
        language: postObject.language,
        isActive: postObject.isActive,
        isVisible: postObject.isVisible,
        metaTags: postObject.metaTags,
        metaDesc: postObject.metaDesc,
        domain: postObject.domain,
        contentType: postObject.contentType
    };

    axiosInstance.post('/post/addPost', postData)
        .then((response) => {

            console.log(response);
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });

}

export async function addCategory(categoryObject) {

    const categoryData = {
        name: categoryObject.name,
        parentId: categoryObject.parentId,
        friendlyUrl: categoryObject.friendlyUrl,
        order: categoryObject.order,
        avatar: categoryObject.avatar,
        isActive: categoryObject.isActive,
        isVisible: categoryObject.isVisible,
        metaKeywords: categoryObject.metaKeywords,
        metaDescription: categoryObject.metaDescription,
        userId: categoryObject.userId,
        template: categoryObject.template,
        languageId: categoryObject.languageId,
        domainId: categoryObject.domainId
    };

    console.log("upload data--------------");
    console.log(categoryData);

    axiosInstance.post('/category/addCategory', categoryData)
        .then((response) => {

            console.log(response);
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });

}

export async function getAllCategories() {
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

export function getUserInformation(id){
    return axiosInstance.get('/user/getUser/'+id)
}