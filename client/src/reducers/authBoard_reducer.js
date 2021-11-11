import { POST_AUTHBOARD } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case POST_AUTHBOARD:
            return { ...state, postAuthBoard: action.payload };
        default:
            return state;
    }
}
