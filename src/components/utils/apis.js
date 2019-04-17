import axios from 'axios';
import Qs from 'qs';
import http from 'http';
import https from 'https';
import {globalAxiosConfig} from 'axiosConfig'

const axiosInstance = axios.create(globalAxiosConfig);

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

    axios.post('/posts/addPost', postData)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

}

