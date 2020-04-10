import {ADD_TODO} from "../Actions/actionsexp"
import {REMOVE , COMPLET , EDIT, CHANGE} from "../Actions/actionsexp"
const globalState=[]

 function todoReducers(state=globalState , action){
     switch(action.type){
        case ADD_TODO  :
               
        return state.concat(action.text)

        case REMOVE :
