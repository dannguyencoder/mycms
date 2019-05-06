import * as apis from '../apis/apis';
import {showError} from './errorAction';

export const addPost = (postData) => ({
    type: 'ADD_POST',
    post: postData
});

export const startAddPost = (postData) => {
    return (dispatch) => {
        // call api add post and then dispatch action to update posts state on store
        return apis.addPost(postData)
            .then((response) => dispatch(addPost(response.data)))
            .catch((error) => dispatch(showError(error)));
    };
};

export const editPost = (postData) => ({
    type: 'EDIT_POST',
    post: postData
});

export const startEditPost = (postData) => {
    return (dispatch) => {
        // call api add post and then dispatch action to update posts state on store
        // return the api function
        return apis.updatePost(postData)
            .then((response) => dispatch(addPost(response.data)))
            .catch((error) => dispatch(showError(error)));
    }
};