import { combineReducers } from 'redux';
import courses from './courseReducer';
import user from './authReducer';

const rootReducer = combineReducers({
    courses,
    user
}) // lấy state ở đây (vd: state.courses)

export default rootReducer;