import { createReducer, on } from '@ngrx/store'; 
import * as profileActions from '../actions/profile.actions'; 

export const initialState = {name: "initial name", age: 50}; 

const _profileReducer = createReducer(
    initialState, 
    on(profileActions.setName, (state, payload) => {
        // console.log(state);
        
        return {...state, name: payload.name}
        // return {...state, name: payload.newName}
    }),
    on(profileActions.setAge, (state, payload) => {
        return payload.age
    })
)

export function profileReducer(state,action){
    return _profileReducer(state, action); 
}
