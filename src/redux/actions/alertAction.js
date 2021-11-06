import { alertTypes } from '../../constants'

function alertSuccess(message){
    return{
        type: alertTypes.SUCCESS,
        message
    }
}

function alertError(message){
    return{
        type: alertTypes.ERROR,
        message
    }
}

function alertClear(message){
    return{
        type: alertTypes.CLEAR,
        message
    }
}

export const alertActions = {
    alertSuccess,
    alertError,
    alertClear
}
