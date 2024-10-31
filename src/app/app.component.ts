import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import {onchangedata} from './msg.action'
import {Observable} from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentvalue!:Observable<string>
  constructor(private store:Store<{main_msg:string}>){
    this.currentvalue=this.store.select("main_msg")
  }
  changedata(){
    this.store.dispatch(onchangedata({main_msg:"goodbye"}))
  }
}
