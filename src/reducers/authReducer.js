export default (state = {}, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                loginData: action.loginData
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                loginData: null
            };
        default:
            return state;
    }
};