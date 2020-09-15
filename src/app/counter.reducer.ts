import { createReducer, on } from '@ngrx/store'; 
import {increment, decrement, reset } from './counter.actions'; 

export const initialState = 0; 

const _counterReducer = createReducer(
    initialState, 
    on(increment, (state, action) => {
        if (action.byNumber){
            return state + action.byNumber;
        }else{
            return state + 1;
        }
        }),
    on(decrement, (state) => state-1), 
    on(reset, (state) => 0)
)

export function counterReducer(state, action){
    return _counterReducer(state, action);
}