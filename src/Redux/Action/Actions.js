import { ADD_DATA, REMOVE_DATA, UPDATE_DATA } from '../ActionTypes';




export const addData = (data) => {
    return {
        type: ADD_DATA,
        data
    }
}


export const removeData = (data) => {
    return {
        type: REMOVE_DATA,
        data
    }
}



export const updateData = (data) => {
    return {
        type: UPDATE_DATA,
        data
    }
}