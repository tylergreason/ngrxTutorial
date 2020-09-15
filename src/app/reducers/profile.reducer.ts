import { createReducer, on } from '@ngrx/store'; 
import * as profileActions from '../actions/profile.actions'; 

export const initialState = {name: "initial name"}; 

const _profileReducer = createReducer(
    initialState, 
    on(profileActions.setName, (state, payload) => {
        return {...state, name: payload.newName}
    })
)

export function profileReducter(state,action){
    return _profileReducer(state, action); 
}
