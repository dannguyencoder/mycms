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



