import {userTypes} from "../../constants";

function login(user){
    return {
        type: userTypes.LOGIN_SUCCESS,
        user: user
    };
}


export const userActions = {
    login
};