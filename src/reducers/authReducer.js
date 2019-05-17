export default (state = {}, action) => {
    console.log('current action data');
    console.log(action.payload);
    // console.log(action.payload.token);
    // console.log(action.payload.user);
    console.log('end payload data')
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,
                user: action.payload.user
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                token: null
            };
        default:
            return state;
    }
};