import { actionTypes } from './ActionConstants';

const initialUserState = {
    id: 0,
    isLoggedIn: false
};

export default function userReducer(state = initialUserState, action) {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return {
                isLoggedIn: true,
            };
        default:
            return state;
    }
}
