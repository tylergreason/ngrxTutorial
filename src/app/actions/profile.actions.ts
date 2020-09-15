import { createAction, props } from '@ngrx/store'; 

export const setName = createAction(
    '[Name Component] SetName',
    props<{newName: string}>()
);