import { combineReducers } from 'redux';
import user from './user_reducer';
import authBoard from './authBoard_reducer';

const rootReducer = combineReducers({
    user,
    authBoard,
});

export default rootReducer;
