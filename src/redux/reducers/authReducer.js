import { userTypes } from '../../constants'

const initialState =  {};

export default function authReducer(state = initialState, action){
    switch (action.type){
        case userTypes.LOGIN_SUCCESS:
            return {
                user: action.user,
                loggedIn: true,
            }
        default:
            return state
    }
}