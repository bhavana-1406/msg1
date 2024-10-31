import {createAction,props} from '@ngrx/store'
export const onchangedata=createAction("label for changing data",props<{main_msg:string}>())