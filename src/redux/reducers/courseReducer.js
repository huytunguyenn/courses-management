import { courseTypes } from "../../constants";

const initialState = []

export default function courseReducer(state = initialState, action) {
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