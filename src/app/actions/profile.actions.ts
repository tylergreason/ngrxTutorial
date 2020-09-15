import { createActions, props } from '@nrgx/store'; 

export const setName = createAction(
    '[Name Component] SetName',
    props<{newName: string}>()
);