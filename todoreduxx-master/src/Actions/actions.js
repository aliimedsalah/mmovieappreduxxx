import {ADD_TODO} from "./actionsexp"
import {REMOVE , COMPLET , EDIT, CHANGE} from "./actionsexp"


export  function addtodo (text){
    return {type:ADD_TODO , text} 
    
}
export function remove (i){
    return {type:REMOVE , i}
