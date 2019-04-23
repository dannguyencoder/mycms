import axios from 'axios';
import Qs from 'qs';
import http from 'http';
import https from 'https';
import {globalAxiosConfig} from './axiosConfig'

const axiosInstance = axios.create(globalAxiosConfig);

export function getAllImages() {
    // console.log("axiosInstance=========")
    // console.log(axiosInstance);
    axiosInstance.get('/images/getAllImages')
        .then(response => {
            console.log("response-------------");
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log("error-----------------");
            console.log(error);
            return error;
        });
    return 'fuck data';
}

function addPost(postObject) {

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
        })
        .catch((error) => {
            console.log(error);
        });

}



