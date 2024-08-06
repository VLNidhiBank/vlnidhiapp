import dispatchTypes from '../constants';
let initialState = {
    user: null,
    CustomerUserData: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case dispatchTypes.LOGOUT_CUSTOMER_USER:
            return { ...state, CustomerUserData: null };
        default:
            return state;
    }
}