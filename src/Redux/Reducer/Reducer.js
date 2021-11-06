import {ADD_DATA , REMOVE_DATA , UPDATE_DATA} from "../Action/ActionTypes";




const initialState = {
    fname : '',
    lname : '',
    age   : 0,
    skill : '',
}




export default function Reducer(state = initialState , action) {
    switch (action.type) {
        case ADD_DATA :
            return {
                ...state,
                fname : action.payload.fname,
                lname : action.payload.lname,
                age   : action.payload.age,
                skill : action.payload.skill,
            }
        case REMOVE_DATA :
            return {
                ...state,
                fname : '',
                lname : '',
                age   : 0,
                skill : '',
            }
        case UPDATE_DATA :
            return {
                ...state,
                fname : action.payload.fname,
                lname : action.payload.lname,
                age   : action.payload.age,
                skill : action.payload.skill,
            }
        default :
            return state;
    }
}