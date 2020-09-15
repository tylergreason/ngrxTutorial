import { createReducer, on } from '@ngrx/store'; 
import {setName} from '../actions/profile.actions'; 

export const initialState = {name: "initial name"}; 

const _profileReducer = createReducer(
    initialState, 
    on(setName, (state, payload) => {
        console.log(state);
        // console.log(state);
        
        return payload.name
        // return {...state, name: payload.newName}
    })
)

export function profileReducer(state,action){
    return _profileReducer(state, action); 
}
