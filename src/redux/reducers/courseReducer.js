import { classTypes } from "../../constants";

const initialState = []

export default function courseReducer(state = initialState, action) {
    switch (action.type){
        case classTypes.CREATE_COURSE:
            return [
                ...state,
                {...action.course}
            ];
        default:
            return state;
    }
}