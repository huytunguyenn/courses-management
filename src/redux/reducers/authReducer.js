import { userTypes } from '../../constants'
import initialState from "./initialState";

export default function authReducer(state = initialState.user, action){
    switch (action.type){
        case userTypes.LOGIN_SUCCESS:
            return {
                user: action.user,
                loggedIn: true,
            }
        case userTypes.LOGOUT:
            return {}
        default:
            return state
    }
}