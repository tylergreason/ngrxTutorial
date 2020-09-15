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

    profile$: Observable<string>
    name$: Observable<string>
    constructor(
        private store: Store<{}>,
    ) { 
        this.profile$ = store.pipe(select('profile'));
        this.name = store.pipe(select('name'));
    }

    setName(nameString: string){
        this.store.dispatch(profileReducer.setName(
            {name: nameString}
            ))
    }

    setAge(age: number){
        this.store.dispatch(profileReducer.setAge(
            {age: 60}
        ))
    }

    ngOnInit(): void {
        this.setName('carl');
        console.log(this.profile$);
        
    }

}
