export default (state = {}, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                loginData: action.loginData
            };
        case 'LOGOUT':
            return {
                ...state,
                errorInfo: action.errorInfo
            };
        default:
            return state;
    }
};