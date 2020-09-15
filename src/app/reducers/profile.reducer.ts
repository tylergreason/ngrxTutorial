import { createReducer, on } from '@ngrx/store'; 
import * as profileActions from '../actions/profile.actions'; 

export const initialState = {name: "Jon", age: 50}; 

const _profileReducer = createReducer(
    initialState, 
    on(profileActions.setName, (state, payload) => { 
        return {...state, name: payload.name}
    }),
    on(profileActions.setAge, (state, payload) => {
        return {...state, age: payload.age}
    }),
    on(profileActions.increaseAge, (state) => {
        return {...state, age: state.age + 1}
    }),
)


export function profileReducer(state,action){
    return _profileReducer(state, action); 
}