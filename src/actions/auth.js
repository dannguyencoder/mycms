import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return (dispatch) => {
        // return  => call api login and then, catch => dispatch action on state of store
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return (dispatch) => {
        // return  => call api logout and then, catch => dispatch action on state of store
        return firebase.auth().signOut();
    }
};