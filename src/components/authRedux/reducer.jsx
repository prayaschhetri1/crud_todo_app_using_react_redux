import { LOGGED_IN_CHECK } from "./Action"

const initialState = {
    isAuth:false,

}

const AuthReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGGED_IN_CHECK:{


            
            return {...state,isAuth:true}
        }
        default:{
            return state
        }
    }
}