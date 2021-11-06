import {ADD_DATA , REMOVE_DATA , UPDATE_DATA} from "../Action/ActionTypes";





const initialState = {
   formDetail : []
}




export default function Reducer(state = initialState , action) {
    switch (action.type) {
        case ADD_DATA :
            return  {
                ...state ,
                formDetail : [
                    ...state.formDetail ,
                    {
                        id : action.payload.id ,
                        fname : action.payload.fname ,
                        lname : action.payload.lname ,
                        age : action.payload.age ,
                        html : action.payload.html ,
                        css : action.payload.css ,
                        js : action.payload.js ,
                    }
                ]
            }


        case REMOVE_DATA :
            return {
                ...state ,
                formDetail : state.formDetail.filter(item => item.id !== action.payload)
            }

        case UPDATE_DATA :
            return  {
                ...state ,
                formDetail: state.formDetail.map( item =>
                    item.id == action.payload.id ? item = action.payload : item = item
                )
            }


        default :
            return state;
    }
}