import {userTypes} from "../../constants";
import * as userApi from '../../api/userApi'


// action creators
function logout(){
    // userService.logout() // =>  localStorage.removeItem('user');
    return {
        type: userTypes.LOGOUT
    }
}

function loadUserSuccess(user){
    return{
        type: userTypes.LOGIN_SUCCESS,
        user
    }
}

// thunks
function login(userInfo){
    return async (dispatch) => {
        const user = await userApi.getUser(userInfo)

        if (user) {
            console.log('login successful:',user)
            dispatch(loadUserSuccess(user))
        } else {
            console.log('wrong login info')
        }
    }
}




export const userActions = {
    login,
    logout
};