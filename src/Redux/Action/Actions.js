import { ADD_DATA, REMOVE_DATA, UPDATE_DATA } from './ActionTypes';




export const addData = (data) => {
    return {
        type: ADD_DATA,
        payload: data
    }
}


export const removeData = (data) => {
    return {
        type: REMOVE_DATA,
        payload: data
    }
}



export const updateData = (data) => {
    return {
        type: UPDATE_DATA,
        payload: data
    }
}