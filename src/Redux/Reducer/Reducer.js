import {ADD_DATA , REMOVE_DATA , UPDATE_DATA} from "../Action/ActionTypes";





const initialState = {
   formDetail : [
       {
           id : 0,
           fname : "",
           lname : "",
           age : "",
           skill : "",

       }
   ]
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
                        skill : action.payload.skill ,
                    }
                ]
            }


        case REMOVE_DATA :
            return {
                ...state ,
                formDetail : state.formDetail.filter(item => item.id !== action.payload.id)
            }

        case UPDATE_DATA :
            return {
                ...state ,
                formDetail : state.formDetail.map(item => {
                    if(item.id === action.payload.id) {
                        return {
                            ...item ,
                            fname : action.payload.fname ,
                            lname : action.payload.lname ,
                            age : action.payload.age ,
                            skill : action.payload.skill ,
                        }
                    }
                    return item
                })
            }
        default :
            return state;
    }
}