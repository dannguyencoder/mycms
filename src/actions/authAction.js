import * as apis from '../apis/apis';
import {showError} from '../actions/errorAction';

export const login = (loginData) => ({
    type: 'LOGIN',
    loginData
});

export const startLogin = (loginData) => {
    return (dispatch) => {
        // return  => call api login and then, catch => dispatch action on state of store => set token state on reducer
        return apis.login(loginData)
            .then((response) => {
                dispatch(login(response.data));
            })
            .catch((error) => {
                dispatch(showError());
            })
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return (dispatch) => {
        // return  => call api logout and then, catch => dispatch action on state of store => delete token state on reducer
        return apis.logout()
            .then((response) => {
                dispatch(logout());
            })
            .catch((error) => {
                dispatch(showError());
            })
    }
};