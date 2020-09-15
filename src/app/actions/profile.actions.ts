import { createAction, props } from '@ngrx/store'; 

export const setName = createAction(
    '[Profile Component] SetName',
    props<{name: string;}>()
);

export const setAge = createAction(
    '[Profile Component] SetAge', 
    props<{age: number;}>()
)