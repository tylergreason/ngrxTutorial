import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store'; 
import { Observable } from 'rxjs';  
import * as profileReducer from '../actions/profile.actions'; 


@Component({
  selector: 'app-profile-input',
  templateUrl: './profile-input.component.html',
  styleUrls: ['./profile-input.component.css']
})

export class ProfileInputComponent implements OnInit {

    // profile$: Observable<string>
    // name$: Observable<string>
    // age$: Observable<number>

    constructor(
        private store: Store<{}>,
    ) { 
        this.profile$ = store.pipe(select('profile'));
        this.name$ = this.profile$.pipe(select('name'));
        this.age$ = this.profile$.pipe(select('age'))
    }

    setName(nameString: string){
        this.store.dispatch(profileReducer.setName(
            {name: nameString}
            ))
    }

    setAge(newAge: number){
        this.store.dispatch(profileReducer.setAge(
            {age: newAge}
        ))
    }

    increaseAge(){
        this.store.dispatch(profileReducer.increaseAge())
    }

    ngOnInit(): void {
    }

}
