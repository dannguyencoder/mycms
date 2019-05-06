export default (state = {}, action) => {
    switch(action.type) {
        case 'ADD_POST':
            return {
                uid: action.uid
            };
        case 'EDIT_POST':
            return {};
        default:
            return state;
    }
};