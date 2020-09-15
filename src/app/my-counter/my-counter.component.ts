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
  test$: Observable<number>

  constructor(
      private store: Store<{}>,
    //   private test: Store<{test: number}>
  ) { 
      this.count$ = store.pipe(select('count')); 
      this.test$ = store.pipe(select('test')); 
      console.log(this.test$);
  }

  increment(){
    this.store.dispatch(increment({byNumber:50}));
    console.log(this.test$)
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
