import { courseTypes } from "../../constants";
import initialState from './initialState'

export default function courseReducer(state = initialState.courses, action) {
    switch (action.type){
        case courseTypes.CREATE_COURSE:
            return [
                ...state,
                {...action.course}
            ];
        case courseTypes.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}