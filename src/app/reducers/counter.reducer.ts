import { createReducer, on } from '@ngrx/store'; 
// import all the exported actions from counter.actions 
import * as counterActions from '../actions/counter.actions'; 

export const initialState = 0; 

const _counterReducer = createReducer(
    initialState, 
    on(counterActions.increment, (state, action) => {
        if (action.byNumber){
            return state + action.byNumber;
        }else{
            return state + 1;
        }
        }),
    on(counterActions.decrement, (state) => state-1), 
    on(counterActions.reset, (state) => 0)
)

export function counterReducer(state, action){
    return _counterReducer(state, action);
}