import {createReducer,on} from '@ngrx/store'
import {onchangedata} from './msg.action'
const first:string="hello"
export const reducerfun=createReducer(first,
    on(onchangedata,(state,{main_msg})=>main_msg)
)