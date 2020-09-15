import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store'; 
import { Observable } from 'rxjs'; 
import { increment, decrement, reset } from '../actions/counter.actions'

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>

  constructor(
      private store: Store<{}>,
    //   private test: Store<{test: number}>
  ) { 
      this.count$ = store.pipe(select('count')); 
      this.name$ = store.pipe(select('name'))
  }

  increment(){
    this.store.dispatch(increment({byNumber:50}));
  }
  
  decrement(){
    this.store.dispatch(decrement()); 
  }

  reset(){
    this.store.dispatch(reset()); 
  }

  ngOnInit(): void {
  }

}
