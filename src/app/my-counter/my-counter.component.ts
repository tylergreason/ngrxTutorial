import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store'; 
import { Observable } from 'rxjs'; 
import { increment, decrement, reset } from '../counter.actions'

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>

  constructor(
      private store: Store<{count:number}>
  ) { 
      this.count$ = store.pipe(select('count')); 
  }

  increment(){

  }
  
  decrement(){

  }

  reset(){

  }

  ngOnInit(): void {
  }

}
